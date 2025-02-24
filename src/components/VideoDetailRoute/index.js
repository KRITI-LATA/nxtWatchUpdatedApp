import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FailureView from '../FailureView'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoDetailContainer,
  VideoContainer,
  VideoImage,
} from './styleComponents'

class VideoDetailRoute extends Component {
  render() {
    return (
      <VideoDetailContainer>
        <VideoContainer></VideoContainer>
      </VideoDetailContainer>
    )
  }
}

export default VideoDetailRoute
