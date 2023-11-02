interface IUserInfo {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
}

interface ICommentList {
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
