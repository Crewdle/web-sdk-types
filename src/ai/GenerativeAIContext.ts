import { IPromptOptions, IPromptResult } from '.';
import { GenerativeAIModelType } from './GenerativeAIModelType';

/**
 * Represents a context for a Generative AI service.
 * @category AI
 */
export interface IGenerativeAIContext {
  /**
   * Stream the response from the AI service.
   * @param prompt The prompt to start processing.
   * @param options Optional parameters for the prompt.
   * @returns An async generator that yields the response.
   */
  stream(prompt: string, options?: IPromptOptions): AsyncGenerator<IPromptResult>;

  /**
   * Process the response from the AI service.
   * @param prompt The prompt to start processing.
   * @param options Optional parameters for the prompt.
   * @returns A promise that resolves with the response.
   */
  prompt(prompt: string, options?: IPromptOptions): Promise<IPromptResult>;

  /**
   * Upload a model to the AI service.
   * @param model The model file to upload.
   * @returns A promise that resolves when the model is uploaded.
   */
  uploadModel(model: File, type?: GenerativeAIModelType): Promise<void>;

  /**
   * Delete a model from the AI service.
   * @param modelId The optional ID of the model to delete.
   * @returns A promise that resolves when the model is deleted.
   */
  deleteModel(modelId?: string): Promise<void>;

  /**
   * Close the Generative AI Context.
   */
  close(): void;
}
