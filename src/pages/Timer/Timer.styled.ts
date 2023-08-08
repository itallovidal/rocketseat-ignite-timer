import styled from "styled-components";
import {show} from "../../styles/global.styled.ts";

export const TimerBody = styled.section`
  width: 100%;
`

export const Button = styled.button`
  width: 100%;
  text-align: center;
  padding-block: calc(2rem - 1ch);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;

  svg{
    height: 2ch;
  }

  &:disabled{
    cursor: not-allowed;
    opacity: .4;
  }
`

export const CounterButton = styled(Button)`
  background: ${({theme})=> theme['green-700']};
`

export const InterruptButton = styled(Button)`
  background: ${({theme})=> theme['red-500']};
`

export const ErrorMessage = styled.span`
  padding: 1rem;
  background: black;
  font-weight: 700;
  position: absolute;
  border-radius: 10px;
  top: -110%;
  opacity: 0;
  animation: ${show} 1000ms forwards;
  
  &:before{
    content: '';
    height: 15px;
    width: 15px;
    position: absolute;
    bottom: -20%;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
  }
`
