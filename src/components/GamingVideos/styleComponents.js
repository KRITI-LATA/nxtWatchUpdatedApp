import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingLink = styled(Link)`
  text-decoration: none;
  text-decoration-color: none;
`

export const GamingItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 260px;
  margin-right: 20px;
  margin-top: 10px;
`

export const GamingImage = styled.img`
  width: 260px;
`

export const GamingTitle = styled.h1`
  color: ${props => props.color};
  font-size: 16px;
  font-family: 'Roboto';
  margin-bottom: 0px;
`

export const GamingViews = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 6px;
`
