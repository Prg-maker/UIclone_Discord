
import { Container, Hashtagicon, InviteIcon, SettigsIcon } from './styles'

interface Props {
  channelName: string;
  selected?: boolean;

}

export function ChannelButton({ channelName, selected }: Props) {
  return (
    <Container className={selected ? 'active' : ''} >
      <div>
        <Hashtagicon />
        <span>{channelName}</span>
      </div>



      <div className="rigth" >
        <InviteIcon />
        <SettigsIcon />
      </div>

    </Container>
  )
}
