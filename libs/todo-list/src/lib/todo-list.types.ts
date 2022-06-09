export const statuses = ['incomplete', 'completed'] as const;
export type Status = typeof statuses[number];

export type Completable = {
  status: Status;
}

export type Expirable = {
  due: Date;
}

export type Identifiable = {
  id: number;
}

export type Nameable = {
  name: string;
}

export type Task = Identifiable & Completable & Expirable & Nameable



