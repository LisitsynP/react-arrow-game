export const INTERVAL_TIME: number = 2000

export interface IMapArrowCodes {
  ArrowUp: string
  ArrowDown: string
  ArrowLeft: string
  ArrowRight: string
}

export const MAP_ARROW_CODES: IMapArrowCodes = {
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowLeft: "⬅️",
  ArrowRight: "➡️",
}

export const ARR_ARROW_CODES = Object.keys(MAP_ARROW_CODES)

export interface IEndGameConditions {
  SUCCESS_COUNT: number
  UNSUCCESS_COUNT: number
}
export const END_GAME_CONDITIONS = {
  SUCCESS_COUNT: 3,
  UNSUCCESS_COUNT: 3,
}
