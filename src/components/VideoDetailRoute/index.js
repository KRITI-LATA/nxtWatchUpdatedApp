import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FailureView from '../FailureView'
import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeSideBarContainer,
  VideoDetailContainer,
  VideoPlayer,
  PlayVideoTitle,
  VideoStatusContainer,
  VideoStatus,
  VideoDot,
  VideoStatusButtonContainer,
  LikeButton,
  DisLikeButton,
  SaveButton,
  HorizantelLine,
  ChannelContainer,
  ChannelImage,
  ChannelInfo,
  ChannelName,
  ChannelSubscriber,
  ChannelDescription,
} from './styleComponents'

const apiVideoDetailStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProcess: 'IN_PROCESS',
}

class VideoDetailRoute extends Component {
  state = {
    videoDetail: [],
    isLiked: false,
    isDislike: false,
    apiStatus: apiVideoDetailStatus.initial,
  }

  componentDidMount() {
    this.getVideDetail()
  }

  getFormattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideDetail = async () => {
    this.setState({apiStatus: apiVideoDetailStatus.inProcess})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const dataDetail = await response.json()
      const videoDetailData = this.getFormattedData(dataDetail)

      this.setState({
        videoDetail: videoDetailData,
        apiStatus: apiVideoDetailStatus.success,
      })
    } else {
      this.setState({apiStatus: apiVideoDetailStatus.failure})
    }
  }

  onClickLikeBtn = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDislike: false,
    }))
  }

  onClickDislikeBtn = () => {
    this.setState(prevState => ({
      isDislike: !prevState.isDislike,
      isLiked: false,
    }))
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  onRetry = () => {
    this.getVideDetail()
  }

  renderPlayVideoView = () => {
    const {videoDetail, isLiked, isDislike} = this.state

    const dateYear = videoDetail.publishedAt

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos, addVideos} = value
          const textColor = isDarkTheme ? '#64748b' : '#231f20'
          const channelColor = isDarkTheme ? '#f9f9f0' : '#231f20'

          let isSaved
          const index = savedVideos.findIndex(
            eachVideo => eachVideo.id === videoDetail.id,
          )
          if (index === -1) {
            isSaved = false
          } else {
            isSaved = true
          }

          const savedIconColor = isSaved ? '#2563eb' : textColor

          const onClickSaveBtn = () => {
            addVideos(videoDetail)
          }

          return (
            <VideoPlayer>
              <ReactPlayer
                url={videoDetail.videoUrl}
                controls
                width="100%"
                height="80%"
              />
              <PlayVideoTitle color={textColor}>
                {videoDetail.title}
              </PlayVideoTitle>
              <VideoStatusContainer>
                <VideoStatus color={textColor}>
                  {videoDetail.viewCount} views
                  <VideoDot>&#8226;</VideoDot>
                  {dateYear}
                </VideoStatus>
                <VideoStatusButtonContainer>
                  <LikeButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={this.onClickLikeBtn}
                  >
                    <AiOutlineLike size={25} />
                    Like
                  </LikeButton>
                  <DisLikeButton
                    type="button"
                    color={isDislike ? '#2563eb' : '#64748b'}
                    onClick={this.onClickDislikeBtn}
                  >
                    <AiOutlineDislike size={25} />
                    Dislike
                  </DisLikeButton>
                  <SaveButton
                    type="button"
                    color={savedIconColor}
                    onClick={onClickSaveBtn}
                  >
                    <BiListPlus size={25} />
                    {isSaved ? 'Saved' : 'Save'}
                  </SaveButton>
                </VideoStatusButtonContainer>
              </VideoStatusContainer>
              <HorizantelLine />
              <ChannelContainer>
                <ChannelImage
                  src={videoDetail.profileImageUrl}
                  alt="channel logo"
                />
                <ChannelInfo>
                  <ChannelName color={channelColor}>
                    {videoDetail.name}
                  </ChannelName>
                  <ChannelSubscriber color={textColor}>
                    {videoDetail.subscriberCount} Subscribers
                  </ChannelSubscriber>
                  <ChannelDescription color={channelColor}>
                    {videoDetail.description}
                  </ChannelDescription>
                </ChannelInfo>
              </ChannelContainer>
            </VideoPlayer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderVideoDetailView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiVideoDetailStatus.success:
        return this.renderVideoDetailView()
      case apiVideoDetailStatus.failure:
        return this.renderFailureView()
      case apiVideoDetailStatus.inProcess:
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

          return (
            <>
              <Header />
              <HomeSideBarContainer bgColor={bgColor}>
                <SideBar />
                <VideoDetailContainer
                  data-testid="videoItemDetails"
                  bgColor={bgColor}
                >
                  {this.renderPlayVideoView()}
                </VideoDetailContainer>
              </HomeSideBarContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetailRoute
