import {formatDistanceToNow} from 'date-fns'

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

  const newDate = formatDistanceToNow(new Date(publishedAt))

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
                  {viewCount} views &#8226; {newDate}
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
