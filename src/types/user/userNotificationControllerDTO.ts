export interface IUserNotification {
    id: number,
    user: {
        id: number,
        email: string,
        firstName: string,
        lastname: string,
    },
    notification: {
        id: number,
        content: string,
        eventDate: string,
        important: boolean
    },
    show: boolean
}