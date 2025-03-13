import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';
import { IGenerativeAIInferenceTool } from '../inference';

/**
 * Represents the parameters to create a tool call job
 * @category AI
 */
export interface IGenerativeAIToolCallCreateJobParameters extends IGenerativeAICreateJobParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.ToolCall;

  /**
   * The tool to be processed.
   */
  tool: IGenerativeAIInferenceTool;

  /**
   * The arguments for the tool.
   */
  arguments: { [key: string]: string | number | boolean };
}