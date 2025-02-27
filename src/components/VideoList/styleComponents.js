import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
  text-decoration-color: none;
`

export const VideoItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  width: 80%;
  margin-right: 20px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    width: 60%;
  }
`

export const VideoThumbNailImage = styled.img`
  width: 300px;
  margin-right: 20px;

  @media screen and (max-width: 576px) {
    width: 250px;
    margin-right: 2px;
  }
`

export const ListVideoDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const VideoTitle = styled.h1`
  color: ${props => props.color};
  font-size: 22px;
  font-family: 'Roboto';
  margin-bottom: 0px;

  @media screen and (max-width: 576px) {
    font-size: 16px;
    font-weight: 500;
  }
`

export const VideoChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin-bottom: 0px;
`

export const VideoViewsAdDate = styled.p`
  color: ${props => props.color};
  margin-top: 5px;
  font-family: 'Roboto';
`

export const VideoDot = styled.span``
