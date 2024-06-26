import { LoggingConnectorEvent } from '.';

/**
 * The logging connector interface.
 * @category Connector
 */
export interface ILoggingConnector {
  /**
   * Logs a message with the specified data. Used to connect a custom logging system to log events from the SDK.
   * @param message The message to log.
   * @param event The event to log.
   */
  log(message: string, event: LoggingConnectorEvent): void;

  /**
   * Logs a warning with the specified data. Used to connect a custom logging system to log events from the SDK.
   * @param message The message to log.
   * @param event The event to log.
   */
  warn(message: string, event: LoggingConnectorEvent): void;

  /**
   * Logs an error with the specified data. Used to connect a custom logging system to log events from the SDK.
   * @param message The message to log.
   * @param event The event to log.
   */
  error(message: string, event: LoggingConnectorEvent): void;
}
