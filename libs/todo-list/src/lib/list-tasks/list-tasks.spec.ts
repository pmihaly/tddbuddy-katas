import { Completable, Task } from '../task/task.type'
import { listTasks } from './list-tasks'

const createStubTask = ({ status }: Completable): Task => ({
  id: 1,
  name: 'Task 1',
  due: new Date('2020-01-01'),
  status,
})

const createStubTaskArray = () => {
  const completedTasks = [
    createStubTask({ status: 'completed' }),
    createStubTask({ status: 'completed' }),
  ]
  const incompleteTasks = [
    createStubTask({ status: 'incomplete' }),
    createStubTask({ status: 'incomplete' }),
  ]

  return {
    completedTasks,
    incompleteTasks,
    tasks: [...completedTasks, ...incompleteTasks],
  }
}

describe('listTasks', () => {
  it('should return only completed tasks', () => {
    const { tasks, completedTasks } = createStubTaskArray()

    expect(listTasks({ tasks, filterStatus: 'completed' })).toStrictEqual(
      completedTasks
    )
  })

  it('should return only incomplete tasks', () => {
    const { tasks, incompleteTasks } = createStubTaskArray()

    expect(listTasks({ tasks, filterStatus: 'incomplete' })).toStrictEqual(
      incompleteTasks
    )
  })

  it('should return all tasks', () => {
    const { tasks } = createStubTaskArray()

    expect(listTasks({ tasks, filterStatus: 'all' })).toStrictEqual(tasks)
  })
})
