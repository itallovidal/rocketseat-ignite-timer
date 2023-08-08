import styled from "styled-components";
import {defaultTheme} from "../../styles/theme.ts";

export const TaskList = styled.section`
  width: 100%;
  max-height: 25rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  gap: 4px;
  
  @media(max-width: 700px){
    max-height: 38rem;
  }
`

export const Title = styled.h1`
  align-self: flex-start;
  margin: 0 0 2rem 0 ;
  font-size: ${({theme})=>theme['font-xxl']};
  color: white;
`


const listItemStyle = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-auto-flow: column;
  gap: 3.5rem;
  grid-template-columns: 18rem 5rem 10rem auto;
  color: white;
  
  width: 100%;
  
  @media(max-width: 1000px){
    grid-template-columns: 18rem 5rem 10rem 10rem;
    width: calc(18rem + 5rem +  10rem + 10rem + 10.5rem);
    
  }
  
  h2,p{
    font-size: ${({theme})=>theme['font-m']};
  }
`

export const ListItemHeader = styled(listItemStyle)`
  background: ${({theme})=> theme['gray-700']};
  border-radius: 10px 10px 0 0;
  position: sticky;
  top: 0;
  z-index: 10;
`

export const Item = styled(listItemStyle)`
  background: ${({theme})=> theme['gray-600']};
`


export type Status = 'em andamento' | 'concluído' | 'interrompido'

const StatusColors = {
    'em andamento': defaultTheme["yellow-500"],
    'concluído': defaultTheme["green-500"],
    'interrompido': defaultTheme["red-500"]
} as const
export const StatusItem = styled.span<{ $status: Status }> `
    position: relative;
  
    &:before{
      left: -12%;
      height: 10px;
      width: 10px;
      bottom: 50%;
      transform: translateY(50%);
      position: absolute;
      background: ${({$status})=> StatusColors[$status]};
      content: '';
      clip-path: circle();
    }
`