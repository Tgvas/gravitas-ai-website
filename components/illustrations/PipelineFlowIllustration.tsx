'use client';

import { motion } from 'framer-motion';

interface Props {
  navy?: string;
  gold?: string;
  beige?: string;
}

const STAGES = [
  { x: 40, y: 120, icon: 'dot' },
  { x: 140, y: 100, icon: 'line' },
  { x: 240, y: 130, icon: 'grid' },
  { x: 320, y: 105, icon: 'check' },
];
const W = 72;
const H = 40;
const GOLD_ARROW_START = 2; // arrow from STAGES[2] to STAGES[3] is gold

function stageIcon(type: string, x: number, y: number, navy: string, gold: string) {
  const cx = x + W / 2;
  const cy = y + H / 2;
  if (type === 'dot') return <circle cx={cx} cy={cy} r={3} fill={navy} fillOpacity={0.6} />;
  if (type === 'line') return <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} stroke={navy} strokeWidth={1.5} strokeOpacity={0.6} />;
  if (type === 'grid') {
    return (
      <g>
        <rect x={cx - 7} y={cy - 5} width={5} height={4} fill="none" stroke={navy} strokeWidth={1} strokeOpacity={0.4} />
        <rect x={cx + 1} y={cy - 5} width={5} height={4} fill="none" stroke={navy} strokeWidth={1} strokeOpacity={0.4} />
        <rect x={cx - 7} y={cy + 1} width={5} height={4} fill="none" stroke={navy} strokeWidth={1} strokeOpacity={0.4} />
        <rect x={cx + 1} y={cy + 1} width={5} height={4} fill="none" stroke={navy} strokeWidth={1} strokeOpacity={0.4} />
      </g>
    );
  }
  if (type === 'check') {
    return <polyline points={`${cx - 6},${cy} ${cx - 2},${cy + 5} ${cx + 6},${cy - 5}`} fill="none" stroke={gold} strokeWidth={1.5} strokeOpacity={0.8} />;
  }
  return null;
}

function arrowPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const x1 = from.x + W;
  const y1 = from.y + H / 2;
  const x2 = to.x;
  const y2 = to.y + H / 2;
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`;
}

export function PipelineFlowIllustration({ navy = '#0D1B2A', gold = '#C49A2A', beige = '#F5F0E8' }: Props) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      aria-hidden="true"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Subtle horizontal center guide */}
      <line x1={20} y1={150} x2={380} y2={150} stroke={navy} strokeWidth={0.5} strokeOpacity={0.06} />

      {/* Arrows between stages */}
      {STAGES.slice(0, -1).map((stage, i) => {
        const isGold = i === GOLD_ARROW_START;
        return (
          <motion.path
            key={`arr${i}`}
            d={arrowPath(stage, STAGES[i + 1])}
            stroke={isGold ? gold : navy}
            strokeWidth={1.5}
            strokeOpacity={isGold ? 0.8 : 0.2}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.25, ease: 'easeOut' }}
          />
        );
      })}

      {/* Arrow heads */}
      {STAGES.slice(0, -1).map((_, i) => {
        const to = STAGES[i + 1];
        const ax = to.x - 1;
        const ay = to.y + H / 2;
        const isGold = i === GOLD_ARROW_START;
        return (
          <motion.polygon
            key={`ah${i}`}
            points={`${ax},${ay} ${ax - 6},${ay - 3} ${ax - 6},${ay + 3}`}
            fill={isGold ? gold : navy}
            fillOpacity={isGold ? 0.8 : 0.2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.2 + i * 0.25 }}
          />
        );
      })}

      {/* Stage rectangles */}
      {STAGES.map((s, i) => (
        <motion.g
          key={`st${i}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 * i, ease: 'easeOut' }}
        >
          <rect
            x={s.x}
            y={s.y}
            width={W}
            height={H}
            rx={4}
            fill={navy}
            fillOpacity={0.03}
            stroke={navy}
            strokeWidth={1.5}
            strokeOpacity={0.2}
          />
          {stageIcon(s.icon, s.x, s.y, navy, gold)}
        </motion.g>
      ))}

      {/* Animated data packet dots along gold path */}
      {[0, 0.35, 0.7].map((offset, i) => {
        const from = STAGES[GOLD_ARROW_START];
        const to = STAGES[GOLD_ARROW_START + 1];
        // Approximate midpoint motion along the cubic bezier
        const x1 = from.x + W;
        const y1 = from.y + H / 2;
        const x2 = to.x;
        const y2 = to.y + H / 2;
        const mx = (x1 + x2) / 2;
        return (
          <motion.circle
            key={`pkt${i}`}
            r={2.5}
            fill={gold}
            fillOpacity={0.9}
            animate={{
              offsetDistance: ['0%', '100%'],
              opacity: [0, 1, 1, 0],
            }}
            style={{
              offsetPath: `path("M ${x1} ${y1} C ${mx} ${y1} ${mx} ${y2} ${x2} ${y2}")`,
            }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 1.6,
              delay: 2 + offset * 1.6,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Stage labels — subtle bottom ticks */}
      {STAGES.map((s, i) => (
        <motion.line
          key={`lbl${i}`}
          x1={s.x + W / 2}
          y1={s.y + H + 8}
          x2={s.x + W / 2}
          y2={s.y + H + 14}
          stroke={navy}
          strokeWidth={1}
          strokeOpacity={0.15}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 + i * 0.15 }}
        />
      ))}

      {/* Bottom flow hint line */}
      <motion.line
        x1={40}
        y1={220}
        x2={360}
        y2={220}
        stroke={navy}
        strokeWidth={1}
        strokeOpacity={0.08}
        strokeDasharray="3 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </svg>
  );
}
