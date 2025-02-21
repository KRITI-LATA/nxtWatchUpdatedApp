import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: ${props => props.bgColor};
`

export const LogoLink = styled(Link)`
  text-decoration: none;
  margin-left: 20px;
`

export const LogoImage = styled.img`
  width: 150px;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ToggleButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
`

export const ProfileImage = styled.img`
  width: 40px;
  margin-left: 20px;
  margin-right: 20px;
`

export const LogoutButton = styled.button`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  border-color: ${props => props.color};
  padding: 6px;
  padding-left: 15px;
  padding-right: 15px;
  outline: none;
  border: 2px solid;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  color: ${props => props.color};
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: none;
  margin-right: 20px;

  @media screen and (max-width: 576px) {
    display: flex;
  }
`

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
  border-radius: 8px;
  background-color: #f8fafc;
  width: 300px;
  height: 150px;
`

export const LogoutDescription = styled.p`
  font-family: 'Roboto';
  color: #231f20;
  font-weight: bold;
`

export const LogoutButtonContainer = styled.div``

export const CancelButton = styled.button`
  color: #616e7c;
  border: 2px solid #616e7c;
  margin-right: 20px;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: transparent;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
`
