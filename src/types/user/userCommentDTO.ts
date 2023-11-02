export interface IUserCommentResponse {
    id: number,
    content: string,
    dateTime: Date,
    likes: number
    dislike: number,
    userInfoDto: {
        id: number,
        email: string,
        firstname: string,
        lastname: string
    }
}

export interface IUserComment {
    id: number,
    content: string
    positive: boolean
}