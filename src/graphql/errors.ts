import { ApolloError } from "apollo-server-errors"

import { LogFn } from "pino"

import { CustomApolloErrorData } from "./index.types"

export class CustomApolloError extends ApolloError {
  log: LogFn
  forwardToClient: boolean

  constructor({
    message,
    code,
    forwardToClient,
    logger,
    level,
    ...metadata
  }: CustomApolloErrorData & { code: string }) {
    super(message ?? code, code, metadata)
    this.log = logger[level || "warn"].bind(logger)
    this.forwardToClient = forwardToClient || false
  }
}

export class UnknownGraphqlError extends CustomApolloError {
  constructor(errData: CustomApolloErrorData) {
    super({ code: "UNKNOWN_GRAPHQL_ERROR", forwardToClient: true, ...errData })
  }
}
