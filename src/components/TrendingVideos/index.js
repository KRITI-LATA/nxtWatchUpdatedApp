import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingLink,
  TrendingItem,
  TrendingThumbNailImage,
  TrendingVideoDetail,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAdDate,
} from './styleComponents'

const TrendingVideos = props => {
  const {trendingVideoDetail} = props

  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
  } = trendingVideoDetail

  const newDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f0' : '#231f20'

        return (
          <TrendingLink to={`/videos/${id}`}>
            <TrendingItem>
              <TrendingThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetail>
                <TrendingTitle color={textColor}>{title}</TrendingTitle>
                <TrendingChannelName color={textColor}>
                  {name}
                </TrendingChannelName>
                <TrendingViewsAdDate color={textColor}>
                  {viewCount} views &#8226;
                  {newDate}
                </TrendingViewsAdDate>
              </TrendingVideoDetail>
            </TrendingItem>
          </TrendingLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideos
