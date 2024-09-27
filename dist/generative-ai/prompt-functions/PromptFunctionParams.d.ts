import { PromptFunctionParamsType } from './PromptFunctionParamsType';
/**
 * The AI prompt function parameters Interface
 * Represents the parameters for a prompt function.
 * @category AI
 */
export interface IPromptFunctionParams {
    [key: string]: {
        type: PromptFunctionParamsType;
    };
}
