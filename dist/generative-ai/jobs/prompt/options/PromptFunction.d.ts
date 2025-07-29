import { IPromptFunctionParams } from './PromptFunctionParams';
/**
 * The AI prompt function Interface
 * Represents a function that can be called by the LLM.
 * @category AI
 */
export interface IPromptFunction {
    /**
     * The function type.
     */
    type: 'function';
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
/**
 * The MCP function Interface
 * Represents a function that can be called by the LLM.
 * @category AI
 */
export interface IMcpFunction {
    type: 'mcp';
    server_label: string;
    server_url: string;
    require_approval: string;
    allowed_tools: string[];
    headers?: {
        [key: string]: string;
    };
}
/**
 * The code interpreter function Interface
 * Represents a function that can be called by the LLM.
 * @category AI
 */
export interface ICodeInterpreterFunction {
    type: 'code_interpreter';
    container: {
        type: 'auto';
    };
}
/**
 * The image generation function Interface
 * Represents a function that can be called by the LLM.
 * @category AI
 */
export interface IImageGenerationFunction {
    type: 'image_generation';
}
/**
 * The prompt function Type
 * Represents a function that can be called by the LLM.
 * @category AI
 */
export type PromptFunction = IPromptFunction | IMcpFunction | ICodeInterpreterFunction | IImageGenerationFunction;
