import { configureStore } from '@reduxjs/toolkit'
import { authAPI } from '../../services/auth/authentication.api'
import { userAPI } from '../../services/user/userNotificationController.api'
import { petContactAPI } from '../../services/client/petContact.api.'
import { topicApi } from "../../services/user/topic.api"
import rootReducers from './RootReducers'
import { externalApi } from '../../services/client/external.api'
import { clientReviewAPI } from '../../services/client/clientReview.api'
import { clientPet } from '../../services/client/clientPet.api'
import { clientNewsApi } from '../../services/client/clientNews.api'
import { dewormingApi } from '../../services/client/deworming.api'
import { userProfile } from '../../services/user/userProfile.api'

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware, userAPI.middleware, externalApi.middleware, clientReviewAPI.middleware, clientPet.middleware, topicApi.middleware, clientNewsApi.middleware, petContactAPI.middleware, dewormingApi.middleware, userProfile.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
