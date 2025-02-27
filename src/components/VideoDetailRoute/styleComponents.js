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
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  width: 80vw;
`

export const VideoPlayer = styled.div``

export const PlayVideoTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`

export const VideoStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const VideoStatus = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`

export const VideoDot = styled.span`
  padding: 10px;
`

export const VideoStatusButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0px;
  padding: 0px;
`

export const LikeButton = styled.button`
  color: ${props => props.color};
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-weight: 500;
  margin-right: 10px;
`

export const ButtonText = styled.span`
  font-family: 'Roboto';
`

export const DisLikeButton = styled.button`
  color: ${props => props.color};
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-weight: 500;
  margin-right: 10px;
`

export const SaveButton = styled.button`
  color: ${props => props.color};
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-weight: 500;
  margin-right: 10px;
`

export const HorizantelLine = styled.hr`
  border: 1px solid #64748b;
  width: 98%;
  margin-top: 0px;
`

export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20px;
`

export const ChannelInfo = styled.div``

export const ChannelImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`

export const ChannelSubscriber = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 0px;
`

export const ChannelName = styled.p`
  color: ${props => props.color};
  margin-top: 0px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`

export const ChannelDescription = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-top: 30px;

  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`
