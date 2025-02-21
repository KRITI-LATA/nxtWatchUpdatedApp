import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
`
export const NavigationLgContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  width: 200px;

  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 200px;
  height: 400px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkContainer = styled.li`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const NavText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
`
export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  justify-content: space-between;
  margin-top: 20px;
`

export const ContactHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
`

export const ContactIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const ContactImage = styled.img`
  width: 30px;
`

export const ContactNotes = styled.p`
  color: ${props => props.color};
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const NavigationSmallContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
