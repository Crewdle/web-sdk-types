/**
 * The AI prompt rating Enum
 * @category AI
 */
export var PromptRating;
(function (PromptRating) {
    PromptRating["Up"] = "up";
    PromptRating["Down"] = "down";
})(PromptRating || (PromptRating = {}));
/**
 * The AI prompt source Enum
 * @category AI
 */
export var PromptSource;
(function (PromptSource) {
    /**
     * The prompt was generated by the AI.
     */
    PromptSource["AI"] = "ai";
    /**
     * The prompt was generated by a human.
     */
    PromptSource["Human"] = "human";
})(PromptSource || (PromptSource = {}));
;
;
/**
 * The AI rating status Enum
 * @category AI
 */
export var AIRatingStatus;
(function (AIRatingStatus) {
    AIRatingStatus["Success"] = "success";
    AIRatingStatus["Error"] = "error";
})(AIRatingStatus || (AIRatingStatus = {}));
/**
 * The AI job type Enum
 * @category AI
 */
export var AIJobType;
(function (AIJobType) {
    /**
     * The AI job generates a prompt.
     */
    AIJobType["Prompt"] = "prompt";
    /**
     * The AI job rates a prompt.
     */
    AIJobType["Rating"] = "rate";
})(AIJobType || (AIJobType = {}));
