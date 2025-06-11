// === FILE: src/__tests__/TaskCard.test.js ===
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskCard from '../components/TaskCard';

describe('TaskCard Component', () => {
  test('renders task title', () => {
    const task = {
      id: '1',
      title: 'Test Task',
      description: '',
      priority: 'medium',
      status: 'todo',
    };

    render(
      <TaskCard
        task={task}
        onDelete={jest.fn()}
        onUpdateStatus={jest.fn()}
        onEdit={jest.fn()} // ← Tambahkan ini!
      />
    );

    expect(screen.getByText(/Test Task/i)).toBeInTheDocument();
  });
});
