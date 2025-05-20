export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  category?: string;
}

export const sampleEvents: TimelineEvent[] = [
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