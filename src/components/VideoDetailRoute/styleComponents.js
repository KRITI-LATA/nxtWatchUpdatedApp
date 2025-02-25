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

export const VideoDetailContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 30px;
`

export const VideoPlayer = styled.div``

export const PlayVideoTitle = styled.p`
  color: ${props => props.color};
`

export const VideoStatusContainer = styled.div``

export const VideoStatus = styled.p`
  color: ${props => props.color};
`

export const VideoDot = styled.span``

export const VideoStatusButtonContainer = styled.div``

export const LikeButton = styled.button`
  color: ${props => props.color};
`

export const ButtonText = styled.span``

export const DisLikeButton = styled.button`
  color: ${props => props.color};
`

export const SaveButton = styled.button`
  color: ${props => props.color};
`

export const HorizantelLine = styled.hr``

export const ChannelContainer = styled.div``

export const ChannelInfo = styled.div``

export const ChannelImage = styled.img``

export const ChannelSubscriber = styled.p`
  color: ${props => props.color};
`

export const ChannelName = styled.p`
  color: ${props => props.color};
`

export const ChannelDescription = styled.p`
  color: ${props => props.color};
`
