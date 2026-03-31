'use client';

import { motion } from 'framer-motion';

interface Props {
  navy?: string;
  gold?: string;
  beige?: string;
}

const CX = 200;
const CY = 155;
const R = 110;
const NUM_AXES = 8;

function polarToCart(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

// Data values per axis (0-1), irregular polygon
const DATA_VALUES = [0.72, 0.55, 0.88, 0.45, 0.68, 0.82, 0.38, 0.60];
const GOLD_AXIS = 2; // axis highlighted in gold

export function RadarAnalysisIllustration({ navy = '#0D1B2A', gold = '#C49A2A', beige = '#F5F0E8' }: Props) {
  const axes = Array.from({ length: NUM_AXES }, (_, i) => {
    const angle = (i * 360) / NUM_AXES - 90;
    return { angle, end: polarToCart(angle, R), tick33: polarToCart(angle, R * 0.33), tick66: polarToCart(angle, R * 0.66) };
  });

  const polygonPoints = DATA_VALUES.map((v, i) => {
    const angle = (i * 360) / NUM_AXES - 90;
    return polarToCart(angle, R * v);
  });

  const polygonPath =
    polygonPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      aria-hidden="true"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Guide circles */}
      {[0.33, 0.66].map((r, i) => (
        <motion.circle
          key={`gc${i}`}
          cx={CX}
          cy={CY}
          r={R * r}
          stroke={navy}
          strokeWidth={1}
          strokeOpacity={0.13}
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />
      ))}

      {/* Outer circle */}
      <motion.circle
        cx={CX}
        cy={CY}
        r={R}
        stroke={navy}
        strokeWidth={1}
        strokeOpacity={0.1}
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />

      {/* Axis lines */}
      {axes.map((axis, i) => (
        <motion.line
          key={`ax${i}`}
          x1={CX}
          y1={CY}
          x2={axis.end.x}
          y2={axis.end.y}
          stroke={i === GOLD_AXIS ? gold : navy}
          strokeWidth={i === GOLD_AXIS ? 1.5 : 1}
          strokeOpacity={i === GOLD_AXIS ? 0.6 : 0.15}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
        />
      ))}

      {/* Tick marks */}
      {axes.map((axis, i) =>
        [axis.tick33, axis.tick66].map((tick, j) => (
          <motion.circle
            key={`tk${i}-${j}`}
            cx={tick.x}
            cy={tick.y}
            r={1.5}
            fill={navy}
            fillOpacity={0.15}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
          />
        ))
      )}

      {/* Data polygon */}
      <motion.path
        d={polygonPath}
        stroke={navy}
        strokeWidth={1.5}
        strokeOpacity={0.5}
        fill={navy}
        fillOpacity={0.06}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: 'easeInOut' }}
      />

      {/* Data points */}
      {polygonPoints.map((p, i) => (
        <motion.circle
          key={`dp${i}`}
          cx={p.x}
          cy={p.y}
          r={i === GOLD_AXIS ? 4 : 2.5}
          fill={i === GOLD_AXIS ? gold : navy}
          fillOpacity={i === GOLD_AXIS ? 1 : 0.4}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.8 + i * 0.05, ease: 'backOut' }}
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}
        />
      ))}

      {/* Gold point glow */}
      {(() => {
        const gp = polygonPoints[GOLD_AXIS];
        return (
          <motion.circle
            cx={gp.x}
            cy={gp.y}
            r={8}
            fill="none"
            stroke={gold}
            strokeWidth={1}
            strokeOpacity={0.4}
            initial={{ opacity: 0 }}
            animate={{ r: [8, 12, 8], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
          />
        );
      })()}
    </svg>
  );
}
