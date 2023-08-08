import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavIcons = styled.nav`
  display: flex;
  justify-content: space-between;
  
  svg{
    width: 3rem;
    padding: 0.8rem;
    height: 3rem;
    transition: 500ms;
    cursor: pointer;
  }
  
  a + a {
    margin-left: 1.5rem;
  }
  
  svg:hover path{
    fill: ${({theme})=> theme['green-500']};
  }
`