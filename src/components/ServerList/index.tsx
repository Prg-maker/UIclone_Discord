
import { ServerButton } from '../ServerButton'

import { Container, Separate } from './styles'



export function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separate />

      <ServerButton />
      <ServerButton />
      <ServerButton isNotifications={true} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton mentions={100} />
      <ServerButton mentions={1} isNotifications={true} />
      <ServerButton mentions={1} />
      <ServerButton isNotifications={true} />
      <ServerButton mentions={1} />
      <ServerButton mentions={1} />
      <ServerButton mentions={1} />
      <ServerButton isNotifications={true} />
    </Container>
  )
}
