import ThemeContext from '../../context/ThemeContext'

import {
  NoVideosContainer,
  NoVideoImage,
  NoVideoHeading,
  NoVideoText,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const noVideosImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <NoVideosContainer>
            <NoVideoImage src={noVideosImage} alt="failure view" />
            <NoVideoHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </NoVideoHeading>
            <NoVideoText color={noteColor}>
              We are having some trouble to complete your request. Please try
              again.
            </NoVideoText>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
