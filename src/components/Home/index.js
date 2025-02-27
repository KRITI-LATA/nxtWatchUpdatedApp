import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideos from '../HomeVideos'
import ThemeContext from '../../context/ThemeContext'
import FailureView from '../FailureView'

import {
  HomeSideBarContainer,
  HomeDetailContainer,
  BannerContainer,
  BannerLeftPart,
  LogoImage,
  PremiumText,
  GetButton,
  BannerRightPart,
  CloseIconButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeVideosContainerList,
  RetryButton,
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultText,
} from './styledComponents'

const apiHomeStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiHomeStatusConstant.initial,
    searchInput: '',
    homeVideos: [],
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideoList()
  }

  getVideoList = async () => {
    this.setState({apiStatus: apiHomeStatusConstant.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    console.log(url)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiHomeStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiHomeStatusConstant.failure})
    }
  }

  onClickCloseBtn = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getVideoList()
  }

  onClickRetry = () => {
    this.setState({searchInput: ' '}, this.getVideoList)
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideoViews = () => {
    const {homeVideos} = this.state
    const showVideoList = homeVideos.length > 0

    return showVideoList ? (
      <HomeVideosContainerList>
        {homeVideos.map(eachItem => (
          <HomeVideos key={eachItem.id} videosDetail={eachItem} />
        ))}
      </HomeVideosContainerList>
    ) : (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
          const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

          return (
            <NoSearchResultContainer>
              <NoSearchResultImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoSearchResultHeading headingColor={headingColor}>
                No Search results found
              </NoSearchResultHeading>
              <NoSearchResultText color={noteColor}>
                Try different key words or remove search filter
              </NoSearchResultText>
              <RetryButton type="button" onClick={this.onClickRetry}>
                Retry
              </RetryButton>
            </NoSearchResultContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  onRetry = () => {
    this.getVideoList()
  }

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiHomeStatusConstant.success:
        return this.renderVideoViews()
      case apiHomeStatusConstant.failure:
        return this.renderFailureView()
      case apiHomeStatusConstant.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'

          return (
            <>
              <Header />

              <HomeSideBarContainer bgColor={bgColor}>
                <SideBar />
                <HomeDetailContainer bgColor={bgColor} data-testid="home">
                  <BannerContainer display={display} data-testid="banner">
                    <BannerLeftPart>
                      <LogoImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <PremiumText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </PremiumText>
                      <GetButton type="button">GET IT NOW</GetButton>
                    </BannerLeftPart>

                    <BannerRightPart>
                      <CloseIconButton
                        type="button"
                        data-testid="close"
                        onClick={this.onClickCloseBtn}
                      >
                        <AiOutlineClose />
                      </CloseIconButton>
                    </BannerRightPart>
                  </BannerContainer>
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      color={textColor}
                      onChange={this.onChangeSearchInput}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      type="button"
                      onClick={this.getSearchResults}
                    >
                      <AiOutlineSearch size={20} />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderAllVideos()}
                </HomeDetailContainer>
              </HomeSideBarContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
