import { GenerativeAIEngineType } from '../GenerativeAIWorkerConnector';

/**
 * A connector for generating speech from text.
 */
export interface IGenerativeAISpeechConnector {
  /**
   * Generates speech from text.
   * @param model The model to use.
   * @param text The text to generate speech from.
   * @param voice The voice to use.
   * @param instructions Optional instructions for the speech.
   */
  speak(model: string, text: string, voice: string, instructions?: string): Promise<ArrayBuffer>;

  /**
   * Get the engine type.
   * @returns The engine type.
   */
  getEngineType(): GenerativeAIEngineType;
}
