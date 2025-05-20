'use client';

import type { FC } from 'react';
import { motion } from 'framer-motion';

interface TimelineCircleProps {
  index: number;
}

const TimelineCircle: FC<TimelineCircleProps> = ({ index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="relative z-10 w-3 h-3 rounded-full bg-blue-500"
    />
  );
};

export default TimelineCircle; 