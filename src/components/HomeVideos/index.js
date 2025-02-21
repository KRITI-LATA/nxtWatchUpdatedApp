import ThemeContext from '../../context/ThemeContext'

import {
  LinkItem,
  ListItem,
  ThumbNailImage,
  VideosDetails,
  ProfileImage,
  ContactSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

const HomeVideos = props => {
  const {videosDetail} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videosDetail

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f0' : '#231f20'

        return (
          <LinkItem to={`/videos/${id}`}>
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="Video thumbnail" />
              <VideosDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />

                <Title color={textColor}>{title}</Title>
              </VideosDetails>
              <ChannelName color={textColor}>{name}</ChannelName>
              <ContactSection>
                <ViewsAndDate color={textColor}>
                  {viewCount} views <Dot>&#8226;</Dot> {publishedAt}
                </ViewsAndDate>
              </ContactSection>
            </ListItem>
          </LinkItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideos
