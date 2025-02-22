import styled from 'styled-components'

export const HomeSideBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  width: 100vw;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 30px;
`

export const GamingTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`

export const GamingHeadingContainer = styled.div`
  margin-right: 20px;
`

export const GamingHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
`

export const GamingList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  list-style-type: none;
  width: 82vw;
`
