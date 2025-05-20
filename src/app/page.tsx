'use client';

import type { FC } from 'react';
import Timeline from '@/components/Timeline';
import styles from "./page.module.css";
import { sampleEvents } from '@/data/sampleEvents';

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  category?: string;
}

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>Interactive Timeline</h1>
            <p className={styles.subtitle}>
              Explore the fascinating journey of historical events through our interactive timeline
            </p>
          </div>
        </div>
      </header>
      <Timeline events={sampleEvents} />
    </main>
  );
};

export default Home;
