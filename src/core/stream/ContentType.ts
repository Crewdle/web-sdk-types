/**
 * The type of content of a stream.
 * @category Core
 */
export enum ContentType {
  /**
   * The content is data.
   */
  Data = 'data',
  /**
   * The content is media.
   */
  Media = 'media',
  /**
   * The content is a file.
   */
  File = 'file',
  // TODO - move this to an internal type
  /**
   * @ignore
   */
  PubSub = 'pubsub',
  /**
   * @ignore
   */
  ObjectStore = 'objectstore',
  /**
   * @ignore
   */
  KeyValueDatabase = 'keyvaluedatabase',
  /**
   * @ignore
   */
  Job = 'job',
  /**
   * @ignore
   */
  VectorDatabase = 'vectordatabase',
  /**
   * @ignore
   */
  GraphDatabase = 'graphdatabase',
  /**
   * @ignore
   */
  ExternalStorage = 'externalstorage',
}
