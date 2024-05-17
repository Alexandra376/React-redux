import { JokeCard, JokeText, RandomJokeWrapper } from "./style"
import { ButtonContainer } from "pages/UsersApp/Users/styles"
import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { randomJokesSliceActions, randomJokesSliceSelectors } from "store/redux/randomJokes/randomJokesSlice";

function RandomJokes() {
  const dispatch = useAppDispatch();
  const { data, status, error} = useAppSelector(randomJokesSliceSelectors.joke)

  const getJoke = () => {
    dispatch(randomJokesSliceActions.getJoke())
  }

  const jokes = data.map((joke) => {
    return (
      <JokeText key={joke.id}>{joke.question}: {joke.answer}</JokeText>
    )
  })

  return (
    <RandomJokeWrapper>
      <JokeCard>
        <ButtonContainer>
          <Button name="Get Joke" handlerButton={getJoke} disabled={status === 'loading'} />
        </ButtonContainer>
        {jokes}
      </JokeCard>
    </RandomJokeWrapper>
  )
}

export default RandomJokes;
