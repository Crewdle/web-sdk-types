import { IAgentInfoEventPayload, ILocalMediaStreamTrackFailEventPayload, INodeEventPayload, IPublishMediaStreamEventPayload, IUnpublishMediaStreamEventPayload, IUserInfoEventPayload } from './event';
/**
 * The cluster events interface.
 * @category Core
 */
export interface IClusterEvents {
    /**
     * @event user-join - Event fired when a user joins the cluster.
     * @param payload The user info event payload.
     */
    'user-join': (payload: IUserInfoEventPayload) => void;
    /**
     * @event user-update - Event fired when a user updates its information.
     * @param payload The user info event payload.
     */
    'user-update': (payload: IUserInfoEventPayload) => void;
    /**
     * @event user-leave - Event fired when a user leaves the cluster.
     * @param payload The node event payload.
     */
    'user-leave': (payload: INodeEventPayload) => void;
    /**
     * @event agent-join - Event fired when an agent joins the cluster.
     * @param payload The agent info event payload.
     */
    'agent-join': (payload: IAgentInfoEventPayload) => void;
    /**
     * @event agent-update - Event fired when an agent updates its information.
     * @param payload The agent info event payload.
     */
    'agent-update': (payload: IAgentInfoEventPayload) => void;
    /**
     * @event agent-leave - Event fired when an agent leaves the cluster.
     * @param payload The node event payload.
     */
    'agent-leave': (payload: INodeEventPayload) => void;
    /**
     * @event content-publish-media - Event fired when a node publishes a new media stream.
     * @param payload The publish media stream event payload.
     */
    'content-publish-media': (payload: IPublishMediaStreamEventPayload) => void;
    /**
     * @event content-unpublish-media - Event fired when a node unpublishes a media stream.
     * @param payload The unpublish media stream event payload.
     */
    'content-unpublish-media': (payload: IUnpublishMediaStreamEventPayload) => void;
    /**
     * @event cluster-disconnect - Event fired when the current node is disconnected from the cluster.
     * @param payload The node event payload.
     */
    'cluster-disconnect': (payload: INodeEventPayload) => void;
    /**
     * @event local-media-stream-track-fail - Event fired when a local media stream track fails.
     * @param payload The local media stream track fail event payload.
     *
     * If the local media stream is a ILocalDynamicMediaStream, you can remove the failed track from the stream and add a new one to the stream.
     * If the local media stream is a ILocalMediaStream, you will have to unpublish the stream and publish a new one with new tracks.
     */
    'local-media-stream-track-fail': (payload: ILocalMediaStreamTrackFailEventPayload) => void;
}
