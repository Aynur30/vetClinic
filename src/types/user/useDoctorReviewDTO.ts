export interface userDoctorReviewResponse {
    id: number,
    doctorId: number,
    review: {
        id: number,
        content: string,
        dateTime: Date,
        likes: number,
        dislike: number,
        userInfoDto: {
            id: number,
            email: string,
            firstname: string,
            lastname: string
        }
    }

}