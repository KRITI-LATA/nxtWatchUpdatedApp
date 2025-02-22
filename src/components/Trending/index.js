import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideos from '../TrendingVideos'
import ThemeContext from '../../context/ThemeContext'
import FailureView from '../FailureView'

import {
  HomeSideBarContainer,
  TrendingContainer,
  TrendingHeadingContainer,
  TrendingIconContainer,
  Heading,
  TrendingList,
} from './styleComponents'

const apiTrendingStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProcess: 'IN_PROCESS',
}

class Trending extends Component {
  state = {apiStatus: apiTrendingStatus.initial, trendingData: []}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiTrendingStatus.inProcess})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/trending'

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
      const updatedTrendingData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
      }))

      this.setState({
        trendingData: updatedTrendingData,
        apiStatus: apiTrendingStatus.success,
      })
    } else {
      this.setState({apiStatus: apiTrendingStatus.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  onRetry = () => {
    this.getTrendingData()
  }

  renderSuccessData = () => {
    const {trendingData} = this.state

    return (
      <>
        <TrendingList>
          {trendingData.map(eachData => (
            <TrendingVideos key={eachData} trendingVideoDetail={eachData} />
          ))}
        </TrendingList>
      </>
    )
  }

  renderTrendingDataView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiTrendingStatus.success:
        return this.renderSuccessData()
      case apiTrendingStatus.failure:
        return this.renderFailureView()
      case apiTrendingStatus.inProcess:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, onToggleTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <Header />
              <HomeSideBarContainer bgColor={bgColor}>
                <SideBar />
                <TrendingContainer
                  bgColor={bgColor}
                  data-testid="trending"
                  onClick={onToggleTheme}
                >
                  <TrendingHeadingContainer>
                    <TrendingIconContainer>
                      <HiFire size={35} color="#ff0000" />
                    </TrendingIconContainer>
                    <Heading color={textColor}>Trending</Heading>
                  </TrendingHeadingContainer>
                  {this.renderTrendingDataView()}
                </TrendingContainer>
              </HomeSideBarContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Trending
