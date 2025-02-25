import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeSideBarContainer,
  SavedVideosContainer,
  SavedVideosDetailContainer,
  SavedVideosHeadingContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosParagraph,
  SavedVideosList,
} from './styledComplonents'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, onToggleTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
          const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

          return (
            <>
              <Header />
              <HomeSideBarContainer bgColor={bgColor}>
                <SideBar />
                <SavedVideosDetailContainer>
                  <SavedVideosContainer
                    bgColor={bgColor}
                    data-testid="saved-videos"
                    onClick={onToggleTheme}
                  >
                    <SavedVideosHeadingContainer>
                      <SavedVideosIconContainer>
                        <CgPlayListAdd size={35} color="#ff0000" />
                      </SavedVideosIconContainer>
                      <SavedVideosHeading color={textColor}>
                        Saved Videos
                      </SavedVideosHeading>
                    </SavedVideosHeadingContainer>
                    <SavedVideosList> </SavedVideosList>
                  </SavedVideosContainer>
                  <NoSavedVideosContainer>
                    <NoSavedVideosImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoSavedVideosHeading color={headingColor}>
                      No Saved Videos Found
                    </NoSavedVideosHeading>
                    <NoSavedVideosParagraph color={noteColor}>
                      you can save your videos while watching them.
                    </NoSavedVideosParagraph>
                  </NoSavedVideosContainer>
                </SavedVideosDetailContainer>
              </HomeSideBarContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
