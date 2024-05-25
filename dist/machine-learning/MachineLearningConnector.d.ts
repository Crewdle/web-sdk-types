export interface IMachineLearningConnector {
    initialize(llmModel: string, similarityModel: string): Promise<void>;
    addContent(content: string): Promise<void>;
    prompt(prompt: string): AsyncGenerator<string>;
}
