'use client';

import { motion } from 'framer-motion';

interface Props {
  navy?: string;
  gold?: string;
  beige?: string;
}

// Sparse constellation nodes — manually placed for natural feel
const NODES = [
  { x: 60,  y: 80,  r: 2, gold: false, delay: 0.5 },
  { x: 180, y: 40,  r: 1.5, gold: false, delay: 0.8 },
  { x: 320, y: 70,  r: 2.5, gold: true,  delay: 1.1 },
  { x: 400, y: 150, r: 1.5, gold: false, delay: 0.6 },
  { x: 270, y: 200, r: 2, gold: false, delay: 1.4 },
  { x: 130, y: 210, r: 1.5, gold: false, delay: 0.9 },
  { x: 50,  y: 300, r: 2, gold: false, delay: 1.2 },
  { x: 360, y: 330, r: 2.5, gold: true,  delay: 1.6 },
  { x: 210, y: 370, r: 1.5, gold: false, delay: 0.7 },
  { x: 440, y: 410, r: 2, gold: false, delay: 1.3 },
];

// A few connecting lines between nearby nodes
const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [4, 7], [6, 5],
];

export function HeroConstellationIllustration({ navy = '#0D1B2A', gold = '#C49A2A', beige = '#F5F0E8' }: Props) {
  return (
    <svg
      viewBox="0 0 440 440"
      fill="none"
      aria-hidden="true"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background grid — very faint */}
      <g stroke={beige} strokeWidth={0.5} opacity={0.06}>
        {Array.from({ length: 23 }, (_, i) => (
          <line key={`gv${i}`} x1={i * 20} y1={0} x2={i * 20} y2={440} />
        ))}
        {Array.from({ length: 23 }, (_, i) => (
          <line key={`gh${i}`} x1={0} y1={i * 20} x2={440} y2={i * 20} />
        ))}
      </g>

      {/* Constellation edges */}
      {EDGES.map(([a, b], i) => {
        const na = NODES[a];
        const nb = NODES[b];
        return (
          <motion.line
            key={`e${i}`}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke={beige}
            strokeWidth={1}
            strokeOpacity={0.12}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 + i * 0.1, ease: 'easeOut' }}
          />
        );
      })}

      {/* Nodes */}
      {NODES.map((n, i) => (
        <motion.g key={`n${i}`}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.gold ? gold : beige}
            fillOpacity={n.gold ? 0.7 : 0.35}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: n.delay, ease: 'backOut' }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          {n.gold && (
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r + 4}
              fill="none"
              stroke={gold}
              strokeWidth={1}
              strokeOpacity={0.25}
              animate={{ r: [n.r + 4, n.r + 9, n.r + 4], opacity: [0.25, 0, 0.25] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: n.delay + 1 }}
            />
          )}
        </motion.g>
      ))}
    </svg>
  );
}
