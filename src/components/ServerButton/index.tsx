import { Button } from './styles'
import Logo from '../../assets/rocketseat.svg'




export interface Props {
  isHome?: boolean;
  select?: boolean;
  isNotifications?: boolean;
  mentions?: number;

}

export function ServerButton({
  isHome,
  isNotifications,
  mentions,
  select
}: Props) {

  return (
    <Button
      isHome={isHome}
      isNotifications={isNotifications}
      mentions={mentions}
      className={select ? 'active' : ''}

    >
      {isHome ? <img src={Logo} alt="rocketseat" /> : <img className="not" src="https://github.com/Prg-Maker.png" alt="" />}
    </Button>
  )
}
