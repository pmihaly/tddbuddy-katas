export const doorStates = [
  'closed',
  'half-open',
  'open',
  'half-closed',
] as const
export type DoorState = typeof doorStates[number]

const doorToStringMap: Record<DoorState, string> = {
  closed: '#',
  'half-open': 'H',
  open: '@',
  'half-closed': 'H',
}
export const doorToString = (door: DoorState): string => doorToStringMap[door]

const toggleDoorMap: Record<DoorState, DoorState> = {
  closed: 'half-open',
  'half-open': 'open',
  open: 'half-closed',
  'half-closed': 'closed',
}
export const toggleDoor = (door: DoorState): DoorState => toggleDoorMap[door]

export const mapEveryNthElement =
  <TElement>(mapFn: (element: TElement) => TElement) =>
  (n: number) =>
  (array: TElement[]) =>
    array.map((element, index) =>
      (index + 1) % n === 0 ? mapFn(element) : element
    )

export const hundredDoors = mapEveryNthElement(toggleDoor)
