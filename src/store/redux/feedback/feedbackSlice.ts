import { createAppSlice } from "store/createAppSlice";
import type { FeedbackStateSlice } from "./types"

const feedbackInitialState: FeedbackStateSlice = {
  likeCount: 0,
  dislikeCount: 0,
}

export const feedbackSlice = createAppSlice({
  name: 'feedback',
  initialState: feedbackInitialState,
    reducers: create => ({
      addLike: create.reducer((state: FeedbackStateSlice) => {
        state.likeCount = state.likeCount + 1;
      }),
      addDislike: create.reducer((state: FeedbackStateSlice) => {
        state.dislikeCount = state.dislikeCount + 1;
      }),
      resetResultsCount: create.reducer((state: FeedbackStateSlice) => {
        state.likeCount = 0;
        state.dislikeCount = 0;
      })
    }),
    selectors: {
      like: (state: FeedbackStateSlice) => state.likeCount,
      dislike: (state: FeedbackStateSlice) => state.dislikeCount,
    }
})

export const feedbackSliceActions = feedbackSlice.actions;
export const feedbackSliceSelectors = feedbackSlice.selectors;

