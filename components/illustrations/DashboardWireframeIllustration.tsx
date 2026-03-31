'use client';

import { motion } from 'framer-motion';

interface Props {
  navy?: string;
  gold?: string;
  beige?: string;
}

// Layout constants
const PAD = 24;
const HEADER_H = 28;
const COL_W = 98;
const COL_GAP = 10;
const COL_Y = PAD + HEADER_H + 14;
const COLS_X = [PAD, PAD + COL_W + COL_GAP, PAD + (COL_W + COL_GAP) * 2];

// Cards per column: [heights]
const COLUMNS = [
  [36, 28, 40],
  [44, 32, 28],
  [30, 44],
];
const GOLD_CARD = { col: 1, card: 0 }; // "In Progress" first card = gold
const PROGRESS_Y = 272;
const PROGRESS_W = 400 - PAD * 2;
const PROGRESS_FILL = 0.62;

export function DashboardWireframeIllustration({ navy = '#0D1B2A', gold = '#C49A2A', beige = '#F5F0E8' }: Props) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      aria-hidden="true"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Header bar */}
      <motion.rect
        x={PAD}
        y={PAD}
        width={400 - PAD * 2}
        height={HEADER_H}
        rx={2}
        fill={navy}
        fillOpacity={0.03}
        stroke={navy}
        strokeWidth={1.5}
        strokeOpacity={0.15}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0 }}
      />

      {/* Header status dots */}
      {[0, 1].map((i) => (
        <motion.circle
          key={`hd${i}`}
          cx={PAD + 10 + i * 14}
          cy={PAD + HEADER_H / 2}
          r={3}
          fill={i === 0 ? gold : navy}
          fillOpacity={i === 0 ? 0.8 : 0.2}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.3 + i * 0.1, ease: 'backOut' }}
          style={{ transformOrigin: `${PAD + 10 + i * 14}px ${PAD + HEADER_H / 2}px` }}
        />
      ))}

      {/* Header title bar ghost */}
      <motion.rect
        x={PAD + 36}
        y={PAD + 10}
        width={60}
        height={8}
        rx={1}
        fill={navy}
        fillOpacity={0.08}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      />

      {/* Kanban columns */}
      {COLUMNS.map((cards, ci) => {
        let cardY = COL_Y + 20; // after column header
        return (
          <motion.g
            key={`col${ci}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.5 + ci * 0.12, ease: 'easeOut' }}
          >
            {/* Column label dot + line */}
            <circle
              cx={COLS_X[ci] + 5}
              cy={COL_Y + 8}
              r={2.5}
              fill={ci === 1 ? gold : navy}
              fillOpacity={ci === 1 ? 0.7 : 0.2}
            />
            <rect
              x={COLS_X[ci] + 12}
              y={COL_Y + 4}
              width={40}
              height={7}
              rx={1}
              fill={navy}
              fillOpacity={0.08}
            />

            {cards.map((h, i) => {
              const isGold = ci === GOLD_CARD.col && i === GOLD_CARD.card;
              const y = cardY;
              cardY += h + 6;
              return (
                <motion.g
                  key={`card${ci}-${i}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + ci * 0.12 + i * 0.1 }}
                >
                  <rect
                    x={COLS_X[ci]}
                    y={y}
                    width={COL_W}
                    height={h}
                    rx={2}
                    fill={isGold ? gold : navy}
                    fillOpacity={isGold ? 0.05 : 0.02}
                    stroke={isGold ? gold : navy}
                    strokeWidth={1.5}
                    strokeOpacity={isGold ? 0.5 : 0.15}
                  />
                  {/* Card content lines */}
                  <rect
                    x={COLS_X[ci] + 8}
                    y={y + 8}
                    width={COL_W - 24}
                    height={5}
                    rx={1}
                    fill={isGold ? gold : navy}
                    fillOpacity={isGold ? 0.3 : 0.12}
                  />
                  {h > 32 && (
                    <rect
                      x={COLS_X[ci] + 8}
                      y={y + 18}
                      width={(COL_W - 24) * 0.6}
                      height={4}
                      rx={1}
                      fill={isGold ? gold : navy}
                      fillOpacity={isGold ? 0.2 : 0.08}
                    />
                  )}
                  {/* Gold pulse */}
                  {isGold && (
                    <motion.rect
                      x={COLS_X[ci]}
                      y={y}
                      width={COL_W}
                      height={h}
                      rx={2}
                      fill="none"
                      stroke={gold}
                      strokeWidth={1.5}
                      strokeOpacity={0.5}
                      animate={{ strokeOpacity: [0.5, 0.15, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    />
                  )}
                </motion.g>
              );
            })}
          </motion.g>
        );
      })}

      {/* Progress bar background */}
      <motion.rect
        x={PAD}
        y={PROGRESS_Y}
        width={PROGRESS_W}
        height={6}
        rx={3}
        fill={navy}
        fillOpacity={0.06}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.5 }}
      />

      {/* Progress bar fill */}
      <motion.rect
        x={PAD}
        y={PROGRESS_Y}
        width={0}
        height={6}
        rx={3}
        fill={gold}
        fillOpacity={0.7}
        animate={{ width: PROGRESS_W * PROGRESS_FILL }}
        transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
      />
    </svg>
  );
}
