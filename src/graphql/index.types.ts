import { Logger } from "pino"

export interface GqlContext {}

export type CustomApolloErrorData = {
  message?: string
  logger: Logger
  level?: "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "silent"
  forwardToClient?: boolean
  [key: string]: unknown
}
export type IError = {
  message: string
  readonly path: ReadonlyArray<string | number> | undefined
  code?: string
}
