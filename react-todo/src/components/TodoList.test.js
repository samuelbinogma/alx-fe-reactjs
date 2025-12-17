import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'; // Adjust path if TodoList is separate

describe('TodoList Component', () => {
    // 1. Initial Render Test
        test('renders correctly with initial todos', () => {
        render(<App />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
        expect(screen.getByText('Write Tests')).toBeInTheDocument();
        
        // One should appear completed (strikethrough via class or query)
        const completedItems = screen.getAllByRole('listitem').filter(item => item.classList.contains('completed'));
        expect(completedItems.length).toBe(1);
    });

    // 2. Test Adding Todos
    test('allows adding a new todo', async () => {
        const user = userEvent.setup();
        render(<App />);

        const input = screen.getByTestId('add-input');
        const addButton = screen.getByRole('button', { name: /add/i });

        await user.type(input, 'New Todo Item');
        await user.click(addButton);

        expect(screen.getByText('New Todo Item')).toBeInTheDocument();
        expect(input).toHaveValue(''); // Input clears
    });

    // 3. Test Toggling Todos
    test('toggles todo completion on click', async () => {
        const user = userEvent.setup();
        render(<App />);

        const firstTodo = screen.getByText('Learn React');
        const todoItem = firstTodo.closest('li');

        await user.click(firstTodo);
        expect(todoItem).toHaveClass('completed');

        await user.click(firstTodo);
        expect(todoItem).not.toHaveClass('completed');
    });

    // 4. Test Deleting Todos
    test('deletes a todo item', async () => {
        const user = userEvent.setup();
        render(<App />);

        const deleteButtons = screen.getAllByText('Delete');
        await user.click(deleteButtons[0]);

        expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
});