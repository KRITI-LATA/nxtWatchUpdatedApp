import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'

import {
  NavbarContainer,
  LogoLink,
  LogoImage,
  HeaderContent,
  ToggleButton,
  ProfileImage,
  LogoutButton,
  LogoutContainer,
  LogoutDescription,
  LogoutButtonContainer,
  CancelButton,
  ConfirmButton,
  LogoutIconButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, onToggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const logoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onChangeTheme = () => {
        onToggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <>
          <NavbarContainer bgColor={bgColor}>
            <LogoLink to="/">
              <LogoImage src={logoImage} alt="website logo" />
            </LogoLink>
            <HeaderContent>
              <ToggleButton
                type="button"
                data-testid="theme"
                onClick={onChangeTheme}
              >
                {isDarkTheme ? (
                  <BsBrightnessHigh color="#ffffff" size={25} />
                ) : (
                  <BsMoon size={25} />
                )}
              </ToggleButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Popup
                modal
                trigger={
                  <LogoutButton type="button" color={color} bgColor={bgColor}>
                    Logout
                  </LogoutButton>
                }
                className="popup-content"
              >
                {close => (
                  <LogoutContainer>
                    <LogoutDescription>
                      Are you sure, you want to logout?
                    </LogoutDescription>
                    <LogoutButtonContainer>
                      <CancelButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </LogoutButtonContainer>
                  </LogoutContainer>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <LogoutIconButton type="button">
                    <FiLogOut size={25} color={color} />
                  </LogoutIconButton>
                }
                className="popup-content"
              >
                {close => (
                  <LogoutContainer>
                    <LogoutDescription>
                      Are you sure, you want to logout?
                    </LogoutDescription>
                    <LogoutButtonContainer>
                      <CancelButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </LogoutButtonContainer>
                  </LogoutContainer>
                )}
              </Popup>
            </HeaderContent>
          </NavbarContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(Header)
