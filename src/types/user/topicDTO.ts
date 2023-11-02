interface IUserInfo {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
}

export interface ICommentList {
  id: number;
  content: string;
  dateTime: Date;
  likes: number;
  dislike: number;
  userInfoDto: IUserInfo;
}

export interface ITopic {
  id: number;
  title: string;
  content: string;
  creationDate: Date;
  lastUpdateDate: Date;
  topicStarter: IUserInfo;
  commentDtoList: ICommentList[];
}

export interface INewTopic {
  title: string;
  content: string;
}

export interface IUpdateTopic {
  id: number;
  data: INewTopic;
}

export interface ITopicComment {
  id: number;
  content: string;
}
