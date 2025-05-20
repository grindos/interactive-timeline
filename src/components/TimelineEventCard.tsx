'use client';

import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dayjs from 'dayjs';

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
      className="relative mb-8"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        className={`bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-64
          ${isHovered ? 'ring-2 ring-blue-500' : ''}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
        <time className="text-sm text-gray-500">
          {dayjs(event.date).format('MMMM D, YYYY')}
        </time>
        <div className="mt-2 h-[1.5rem]">
          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-gray-600"
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