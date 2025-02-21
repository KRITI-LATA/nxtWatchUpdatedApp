import styled from 'styled-components'

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`

export const NoVideoImage = styled.img`
  margin-top: 40px;
  width: 30%;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const NoVideoHeading = styled.h1`
  color: ${props => props.headingColor};
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 20px;
`

export const NoVideoText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`
