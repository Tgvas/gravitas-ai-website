'use client';

import { motion } from 'framer-motion';

interface Props {
  navy?: string;
  gold?: string;
  beige?: string;
}

const CENTER = { x: 200, y: 150 };
const AGENTS = [
  { x: 200, y: 58 },
  { x: 285, y: 90 },
  { x: 308, y: 180 },
  { x: 255, y: 248 },
  { x: 145, y: 248 },
  { x: 92, y: 180 },
];
const PEER_CONNECTIONS = [
  [0, 1],
  [1, 2],
  [4, 5],
];
const GOLD_PATH_IDX = 2; // center → AGENTS[2]

function gridLines() {
  const lines = [];
  for (let x = 0; x <= 400; x += 20) {
    lines.push(<line key={`v${x}`} x1={x} y1={0} x2={x} y2={300} />);
  }
  for (let y = 0; y <= 300; y += 20) {
    lines.push(<line key={`h${y}`} x1={0} y1={y} x2={400} y2={y} />);
  }
  return lines;
}

export function AgentNetworkIllustration({ navy = '#0D1B2A', gold = '#C49A2A', beige = '#F5F0E8' }: Props) {
  const pathD = (a: { x: number; y: number }, b: { x: number; y: number }) =>
    `M ${a.x} ${a.y} L ${b.x} ${b.y}`;

  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      aria-hidden="true"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background grid */}
      <g stroke={beige} strokeWidth={0.5} opacity={0.08}>
        {gridLines()}
      </g>

      {/* Standard connection lines — center to each agent */}
      {AGENTS.map((a, i) =>
        i === GOLD_PATH_IDX ? null : (
          <motion.line
            key={`cl${i}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={a.x}
            y2={a.y}
            stroke={navy}
            strokeWidth={1.5}
            strokeOpacity={0.4}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
          />
        )
      )}

      {/* Peer connections */}
      {PEER_CONNECTIONS.map(([i, j], k) => (
        <motion.line
          key={`pc${k}`}
          x1={AGENTS[i].x}
          y1={AGENTS[i].y}
          x2={AGENTS[j].x}
          y2={AGENTS[j].y}
          stroke={beige}
          strokeWidth={1}
          strokeOpacity={0.25}
          strokeDasharray="3 4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 + k * 0.1 }}
        />
      ))}

      {/* Gold highlighted path — center to agent[GOLD_PATH_IDX] */}
      <motion.line
        x1={CENTER.x}
        y1={CENTER.y}
        x2={AGENTS[GOLD_PATH_IDX].x}
        y2={AGENTS[GOLD_PATH_IDX].y}
        stroke={gold}
        strokeWidth={1.5}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
      />

      {/* Agent nodes */}
      {AGENTS.map((a, i) => (
        <motion.g
          key={`an${i}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 * i, ease: 'backOut' }}
          style={{ transformOrigin: `${a.x}px ${a.y}px` }}
        >
          <circle cx={a.x} cy={a.y} r={6} fill={navy} stroke={`${beige}50`} strokeWidth={1.5} />
          {i === GOLD_PATH_IDX && (
            <motion.circle
              cx={a.x}
              cy={a.y}
              r={10}
              fill="none"
              stroke={gold}
              strokeWidth={1}
              strokeOpacity={0.5}
              animate={{ r: [10, 13, 10], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          )}
        </motion.g>
      ))}

      {/* Central orchestrator node */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.05, ease: 'backOut' }}
        style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
      >
        <circle cx={CENTER.x} cy={CENTER.y} r={12} fill={navy} stroke={gold} strokeWidth={1.5} />
        {/* Pulse ring */}
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={18}
          fill="none"
          stroke={gold}
          strokeWidth={1}
          strokeOpacity={0.3}
          animate={{ r: [18, 24, 18], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
        />
      </motion.g>
    </svg>
  );
}
