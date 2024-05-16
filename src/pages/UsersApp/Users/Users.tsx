import {
  ButtonContainer,
  Paragraph,
  UserCard, UserId,
  UsersPageWrapper
} from "./styles"
import { useSelector } from "react-redux"
import { usersSliceActions, usersSliceSelectors } from "store/redux/users/userSlice"
import { v4 } from "uuid"
import Button from "components/Button/Button"
import { useAppDispatch } from "../../../store/hooks"

function Users() {

  const users = useSelector(usersSliceSelectors.users);

  const dispatch = useAppDispatch();

  const deleteUsers = () => {
    dispatch(usersSliceActions.deleteAllUsers());
  }

  if(!users || users.length === 0){
    return null;
  }

  return (
    <UsersPageWrapper>

        {users.map(user => (
          <UserId key={v4()}>
            <UserCard>
              <Paragraph>Full name: {`${user.firstlastName}`}</Paragraph>
              <Paragraph>Age: {`${user.age}`}</Paragraph>
              <Paragraph>JobTitle: {`${user.jobTitle}`}</Paragraph>
            </UserCard>
          </UserId>
        ))}

      <ButtonContainer>
        <Button name="Delete all users" handlerButton={deleteUsers}/>
      </ButtonContainer>
    </UsersPageWrapper>
  );
}

export default Users
