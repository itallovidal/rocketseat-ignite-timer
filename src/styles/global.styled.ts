import styled, {createGlobalStyle, keyframes} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 700px){
    :root{
      font-size: 12px;
    }
  }
  
  body{
    background: ${({theme})=> theme["gray-900"]};
    color: ${({theme})=> theme["green-300"]};
  }
  
  path{
    transition: 300ms;
  }
  
  :focus:not(button){
    transition: 400ms;
    outline: none;
    box-shadow: 0 0 0 2px ${({theme})=> theme["green-500"]};
  }
  
  body, input, button,textarea, a{
    font-family: ${({theme})=> theme["font-regular"]};
    font-weight: 400;
    font-size: 1rem;
  }

  a{
    text-decoration: none;
    color: black;
  }

  picture{
    display: block;
    img{
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  button{
    border: none;
    background: transparent;
    padding: 10px;
    border-radius: 8px;
    transition: 500ms;
    cursor: pointer;
  }
`

export const show = keyframes`
  100%{
    opacity: 1;
  }
`

interface mainProps{
    $maxWidth: string,
    $marginTop: string
}

export const Wrapper = styled.main<mainProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${({$marginTop})=>$marginTop} auto;
  justify-content: center;
  align-items: center;
  max-width: ${({$maxWidth})=> $maxWidth};
  opacity: 0;
  animation: ${show} 300ms forwards;

`