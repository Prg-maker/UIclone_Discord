import { Button } from './styles'
import Logo from '../../assets/rocketseat.svg'


interface Props {
  select?: boolean;
  isHome?: boolean;
  isNotifications?: boolean;
  mentions?: number;

}

export function ServerButton({ isHome, isNotifications, mentions, select }: Props) {

  return (
    <Button
    >
      {isHome && <img src={Logo} alt="is home" />}
    </Button>
  )
}
