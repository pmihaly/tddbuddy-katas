import { Expirable, Identifiable, Nameable } from '../todo-list.types';

const padZero = (s: number): string => ('0' + s).slice(-2);

const showDate = (date: Date): string => [
  date.getFullYear(),
  padZero(date.getMonth() + 1),
  padZero(date.getDate())
].join('-');

export const showTask = ({ id, name, due }: Identifiable & Nameable & Expirable): string => [
  `Id: ${id}`,
  `Task: ${name}`,
  `Due: ${showDate(due)}`,
].join('\n');
