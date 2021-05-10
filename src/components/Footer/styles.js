import styled from 'styled-components'

export const Container = styled.div`
position:absolute;
bottom:0;
width:100%;
height:50px;   /* Height of the footer */
background: white;
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
`

export const Title = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 70px;
  margin-right: 70px;
  justify-content: center;
  align-items: center;
`