'use client';

import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';
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

  const handleMouseEnter = useCallback((event: TimelineEvent) => {
    setHoveredEvent(event);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredEvent(null);
  }, []);

  const renderedEvents = useMemo(() => {
    return sortedEvents.map((event, index) => (
      <div key={event.id} className={styles.eventItem}>
        <TimelineEventCard
          event={event}
          index={index}
          isHovered={hoveredEvent?.id === event.id}
          onMouseEnter={() => handleMouseEnter(event)}
          onMouseLeave={handleMouseLeave}
        />
        <div className={styles.connectingLine} />
        <TimelineCircle index={index} />
      </div>
    ));
  }, [sortedEvents, hoveredEvent, handleMouseEnter, handleMouseLeave]);

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineInner}>
          {/* Main timeline line */}
          <div className={styles.timelineLine} />

          {/* Events container */}
          <div className={styles.eventsContainer}>
            <div className={styles.eventsList}>
              {renderedEvents}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
