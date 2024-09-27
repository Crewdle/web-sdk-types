import { IPromptFunctionParams } from './PromptFunctionParams';
/**
 * The AI prompt function Interface
 * Represents a function that can be called by the LLM.
 * @category AI
 */
export interface IPromptFunction {
    /**
     * The function description.
     */
    description: string;
    /**
     * The function parameters.
     */
    params?: IPromptFunctionParams;
    /**
     * The function callback.
     */
    callback: (params?: {
        [key: string]: string | number | boolean;
    }) => string | Promise<string>;
}
