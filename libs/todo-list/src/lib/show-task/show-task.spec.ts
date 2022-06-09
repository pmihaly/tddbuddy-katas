import { Task } from '../todo-list.types';
import { showTask } from './show-task'


const createStubTask = (): Task => ({
  id: 1,
  name: 'Task 1',
  status: 'completed',
  due: new Date('2020-01-01'),
});

describe('showTask', () => {
  it('should show a task', () => {
    expect(showTask(createStubTask())).toBe('Id: 1\nTask: Task 1\nDue: 2020-01-01')
  });
})
