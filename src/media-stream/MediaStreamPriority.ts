/**
 * The priority of a media stream. Higher priority streams will be prioritized over lower priority streams for quality of experience.
 * @category Media Stream
 */
export enum MediaStreamPriority {
  /**
   * The highest priority.
   */
  High = 1,
  /**
   * The default priority.
   */
  Default = 2,
  /**
   * The lowest priority.
   */
  Low = 3
}
