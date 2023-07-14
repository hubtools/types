
export interface VideoDownloadRequest {
  url: string,
  /** The path to the default thumnail */
  thumbnailPath: string | null,
  /** The pattern for the full set of thumbnails */
  thumbnail: string | null,
  /** The title of the video */
  title: string | null | undefined,

  modelProfilePicture?: string,
  modelUrl?: string,
}

export type OnlineStatus = 'unknown' | 'online' | 'queued' | 'trashed';

export interface StatusResponse {
  statuses: {[id: string]: OnlineStatus},
}

export interface StatusResponseV2 {
  statuses: {
    [id: string]: {
      status: OnlineStatus,
      username: string,
    }
  }
}

export interface StatusRequest {
  /** A list of video ids to check the status of */
  ids: string[],
}
