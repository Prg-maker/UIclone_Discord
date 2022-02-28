import React, { useRef, useEffect } from 'react'

import { ChannelMessage, Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon, } from './styles'



export function ChannelData() {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;


  useEffect(() => {
    const div = messagesRef.current;


    if (div) {
      div.scrollTop = div.scrollHeight;

    }
  },
    [messagesRef])

  return (
    <Container >
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />

        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />


        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />


        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />


        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />
        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />
        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />
        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />
        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />
        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />
        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />
        <ChannelMessage
          author="Daniel"
          date="15/01/2022"
          content="ola pesssoal"
        />


        <ChannelMessage
          author="Bot"
          date="15/01/2022"
          isBot
          hasMention
          content={
            <>
              <Mention>@Daniel Fer</Mention>, Hoje é meu anniversário
            </>
          }
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="conversar em #chatliv" />
        <InputIcon />

      </InputWrapper>


    </Container>
  )

}
