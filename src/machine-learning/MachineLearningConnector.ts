/**
 * The machine learning connector interface.
 * @category Connector
 */
export interface IMachineLearningConnector {
  /**
   * Initialize the machine learning model.
   * @param llmModel The path to the LLM model.
   * @param similarityModel The path to the similarity model.
   */
  initialize(llmModel: string, similarityModel: string): Promise<void>;

  /**
   * Add content to the machine learning model.
   * @param content The content to add.
   * @returns A promise that resolves when the content has been added.
   */
  addContent(content: string): Promise<void>;

  /**
   * Prompt the machine learning model.
   * @param prompt The prompt to use.
   * @returns An async generator that yields the responses.
   */
  prompt(prompt: string): AsyncGenerator<string>;
}
