import styled from 'styled-components'

export const HomeSideBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  width: 100vw;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const HomeDetailContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 30px;
`

export const BannerContainer = styled.div`
  display: ${props => props.display};
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 80vw;
  background-size: cover;
  height: 300px;
  justify-content: space-between;
  padding-left: 20px;
  padding-top: 20px;
`

export const BannerLeftPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const LogoImage = styled.img`
  width: 150px;
  margin-bottom: 20px;
`

export const PremiumText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
`

export const GetButton = styled.button`
  color: #1e293b;
  border: 1px solid #1e293b;
  font-family: 'Roboto';
  padding: 10px;
  font-weight: 500;
  background-color: #ffffff;
  outline: none;
  width: 120px;
  margin-top: 20px;
`

export const BannerRightPart = styled.div``

export const CloseIconButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
`

export const SearchContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
`

export const SearchInput = styled.input`
  color: ${props => props.color};
  padding: 6px;
  width: 400px;

  @media screen and (max-width: 576px) {
    width: 70%;
  }
`

export const SearchButton = styled.button`
  padding: 4px;
  padding-left: 10px;
  padding-right: 10px;
`

export const HomeVideosContainerList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  width: 82vw;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`

export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`

export const NoSearchResultImage = styled.img`
  margin-top: 40px;
  width: 30%;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const NoSearchResultHeading = styled.h1`
  color: ${props => props.headingColor};
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 20px;
`

export const NoSearchResultText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
`
