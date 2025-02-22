import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideos from '../GamingVideos'
import ThemeContext from '../../context/ThemeContext'
import FailureView from '../FailureView'

import {
  HomeSideBarContainer,
  GamingContainer,
  GamingTitleContainer,
  GamingHeadingContainer,
  GamingHeading,
  GamingList,
} from './styleComponents'

const apiGamingStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProcess: 'IN_PROCESS',
}

class Gaming extends Component {
  state = {apiStatus: apiGamingStatus.initial, gamingData: []}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiGamingStatus.inProcess})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    console.log(response)

    if (response.ok) {
      const data = await response.json()
      const updatedGamingData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        gamingData: updatedGamingData,
        apiStatus: apiGamingStatus.success,
      })
    } else {
      this.setState({apiStatus: apiGamingStatus.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  onRetry = () => {
    this.getGamingData()
  }

  renderSuccessData = () => {
    const {gamingData} = this.state

    return (
      <>
        <GamingList>
          {gamingData.map(eachData => (
            <GamingVideos key={eachData.id} GamingDetail={eachData} />
          ))}
        </GamingList>
      </>
    )
  }

  renderGamingDataView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiGamingStatus.success:
        return this.renderSuccessData()
      case apiGamingStatus.failure:
        return this.renderFailureView()
      case apiGamingStatus.inProcess:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <Header />
              <HomeSideBarContainer bgColor={bgColor}>
                <SideBar />
                <GamingContainer bgColor={bgColor} data-testid="gaming">
                  <GamingTitleContainer>
                    <GamingHeadingContainer>
                      <SiYoutubegaming size={35} color="#ff0000" />
                    </GamingHeadingContainer>
                    <GamingHeading color={textColor}>Gaming</GamingHeading>
                  </GamingTitleContainer>
                  {this.renderGamingDataView()}
                </GamingContainer>
              </HomeSideBarContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
