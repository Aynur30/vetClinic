import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../../features/Auth/authSlice'
import { authAPI } from '../../services/auth/authentication.api'
import { userAPI } from '../../services/user/userNotificationController.api'
import { registrationApi } from '../../services/auth/registration.api'
import { clientApi } from '../../services/client/client.api'
import { clientAppointmentCalendarApi } from '../../services/client/clientAppointmentCalendar.api'
import { clientNewsApi } from '../../services/client/clientNews.api'
import { topicApi } from '../../services/user/topic.api'
import { userDoctorReviewAPI } from '../../services/user/userDoctorReview.api'
import { userCommentAPI } from '../../services/user/userСomment.api'
import { externalApi } from '../../services/client/external.api'
import { clientReviewAPI } from '../../services/client/clientReview.api'
import { petContactAPI } from '../../services/client/petContact.api.'
import { clientPet } from '../../services/client/clientPet.api'
import { dewormingApi } from '../../services/client/deworming.api'
import { adminDoctorNonWorkingAPI } from '../../services/admin/adminDoctorNonWorking.api'
import { userProfile } from '../../services/user/userProfile.api'

const rootReducers = combineReducers({
  auth: authReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [registrationApi.reducerPath]: registrationApi.reducer,
  [clientApi.reducerPath]: clientApi.reducer,
  [clientAppointmentCalendarApi.reducerPath]: clientAppointmentCalendarApi.reducer,
  [clientNewsApi.reducerPath]: clientNewsApi.reducer,
  [topicApi.reducerPath]: topicApi.reducer,
  [userDoctorReviewAPI.reducerPath]: userDoctorReviewAPI.reducer,
  [userCommentAPI.reducerPath]: userCommentAPI.reducer,
  externalApi: externalApi.reducer,
  [clientPet.reducerPath]: clientPet.reducer,
  [clientReviewAPI.reducerPath]: clientReviewAPI.reducer,
  [petContactAPI.reducerPath]: petContactAPI.reducer,
  [clientPet.reducerPath]: clientPet.reducer,
  [dewormingApi.reducerPath]: dewormingApi.reducer,
  [adminDoctorNonWorkingAPI.reducerPath]: adminDoctorNonWorkingAPI.reducer,
  [userProfile.reducerPath]: userProfile.reducer,
})

export default rootReducers
