/**
 * The peer connection data channel connector interface.
 * @category Connector
 */
export interface IPeerConnectionDataChannelConnector {
    /**
     * The current buffered amount.
     */
    readonly bufferedAmount: number;
    /**
     * The current state of the data channel.
     */
    readonly state: string;
    /**
     * The low threshold for the buffered amount.
     */
    bufferedAmountLowThreshold: number;
    /**
     * The callback for when the buffered amount is low.
     */
    onBufferedAmountLow: (() => void) | null;
    /**
     * The callback for when the data channel closes.
     */
    onClose: (() => void) | null;
    /**
     * The callback for when a message is received on the data channel.
     */
    onMessage: ((message: MessageEvent) => void) | null;
    /**
     * Closes the data channel.
     */
    close(): void;
    /**
     * @overload
     * Sends data on the data channel.
     * @param data - The data to send.
     */
    send(data: string): void;
    /**
     * @overload
     * Sends data on the data channel.
     * @param data - The data to send.
     */
    send(data: ArrayBuffer): void;
}
