// src/__tests__/TaskForm.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskForm from '../components/TaskForm';

describe('TaskForm Component', () => {
  test('render form input', () => {
    render(<TaskForm />);
    expect(screen.getByPlaceholderText(/judul tugas/i)).toBeInTheDocument();
    expect(screen.getByText(/prioritas/i)).toBeInTheDocument();
  });

  test('submit form memanggil handler', async () => {
    const mockSubmit = vi.fn();
    render(<TaskForm onAddTask={mockSubmit} />);

    await userEvent.type(screen.getByPlaceholderText(/judul tugas/i), 'Belajar TDD');
    await userEvent.click(screen.getByRole('button', { name: /tambahkan/i }));

    expect(mockSubmit).toHaveBeenCalledWith(expect.objectContaining({ title: 'Belajar TDD' }));
  });
});
