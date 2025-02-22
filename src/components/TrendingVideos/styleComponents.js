import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingLink = styled(Link)`
  text-decoration: none;
  text-decoration-color: none;
`

export const TrendingItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  width: 60%;
  margin-right: 20px;
`

export const TrendingThumbNailImage = styled.img`
  width: 300px;
  margin-right: 20px;
`

export const TrendingVideoDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const TrendingTitle = styled.h1`
  color: ${props => props.color};
  font-size: 18px;
  font-family: 'Roboto';
`

export const TrendingChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin-bottom: 0px;
`

export const TrendingViewsAdDate = styled.p`
  color: ${props => props.color};
  margin-top: 5px;
  font-family: 'Roboto';
`

export const TrendingDot = styled.span``
