import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./redux/counter/counterSlice"
import { feedbackSlice } from "./redux/feedback/feedbackSlice"
import { usersSlice } from "./redux/users/userSlice"
import { randomJokesSlice } from "./redux/randomJokes/randomJokesSlice"
import { activityRandomizerSlice } from "./redux/activityRandomizer/activityRandomizerSlice"

const rootReducer = combineSlices(counterSlice, feedbackSlice, usersSlice, randomJokesSlice, activityRandomizerSlice)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  })
  return store
}

export const store = makeStore()

export type AppStore = typeof store

export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
