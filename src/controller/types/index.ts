/**
 * basic JSON response for controllers
 */
export type BasicResponse = {
  message: string
}

/**
 * Error JSON response
 */
export type ErrorRespose = {
  error: string,
  message: string
}

/**
 * basic JSON response for controllers
 */
export type GoodbyeResponse = {
  message: string
  date: Date
}