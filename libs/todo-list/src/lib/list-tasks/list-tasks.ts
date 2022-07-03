import { Completable, statuses } from '../task/task.type'

const filterStatuses = [...statuses, 'all'] as const
type FilterStatus = typeof filterStatuses[number]

const isStatusMatching =
  ({ status: statusA }: Completable) =>
  ({ status: statusB }: Completable): boolean =>
    statusA === statusB

export const listTasks = <T extends Completable>({
  tasks,
  filterStatus,
}: {
  tasks: T[]
  filterStatus: FilterStatus
}): T[] =>
  filterStatus === 'all'
    ? tasks
    : tasks.filter(isStatusMatching({ status: filterStatus }))
