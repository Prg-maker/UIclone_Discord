
import { Container, Role, User, Avatar, } from './styles'


interface UserProps {
  nickname: string;
  isBot?: boolean;
}

function UserRow({ isBot, nickname }: UserProps) {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {
        isBot && <span>Bot</span>
      }
    </User>
  )
}

export function UserList() {
  return (
    <Container >
      <Role> Disponível - 1 </Role>

      <UserRow nickname="Daniel Fernandes" />

      <Role> Offline - 18 </Role>
      <UserRow nickname="Diego Fernandess" isBot />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
      <UserRow nickname="Diego Fernandess" />
    </Container>
  )
}
