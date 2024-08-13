/**
 * The agent capacity interface used for reporting the agent's capacity.
 * @category Core
 */
export interface IAgentCapacity {
    /**
     * The agent version.
     */
    version: string;
    /**
     * The agent's MAC address.
     */
    macAddress: string;
    /**
     * The agent's CPU capacity.
     */
    cpu: {
        /**
         * The number of CPU cores.
         */
        cores: number;
        /**
         * The current CPU load.
         */
        load: number;
    };
    /**
     * The agent's GPU capacity.
     */
    gpu: {
        /**
         * The number of GPU cores.
         */
        cores: number;
        /**
         * The current GPU load.
         */
        load: number;
    };
    /**
     * The agent's memory capacity.
     */
    memory: {
        /**
         * The total memory available.
         */
        total: number;
        /**
         * The available memory.
         */
        available: number;
    };
    /**
     * The agent's VRAM capacity.
     */
    vram: {
        /**
         * The total VRAM available.
         */
        total: number;
        /**
         * The available VRAM.
         */
        available: number;
    };
    /**
     * The agent's storage capacity.
     */
    storage: {
        /**
         * The total storage available.
         */
        total: number;
        /**
         * The available storage.
         */
        available: number;
    };
}
