// === FILE: src/__tests__/TaskCard.test.js ===
import { render, screen } from '@testing-library/react';
import TaskCard from '../components/TaskCard';

test('renders task title', () => {
  render(
    <TaskCard
      task={{ id: '1', title: 'Test Task', description: '', priority: 'medium', status: 'todo' }}
      onDelete={() => {}}
      onUpdateStatus={() => {}}
    />
  );
  expect(screen.getByText(/Test Task/i)).toBeInTheDocument();
});