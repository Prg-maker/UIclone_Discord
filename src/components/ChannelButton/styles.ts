import styled from 'styled-components'

import { ExpandMore } from 'styled-icons/material'
import { PersonAdd, Settings } from 'styled-icons/material'

import { Hashtag } from 'styled-icons/heroicons-outline'


export const Container = styled.div`
  display: flex;

  align-items:center;
  justify-content:space-between;

  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;

  transition: background-color 0.2s ;

  >div{
    display:flex;
    align-items:center;
  }

  >div span{
    margin-left: 5px;
    color: var(--senary);
  }


  .rigth{
    display: none;
  }

  &.active, &:hover{
    background-color: var(--quinary);

    .rigth{
      display: flex;
    }

    >div span {
      color:var(--white);
    }
  }

`


export const Hashtagicon = styled(Hashtag)`
  width:20px;
  height:20px;

  color: var(--symbol);

`
export const InviteIcon = styled(PersonAdd)`
  width:16pxx;
  height:16px;


  color: var(--symbol);
  cursor:pointer;


  transition: color 0.2s;

  &:hover{
    color: var(--white);
  }


`
export const SettigsIcon = styled(Settings)`

  width:16pxx;
  height:16px;


  margin-left: 4px;

  color: var(--symbol);
  cursor:pointer;


  transition: color 0.2s;

  &:hover{
  color: var(--white);
  }

`
