import styled from "styled-components";

export const TimerButton = styled.button`
  border: none;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`

export const TimerInput = styled.input`
  background: none;
  border: none;
  border-bottom: 2px solid ${({theme})=> theme['gray-600']};
  padding: .5rem;
  color: white;
  width: 100%;
  max-width: 17rem;
  text-align: center;
  
  &::placeholder{
    opacity: .4;
  }
`

export const TimerHeader = styled.section`
  width: 100%;
  display: flex;
  color: white;
  align-items: center;
  gap: .5rem;
  font-size: ${({theme})=> theme["font-xl"]};
`

export const WrapperMinutesTimer = styled.div`
  width: 4.5rem;
  display: flex;
  border-bottom: 2px solid ${({theme})=> theme['gray-600']};
  
  input{
    border: none;
  }
`