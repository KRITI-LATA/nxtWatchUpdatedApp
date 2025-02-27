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

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 30px;
`

export const SavedVideosDetailContainer = styled.div``

export const SavedVideosHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`

export const SavedVideosIconContainer = styled.div`
  margin-right: 20px;
`

export const SavedVideosHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';

  @media screen and (max-width: 576px) {
    font-size: 22px;
    font-weight: 500;
  }
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`

export const NoSavedVideosImage = styled.img`
  margin-top: 40px;
  width: 30%;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const NoSavedVideosHeading = styled.h1`
  color: ${props => props.color};
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 20px;
`

export const NoSavedVideosParagraph = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
`

export const SavedVideosList = styled.ul``
