import { IGraphDatabase } from '../../graph-database';
import { IClusterEventEmitter } from '.';
import { IGenerativeAIContext, IGenerativeAIWorker } from '../../generative-ai';
import { IKeyValueDatabase, IDatabaseLayout, ILayoutBuilder } from '../../key-value-database';
import { ILocalMediaStream, ILocalDynamicMediaStream, IRemoteMediaStream, MediaStreamSource } from '../../media-stream';
import { IObjectStoreBucket, IObjectStoreBucketOptions } from '../../object-storage';
import { IPubSubTopic } from '../../pubsub';
import { IVectorDatabase } from '../../vector-database';
import { LocalNode, Node } from '../node';
import { ISDKCloseOptions } from '../sdk';
import { ExternalStorageType, IExternalStorageConnection } from '../../external-storage';

/**
 * The cluster interface.
 * @category Core
 */
export interface ICluster extends IClusterEventEmitter {
  /**
   * Leave the cluster.
   * @param options The options to close the SDK with.
   */
  leave(options?: ISDKCloseOptions): void;

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
   * @param options The {@link IObjectStoreBucketOptions | options} of the Object Store bucket.
   * @throws {@link SDKClientErrorCodes.ObjectStoreAlreadyExists} if the data stream is already open.
   * @throws {@link SDKClientErrorCodes.ObjectStoreNameNotString} if the name is not a string.
   * @returns A promise that resolves with the data stream.
   */
  openObjectStoreBucket(name: string, options?: IObjectStoreBucketOptions): Promise<IObjectStoreBucket>;

  /**
   * Open an external storage connection.
   * @param name The name of the external storage connection.
   * @param type The type of the external storage connection.
   * @throws {@link SDKClientErrorCodes.ExternalStorageConnectionAlreadyExists} if the external storage connection is already open.
   * @throws {@link SDKClientErrorCodes.ExternalStorageNameNotString} if the name is not a string.
   * @returns The external storage connection.
   */
  openExternalStorageConnection(name: string, type: ExternalStorageType): Promise<IExternalStorageConnection>;

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
   * Open a generative AI context.
   * @param label The label of the generative AI context.
   */
  openGenerativeAIContext(label: string): Promise<IGenerativeAIContext>;

  /**
   * Open a generative AI worker.
   * @param label The label of the generative AI Worker.
   */
  openGenerativeAIWorker(label: string): Promise<IGenerativeAIWorker>;

  /**
   * Open a vector database.
   * @param label The label of the vector database.
   */
  openVectorDatabase(label: string): IVectorDatabase;

  /**
   * Open a graph database.
   * @param label The label of the graph database.
   */
  openGraphDatabase(label: string): IGraphDatabase;

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
   * Get an array of opened external storage connections.
   * @param strategy The strategy to use to filter the external storage connections.
   */
  getExternalStorageConnections(strategy?: (item: IExternalStorageConnection) => boolean): IExternalStorageConnection[];

  /**
   * Get an array of opened key-value databases.
   * @param strategy The strategy to use to filter the key-value databases.
   */
  getKeyValueDatabases(strategy?: (item: IKeyValueDatabase) => boolean): IKeyValueDatabase[];

  /**
   * Get an array of opened generative AI contexts.
   * @param strategy The strategy to use to filter the job dispatchers.
   */
  getGenerativeAIContexts(strategy?: (item: IGenerativeAIContext) => boolean): IGenerativeAIContext[];

  /**
   * Get an array of opened generative AI workers.
   * @param strategy The strategy to use to filter the job workers.
   */
  getGenerativeAIWorkers(strategy?: (item: IGenerativeAIWorker) => boolean): IGenerativeAIWorker[];

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
   * Get an array of opened vector databases.
   * @param strategy The strategy to use to filter the vector databases.
   */
  getVectorDatabases(strategy?: (item: IVectorDatabase) => boolean): IVectorDatabase[];

  /**
   * Get an array of opened graph databases.
   * @param strategy The strategy to use to filter the graph databases.
   */
  getGraphDatabases(strategy?: (item: IGraphDatabase) => boolean): IGraphDatabase[];

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
