import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoLink,
  VideoItem,
  VideoThumbNailImage,
  ListVideoDetail,
  VideoTitle,
  VideoChannelName,
  VideoViewsAdDate,
  VideoDot,
} from './styleComponents'

const VideoList = props => {
  const {VideoDetail} = props

  const {id, title, thumbnailUrl, viewCount, publishedAt, name} = VideoDetail

  const newDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f0' : '#231f20'

        return (
          <VideoLink to={`/videos/${id}`}>
            <VideoItem>
              <VideoThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <ListVideoDetail>
                <VideoTitle color={textColor}>{title}</VideoTitle>
                <VideoChannelName color={textColor}>{name}</VideoChannelName>
                <VideoViewsAdDate color={textColor}>
                  {viewCount} views <VideoDot>&#8226; </VideoDot>
                  {newDate}
                </VideoViewsAdDate>
              </ListVideoDetail>
            </VideoItem>
          </VideoLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoList
