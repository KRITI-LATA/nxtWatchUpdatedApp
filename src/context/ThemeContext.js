import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  onToggleTheme: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  savedVideos: [],
  addVideos: () => {},
})
export default ThemeContext
