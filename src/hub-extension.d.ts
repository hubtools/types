
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
  
export interface StatusResponse {
  statuses: {[id: string]: 'unknown' | 'online' | 'queued'},
}
  
export interface StatusRequest {
  /** A list of video ids to check the status of */
  ids: string[],
}
