import styled from 'styled-components'



export const Main = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 20px;
padding: 40px;
@media screen and (max-width: 915px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 705px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
padding: 10px;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
padding: 20px;
  }
  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr ;
padding: 10px;
  }


`