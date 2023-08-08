import styled from "styled-components";

export const CountdownWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-block: 4rem;
  justify-content: space-between;
  
  span{
    font-family: ${({theme})=> theme['font-secondary']};
    font-size: 10rem;
    border-radius: 10px;
    padding: 1rem;
    background: ${({theme})=> theme['gray-700']};
    color: white;
  }

  p{
    font-family: ${({theme})=> theme['font-secondary']};
    font-size: 10rem;
  }

  @media (max-width: 700px){
    gap: .5rem;
    
    span{
      font-size: 5rem;
    }

    p{
      font-size: 3rem;
    }
  }
  

`
