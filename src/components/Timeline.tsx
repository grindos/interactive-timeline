'use client';

import type { FC } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import TimelineCircle from './TimelineCircle';
import TimelineEventCard from './TimelineEventCard';
import styles from './Timeline.module.css';

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
    <div className={styles.timelineContainer}>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineInner}>
          {/* Main timeline line */}
          <div className={styles.timelineLine} />

          {/* Events container */}
          <div className={styles.eventsContainer}>
            <div className={styles.eventsList}>
              {sortedEvents.map((event, index) => (
                <div key={event.id} className={styles.eventItem}>
                  <TimelineEventCard
                    event={event}
                    index={index}
                    isHovered={hoveredEvent?.id === event.id}
                    onMouseEnter={() => setHoveredEvent(event)}
                    onMouseLeave={() => setHoveredEvent(null)}
                  />
                  <div className={styles.connectingLine} />
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