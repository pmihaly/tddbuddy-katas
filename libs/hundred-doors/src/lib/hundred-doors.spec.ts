import {
  DoorState,
  doorToString,
  hundredDoors,
  mapEveryNthElement,
  toggleDoor,
} from './hundred-doors'

describe('doorToString', () => {
  it('should show open door', () => {
    expect(doorToString('open')).toBe('@')
  })

  it('should show half-open door', () => {
    expect(doorToString('half-open')).toBe('H')
  })

  it('should show half-closed door', () => {
    expect(doorToString('half-closed')).toBe('H')
  })

  it('should show closed door', () => {
    expect(doorToString('closed')).toBe('#')
  })
})

describe('toggleDoor', () => {
  it('closed -> half-open', () => {
    expect(toggleDoor('closed')).toBe('half-open')
  })

  it('half-open -> open', () => {
    expect(toggleDoor('half-open')).toBe('open')
  })

  it('open -> half-closed', () => {
    expect(toggleDoor('open')).toBe('half-closed')
  })

  it('half-closed -> closed', () => {
    expect(toggleDoor('half-closed')).toBe('closed')
  })
})

describe('mapEveryNthElement', () => {
  it('should double every 3rd element', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const double = (x: number) => x * 2

    expect(mapEveryNthElement(double)(3)(array)).toEqual([
      1, 2, 6, 4, 5, 12, 7, 8, 18, 10,
    ])
  })
})

const produceArray = <TValue>(length: number, value: TValue): TValue[] =>
  Array.from({ length }, () => value)

describe('houndredDoors', () => {
  it('should half-open every door on first pass', () => {
    const doors: DoorState[] = produceArray(100, 'closed')

    expect(hundredDoors(1)(doors)).toEqual(produceArray(100, 'half-open'))
  })

  it('should open every second door on second pass', () => {
    const doors: DoorState[] = produceArray(100, 'closed')

    expect(hundredDoors(2)(doors)).toEqual(
      produceArray(50, <DoorState[]>['closed', 'half-open']).flat()
    )
  })
})
