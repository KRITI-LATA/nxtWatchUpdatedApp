import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginCardContainer,
  ThemeImage,
  FormContainer,
  InputContainer,
  Level,
  NamePasswordInput,
  CheckBoxInputContainer,
  CheckboxInput,
  CheckboxLevel,
  LoginButton,
  FailureText,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitLoginForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMsg,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const inputType = showPassword ? 'text' : 'password'
    return (
      <LoginContainer>
        <LoginCardContainer>
          <ThemeImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.submitLoginForm}>
            <InputContainer>
              <Level htmlFor="username">USERNAME</Level>
              <NamePasswordInput
                id="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={this.onChangeUsername}
              />
            </InputContainer>
            <InputContainer>
              <Level htmlFor="password">PASSWORD</Level>
              <NamePasswordInput
                type={inputType}
                id="password"
                value={password}
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </InputContainer>
            <CheckBoxInputContainer>
              <CheckboxInput
                type="checkbox"
                id="checkbox-input"
                onChange={this.onShowPassword}
              />
              <CheckboxLevel htmlFor="checkbox-input">
                Show Password
              </CheckboxLevel>
            </CheckBoxInputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <FailureText>*{errorMsg}</FailureText>}
          </FormContainer>
        </LoginCardContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
