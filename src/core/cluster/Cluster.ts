import { IClusterEventEmitter } from '.';
import { IGenerativeAIContext, IAIWorker } from '../../ai';
import { IJobDispatcher } from '../../job/JobDispatcher';
import { IJobWorker } from '../../job/JobWorker';
import { IKeyValueDatabase, IDatabaseLayout, ILayoutBuilder } from '../../key-value-database';
import { ILocalMediaStream, ILocalDynamicMediaStream, IRemoteMediaStream, MediaStreamSource } from '../../media-stream';
import { IObjectStoreBucket } from '../../object-storage';
import { IPubSubTopic } from '../../pubsub';
import { LocalNode, Node } from '../node';

/**
 * The cluster interface.
 * @category Core
 */
export interface ICluster extends IClusterEventEmitter {
  /**
   * Leave the cluster.
   */
  leave(): void;

  /**
   * Open a pub/sub topic.
   * @param name The name of the PubSub Topic.
   * @throws {@link SDKClientErrorCodes.PubSubTopicAlreadyExists} if the topic already exists
   * @throws {@link SDKClientErrorCodes.PubSubTopicNameNotString} if the name is not a string.
   * @returns The pub/sub topic.
   */
  openPubSubTopic<T>(name: string): IPubSubTopic<T>;

  /**
   * Open a object store bucket.
   * @param name The name of the Object Store bucket.
   * @throws {@link SDKClientErrorCodes.ObjectStoreAlreadyExists} if the data stream is already open.
   * @throws {@link SDKClientErrorCodes.ObjectStoreNameNotString} if the name is not a string.
   * @returns A promise that resolves with the data stream.
   */
  openObjectStoreBucket(name: string): Promise<IObjectStoreBucket>;

  /**
   * Open a key-value database.
   * @param name The name of the key-value database.
   * @param layout The {@link IDatabaseLayout | layout} of the key-value database.
   * @throws {@link SDKClientErrorCodes.KeyValueDatabaseAlreadyExists} if the key-value database is already open.
   * @throws {@link SDKClientErrorCodes.KeyValueDatabaseInvalidLayout} if the layout is invalid.
   * @throws {@link SDKClientErrorCodes.KeyValueDatabaseNameNotString} if the name is not a string.
   * @returns A promise that resolves with the key-value database.
   */
  openKeyValueDatabase(name: string, layout: IDatabaseLayout | ILayoutBuilder): Promise<IKeyValueDatabase>;

  /**
   * Open a Job Dispatcher.
   * @param label The label of the Job Service.
   * @returns The Job Dispatcher.
   */
  openJobDispatcher(label: string): Promise<IJobDispatcher>;

  /**
   * Open a Job Worker.
   * @param label The label of the Job Worker.
   * @returns The Job Worker.
   */
  openJobWorker(label: string): Promise<IJobWorker>;

  /**
   * Open a generative AI context.
   * @param label The label of the generative AI context.
   */
  openGenerativeAIContext(label: string): Promise<IGenerativeAIContext>;

  /**
   * Open a generative AI worker.
   * @param label The label of the generative AI Worker.
   */
  openGenerativeAIWorker(label: string): Promise<IAIWorker>;

  /**
   * Publish a local media stream.
   * @param label The label of the media stream.
   * @param mediaSource The media source to publish.
   * @throws {@link SDKClientErrorCodes.LocalMediaStreamAlreadyExists} if the media stream is already published.
   * @returns The local media stream.
   */
  publishLocalMediaStream(label: string, mediaSource: MediaStreamSource): ILocalMediaStream;

  /**
   * Publish a local dynamic media stream. Like a local media stream but can be modified after creation.
   * @param label The label of the media stream.
   * @param mediaSource The media source to publish.
   * @throws {@link SDKClientErrorCodes.LocalMediaStreamAlreadyExists} if the media stream is already published.
   * @returns The local dynamic media stream.
   */
  publishLocalDynamicMediaStream(label: string, mediaSource: MediaStreamSource): ILocalDynamicMediaStream;

  /**
   * Get an array of opened pub/sub topics.
   * @param strategy The strategy to use to filter the topics.
   */
  getPubSubTopics(strategy?: (item: IPubSubTopic<unknown>) => boolean): IPubSubTopic<unknown>[];

  /**
   * Get an array of opened object store buckets.
   * @param strategy The strategy to use to filter the data streams.
   */
  getObjectStoreBuckets(strategy?: (item: IObjectStoreBucket) => boolean): IObjectStoreBucket[];

  /**
   * Get an array of opened key-value databases.
   * @param strategy The strategy to use to filter the key-value databases.
   */
  getKeyValueDatabases(strategy?: (item: IKeyValueDatabase) => boolean): IKeyValueDatabase[];

  /**
   * Get an array of published local media streams.
   * @param strategy The strategy to use to filter the media streams.
   */
  getLocalMediaStreams(strategy?: (item: ILocalMediaStream) => boolean): ILocalMediaStream[];

  /**
   * Get an array of published remote media streams.
   * @param strategy The strategy to use to filter the media streams.
   */
  getRemoteMediaStreams(strategy?: (item: IRemoteMediaStream) => boolean): IRemoteMediaStream[];

  /**
   * Get the local node for this cluster.
   */
  getLocalNode(): LocalNode;

  /**
   * Get an array of all connected remote nodes.
   * @param strategy The strategy to use to filter the nodes.
   */
  getRemoteNodes(strategy?: (item: Node) => boolean): Node[];
}
