'use client';

import type { FC } from 'react';
import Timeline from '@/components/Timeline';

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  category?: string;
}

const sampleEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'First Event',
    description: 'This is the description of the first major event in our timeline.',
    date: '2024-01-01',
  },
  {
    id: '2',
    title: 'Second Event',
    description: 'Something significant happened here that changed everything.',
    date: '2024-02-15',
  },
  {
    id: '3',
    title: 'Third Event',
    description: 'Another milestone was reached during this period.',
    date: '2024-03-30',
  },
  {
    id: '4',
    title: 'Fourth Event',
    description: 'The latest development in our journey.',
    date: '2024-05-01',
  },
  {
    id: '5',
    title: 'Fifth Event',
    description: 'A breakthrough moment that led to new opportunities.',
    date: '2024-06-15',
  },
  {
    id: '6',
    title: 'Sixth Event',
    description: 'An unexpected turn of events that changed our direction.',
    date: '2024-07-20',
  },
  {
    id: '7',
    title: 'Seventh Event',
    description: 'A major achievement that marked our progress.',
    date: '2024-08-25',
  },
  {
    id: '8',
    title: 'Eighth Event',
    description: 'A challenging period that helped us grow stronger.',
    date: '2024-09-30',
  },
  {
    id: '9',
    title: 'Ninth Event',
    description: 'A celebration of our journey and accomplishments.',
    date: '2024-10-15',
  },
  {
    id: '10',
    title: 'Tenth Event',
    description: 'The beginning of a new chapter in our story.',
    date: '2024-11-20',
  },
];

const Home: FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-10 bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Interactive Timeline
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Click on the timeline events to explore their details. The events are displayed chronologically.
            </p>
          </div>
        </div>
      </div>
      
      <div className="pt-32">
        <Timeline events={sampleEvents} />
      </div>
    </main>
  );
};

export default Home;
