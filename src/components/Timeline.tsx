'use client';

import type { FC } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import TimelineCircle from './TimelineCircle';
import TimelineEventCard from './TimelineEventCard';

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

const Timeline: FC<TimelineProps> = ({ events }) => {
  const [hoveredEvent, setHoveredEvent] = useState<TimelineEvent | null>(null);

  const sortedEvents = [...events].sort((a, b) => 
    dayjs(a.date).valueOf() - dayjs(b.date).valueOf()
  );

  return (
    <div className="relative w-screen h-screen">
      {/* Timeline container */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200" />

          {/* Events and dots container */}
          <div className="relative overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex space-x-8 min-w-max px-4">
              {sortedEvents.map((event, index) => (
                <div key={event.id} className="relative flex flex-col items-center">
                  <TimelineEventCard
                    event={event}
                    index={index}
                    isHovered={hoveredEvent?.id === event.id}
                    onMouseEnter={() => setHoveredEvent(event)}
                    onMouseLeave={() => setHoveredEvent(null)}
                  />

                  {/* Vertical connecting line */}
                  <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-200 transform -translate-x-1/2" />

                  <TimelineCircle index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 