/**
 * The priority of a media stream. Higher priority streams will be prioritized over lower priority streams for quality of experience.
 * @category Media Stream
 */
export var MediaStreamPriority;
(function (MediaStreamPriority) {
    /**
     * The highest priority.
     */
    MediaStreamPriority[MediaStreamPriority["High"] = 1] = "High";
    /**
     * The default priority.
     */
    MediaStreamPriority[MediaStreamPriority["Default"] = 2] = "Default";
    /**
     * The lowest priority.
     */
    MediaStreamPriority[MediaStreamPriority["Low"] = 3] = "Low";
})(MediaStreamPriority || (MediaStreamPriority = {}));
