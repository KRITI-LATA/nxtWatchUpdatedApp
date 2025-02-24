import ThemeContext from '../../context/ThemeContext'

import {
  GamingLink,
  GamingItem,
  GamingImage,
  GamingTitle,
  GamingViews,
} from './styleComponents'

const GamingVideos = props => {
  const {GamingDetail} = props

  const {id, title, thumbnailUrl, viewCount} = GamingDetail

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f0' : '#231f20'

        return (
          <GamingLink to={`/videos/${id}`}>
            <GamingItem>
              <GamingImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingTitle color={textColor}>{title}</GamingTitle>
              <GamingViews color={textColor}>
                {viewCount} Watching Worldwide
              </GamingViews>
            </GamingItem>
          </GamingLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideos
