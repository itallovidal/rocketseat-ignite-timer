import styled from "styled-components";

export const LayoutWrapper = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 5rem auto;
  //height: calc(100vh - 18rem);
  border-radius: 8px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background: ${({theme})=> theme['gray-800']};
  height: 46rem;

  @media (max-width: 700px){
    height: 100svh;
    margin: 0 auto ;
    border-radius: 0;
    justify-content: center;
  }
`