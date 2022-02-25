
import { Container, Message, InputWrapper, Input, InputIcon, } from './styles'


export function ChannelData() {
  return (
    <Container >
      <Message >
      </Message>

      <InputWrapper>
        <Input type="text" placeholder="conversar em #chatliv" />
        <InputIcon />

      </InputWrapper>


    </Container>
  )

}
