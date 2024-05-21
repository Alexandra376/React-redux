import Button from "components/Button/Button"
import { ActivityRandomizerCard,
  ActivityRandomizerInfoContainer,
  ActivityRandomizerText,
  ActivityRandomizerWrapper,
  ButtonContainer} from "./style"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { ActivityData } from "store/redux/activityRandomizer/types"
import { useEffect } from "react"
import {
  activityRandomizerActions,
  activityRandomizerSelectors
} from "../../store/redux/activityRandomizer/activityRandomizerSlice"

function ActivityRandomizer() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(activityRandomizerSelectors.activity)
  console.log(data)
  const getActivity = () => {
    dispatch(activityRandomizerActions.getActivity())
  }

  const deleteAllActivity = () => {
    dispatch(activityRandomizerActions.resetActivityState())
  }

  useEffect(() => {
    if (error) {
      alert('Error response')
    }
  }, [error])

  const activity = data.map((activityObj: ActivityData, index: number) => {
    return (<ActivityRandomizerInfoContainer key={activityObj.id}>
        <ActivityRandomizerText>{`${index + 1}. ${activityObj.activity}`}</ActivityRandomizerText>
        <ButtonContainer>
          <Button
            name="Delete activity"
            handlerButton={() => {
              dispatch(activityRandomizerActions.deleteActivity(activityObj.id))
            }}
          />
        </ButtonContainer>
      </ActivityRandomizerInfoContainer>
    )
  })

  return (
    <ActivityRandomizerWrapper>
      <ActivityRandomizerCard>
        <ButtonContainer>
          <Button
            disabled={isLoading}
            name="Get activity"
            handlerButton={getActivity}
          />
        </ButtonContainer>
        {activity}
        {data.length > 0 && (
          <ButtonContainer>
            <Button
              name="Delete all activity"
              handlerButton={deleteAllActivity}
            />
          </ButtonContainer>
        )}
      </ActivityRandomizerCard>
    </ActivityRandomizerWrapper>
  )
}
export default ActivityRandomizer;
