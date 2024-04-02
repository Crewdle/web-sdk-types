export interface IAgentCapacity {
    cpu: {
        cores: number;
        load: number;
    };
    gpu: {
        cores: number;
        load: number;
    };
    memory: {
        total: number;
        available: number;
    };
    storage: {
        total: number;
        available: number;
    };
}
