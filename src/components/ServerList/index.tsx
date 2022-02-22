
import { ServerButton } from '../ServerButton'

import { Cotnainer, Separate } from './styles'



export function ServerList() {
  return (
    <Cotnainer>
      <ServerButton isHome />

      <Separate />

      <ServerButton isNotifications />
      <ServerButton />
      <ServerButton isNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton mentions={1} />
    </Cotnainer>
  )
}
