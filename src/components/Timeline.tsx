'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  category?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const DinosaurIcon: FC<{ className?: string }> = ({ className }) => (
  <span className={className}>🦖</span>
);

const Timeline: FC<TimelineProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const sortedEvents = [...events].sort((a, b) => 
    dayjs(a.date).valueOf() - dayjs(b.date).valueOf()
  );

  const handleEventClick = (event: TimelineEvent): void => {
    setSelectedEvent(event.id === selectedEvent?.id ? null : event);
  };

  return (
    <div className="relative w-screen h-screen">
      {/* Timeline line */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-px h-0.5 bg-gray-200" />

      <div className="relative overflow-x-auto h-full">
        <div className="flex space-x-8 min-w-max px-4 h-full items-center">
          {sortedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="z-20 mb-4">
                <div
                  className={`w-8 h-8 text-blue-500 cursor-pointer
                    ${selectedEvent?.id === event.id ? 'scale-150' : 'hover:scale-125'}
                    transition-transform duration-200`}
                  onClick={() => handleEventClick(event)}
                >
                  <DinosaurIcon className="w-full h-full" />
                </div>
              </div>
              <motion.div
                className={`bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-64
                  ${selectedEvent?.id === event.id ? 'ring-2 ring-blue-500' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <time className="text-sm text-gray-500">
                  {dayjs(event.date).format('MMMM D, YYYY')}
                </time>
                {selectedEvent?.id === event.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-2 text-gray-600"
                  >
                    {event.description}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 