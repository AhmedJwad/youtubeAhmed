import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Commet {
  readonly id: string;
  readonly commet: string;
  readonly likes: number;
  readonly dislikes: number;
  readonly replies: number;
  readonly videoID?: string;
  readonly Video?: Video;
  readonly User?: User;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Commet>);
  static copyOf(source: Commet, mutator: (draft: MutableModel<Commet>) => MutableModel<Commet> | void): Commet;
}

export declare class Video {
  readonly id: string;
  readonly title?: string;
  readonly thumbnail: string;
  readonly videoUrl: string;
  readonly duration: number;
  readonly views: string;
  readonly tags?: string;
  readonly likes: number;
  readonly dislikes: number;
  readonly User?: User;
  readonly Commets?: (Commet | null)[];
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Video>);
  static copyOf(source: Video, mutator: (draft: MutableModel<Video>) => MutableModel<Video> | void): Video;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly image?: string;
  readonly subscribers?: number;
  readonly Videos?: (Video | null)[];
  readonly Commets?: (Commet | null)[];
  readonly sub?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}