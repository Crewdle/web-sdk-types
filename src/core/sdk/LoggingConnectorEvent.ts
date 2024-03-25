/**
 * The logging connector event.
 * @category Core
 */
export type LoggingConnectorEvent = {
  vendorId: string;
  clusterId?: string;
  nodeId: string;
  nodeType: string;
  remoteId?: string;
  data?: Record<string, unknown>;
};
