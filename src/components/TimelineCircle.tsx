'use client';

import type { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './TimelineCircle.module.css';

interface TimelineCircleProps {
  index: number;
}

const TimelineCircle: FC<TimelineCircleProps> = ({ index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className={styles.circle}
    />
  );
};

export default TimelineCircle; 