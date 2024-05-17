import styled from "@emotion/styled"

export const UsersPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  height: fit-content;
  gap: 24px;
  flex-direction: column;
`

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 280px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
    
`

export const UserId = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  text-decoration-line: underline;
`

export const Paragraph = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
`

export const ButtonContainer = styled.div`
    width: 200px;
`
