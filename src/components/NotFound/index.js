import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeSideBarContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundNote,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'

      return (
        <>
          <Header />

          <HomeSideBarContainer bgColor={bgColor}>
            <SideBar />
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundNote color={noteColor}>
                we are sorry, the page you requested could not be found.
              </NotFoundNote>
            </NotFoundContainer>
          </HomeSideBarContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
