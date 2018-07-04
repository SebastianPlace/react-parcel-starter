// @flow

export type Routine = {
  id: string,
  name: string,
  description: string,
  duration: number,
  exercises: Array<string>,
  last_done: Date,
}

export type Exercise = {
  id: string,
  name: string,
  video_urls: Array<string>,
}

export type User = {
  id: string,
  first_name: string,
  last_name: string,
  avatar_url: string,
}

export type Plan = {
  id: string,
  name: string,
  routines: Array<Routine>,
}
