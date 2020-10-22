import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #d9e4dd;
    border-radius: 11px;
    box-shadow: 0 2.4px 13.5px rgba(0, 0, 0, 0.041), 0 19px 20px rgba(0, 0, 0, 0.09);



`

export const CardImg = styled.div`

    margin-bottom: 15px;
& img {
    height: 150px;
    @media screen and (max-width: 450px) {
        height: 100px;
      }


}`
export const CardTitle = styled.div`
font-size: 19px;
    font-weight: 500;
    margin-bottom: 10px;`
export const CardNumber = styled.div`
background: #fbf7f0;
    padding: 4px 8px;
    border-radius: 5px;


`