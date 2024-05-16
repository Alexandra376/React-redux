import { FeedbackContainerStyle, FeedbackResultStyle, LikeDislikeStyle, ResultStyle, ButtonResetContainer } from "./style"
import Button from "components/Button/Button"
import {feedbackSliceActions, feedbackSliceSelectors} from "store/redux/feedback/feedbackSlice"
import { useAppDispatch, useAppSelector } from "store/hooks"


function Feedback() {
  const likeFeedback = useAppSelector(feedbackSliceSelectors.like);
  const dislikeFeedback = useAppSelector(feedbackSliceSelectors.dislike);

  const dispatch = useAppDispatch();

  const addLike = () => {
    dispatch(feedbackSliceActions.addLike())
  }
  const addDislike = () => {
    dispatch(feedbackSliceActions.addDislike())
  }
  const resetResult = () => {
    dispatch(feedbackSliceActions.resetResultsCount())
  }
  return (
    <FeedbackContainerStyle>
      <FeedbackResultStyle>
        <LikeDislikeStyle>
          <Button name="Like" handlerButton={addLike} />
          <ResultStyle>{likeFeedback}</ResultStyle>
        </LikeDislikeStyle>
        <LikeDislikeStyle>
          <Button name="Dislike" handlerButton={addDislike} />
          <ResultStyle>{dislikeFeedback}</ResultStyle>
        </LikeDislikeStyle>
      </FeedbackResultStyle>
      <ButtonResetContainer>
        <Button name="Reset Results" handlerButton={resetResult} />
      </ButtonResetContainer>
    </FeedbackContainerStyle>
  );
}

export default Feedback;
