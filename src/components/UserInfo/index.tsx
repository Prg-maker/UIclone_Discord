
import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles'


export function UserInfo() {
  return (
    <Container >
      <Profile>
        <Avatar />
        <UserData >
          <strong>Daniel Fernandes</strong>
          <span>#4495 </span>
        </UserData>

      </Profile>


      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>

    </Container>
  )

}
