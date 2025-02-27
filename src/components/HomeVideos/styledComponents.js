import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
  text-decoration-color: none;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-top: 20px;
`

export const ThumbNailImage = styled.img`
  width: 280px;
`

export const VideosDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const ProfileImage = styled.img`
  width: 40px;
`

export const ContactSection = styled.div`
  display: flex;
  flex-direction: row;
`

export const Title = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin-bottom: 0px;
`

export const ViewsAndDate = styled.p`
  color: ${props => props.color};
  margin-top: 5px;
  font-family: 'Roboto';
`
