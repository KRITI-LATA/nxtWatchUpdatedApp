import styled from 'styled-components'

export const HomeSideBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`

export const NotFoundImage = styled.img`
  margin-top: 40px;
  width: 30%;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => props.headingColor};
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 20px;
`

export const NotFoundNote = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
`
