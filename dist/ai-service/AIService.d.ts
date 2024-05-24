export interface IAIService {
    /**
     * Prompt the AI service to start processing.
     * @param prompt The prompt to start processing.
     * @returns The response from the AI service.
     */
    prompt(prompt: string): Promise<string>;
}
