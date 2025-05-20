'use client';

import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dayjs from 'dayjs';
import styles from './TimelineEventCard.module.css';

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  category?: string;
}

interface TimelineEventCardProps {
  event: TimelineEvent;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const TimelineEventCard: FC<TimelineEventCardProps> = ({
  event,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={styles.cardWrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        className={isHovered ? styles.cardHovered : styles.card}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3 className={styles.title}>{event.title}</h3>
        <time className={styles.date}>
          {dayjs(event.date).format('MMMM D, YYYY')}
        </time>
        <div className={styles.descriptionContainer}>
          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={styles.description}
              >
                {event.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineEventCard; 