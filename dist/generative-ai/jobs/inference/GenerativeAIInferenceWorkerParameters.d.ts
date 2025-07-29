import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';
import { IPromptHistory } from '../prompt';
/**
 * Parameters for the Inference worker.
 * @category AI
 */
export interface IGenerativeAIInferenceWorkerParameters extends IGenerativeAIWorkerParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.Inference;
    /**
     * The thread id.
     */
    threadId: string;
    /**
     * The job id of the job.
     */
    jobId?: string;
    /**
     * The agent id of the job.
     */
    agentId?: string;
    /**
     * The workflow id of the job.
     */
    workflowId?: string;
    /**
     * The prompt to be processed.
     */
    prompt: string;
    /**
     * The instructions for the AI job.
     */
    instructions?: string;
    /**
     * The grammar to use for the AI job.
     */
    grammar?: any;
    /**
     * Enable reasoning for the AI job.
     */
    reasoning?: boolean;
    /**
     * The context for the AI job.
     */
    history?: IPromptHistory[];
    /**
     * The model to use for inference.
     */
    model: string;
    /**
     * The temperature for the inference.
     */
    temperature?: number;
    /**
     * The max tokens for the inference.
     */
    maxTokens?: number;
    /**
     * tools for the AI job.
     */
    tools?: IGenerativeAIInferenceTool[];
    /**
     * The internal context used by the AI job.
     */
    internalContext?: {
        [key: string]: string;
    };
}
/**
 * The interface for the generative AI inference tool.
 * @category AI
 */
export interface IGenerativeAIInferenceTool {
    /**
     * The type of the tool.
     */
    type: GenerativeAIInferenceToolType;
    /**
     * The name of the tool.
     */
    name: string;
    /**
     * The description of the tool.
     */
    description?: string;
    /**
     * The parameters for the tool.
     */
    parameters?: IGenerativeAIInferenceToolParameter[];
    /**
     * The endpoint URL for the tool.
     */
    endpointUrl?: string;
    /**
     * The endpoint method for the tool.
     */
    endpointMethod?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    /**
     * The headers for the tool.
     */
    headers?: {
        name: string;
        value: string;
    }[] | {
        [key: string]: string;
    };
    /**
     * The query parameters for the tool.
     */
    queryParameters?: {
        name: string;
        value: string;
    }[];
    /**
     * The body parameters for the tool.
     */
    bodyParameters?: {
        name: string;
        value: string;
    }[];
    /**
     * The context output variable for the tool.
     */
    contextOutputVariable?: string;
    /**
     * The context input variable for the tool.
     */
    contextInputVariable?: string;
    /**
     * The model ID to use for the tool.
     */
    modelId?: string;
    /**
     * The workflow ID to use for the tool.
     */
    workflowId?: string;
    /**
     * The user ID to use for the tool.
     */
    userId?: string;
    /**
     * Whether the tool is async.
     */
    async?: boolean;
    /**
     * The instructions for the tool.
     */
    instructions?: string;
    /**
     * The max tokens for the tool.
     */
    maxTokens?: number;
    /**
     * The temperature for the tool.
     */
    temperature?: number;
    /**
     * The grammar for the tool.
     */
    grammar?: any;
    /**
     * The collection ID for the tool.
     */
    collectionId?: string;
    /**
     * The namespace for the tool.
     */
    namespace?: string;
    /**
     * The form skill questions for the tool.
     */
    questions?: IGenerativeAIInferenceQuestion[];
    /**
     * Whether to emit the tool call result.
     */
    shouldEmit?: boolean;
    /**
     * The server label for the tool.
     */
    server_label?: string;
    /**
     * The server URL for the tool.
     */
    server_url?: string;
    /**
     * The require approval for the tool.
     */
    require_approval?: string;
    /**
     * The allowed tools for the tool.
     */
    allowed_tools?: string[];
    /**
     * The headers for the tool.
     */
    /**
     * The tools for the tool.
     */
    tools?: IGenerativeAIInferenceTool[];
}
/**
 * The enum for the generative AI inference tool type.
 * @category AI
 */
export declare enum GenerativeAIInferenceToolType {
    Agent = "agent",
    AgentSkill = "agent-skill",
    CustomSkill = "custom-skill",
    DataCollection = "data-collection",
    Knowledge = "knowledge",
    AISearch = "ai-search",
    Code = "code",
    QueryFile = "query-file",
    Search = "search",
    WebScraper = "web-scraper",
    WebScraperRaw = "web-scraper-raw",
    WriteFile = "write-file",
    FormSkillGetQuestion = "form-skill-get-question",
    FormSkillSetAnswer = "form-skill-set-answer",
    FormSkillSubmitForm = "form-skill-submit-form",
    WorkflowTool = "workflow-tool",
    GenerateImage = "generate-image",
    CrewdleMCP = "crewdle-mcp"
}
/**
 * The interface for the generative AI inference form skill question.
 * @category AI
 */
export interface IGenerativeAIInferenceQuestion {
    /**
     * The id of the question.
     */
    id: string;
    /**
     * The question.
     */
    question: string;
    /**
     * The validation for the question.
     */
    validation: string;
    /**
     * Whether the question is required.
     */
    required: boolean;
    /**
     * The format of the question.
     */
    format: string;
}
/**
 * The interface for the generative AI inference tool parameter.
 * @category AI
 */
export interface IGenerativeAIInferenceToolParameter {
    /**
     * The name of the parameter.
     */
    name: string;
    /**
     * The type of the parameter.
     */
    type: 'string' | 'number' | 'boolean' | 'json';
}
