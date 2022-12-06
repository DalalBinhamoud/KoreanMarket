import React, { createContext, useState } from 'react'

import { current } from '../styles/theme'

export const ThemeContext = React.createContext({})

export const ThemeProvider = ({ children }) => {
  //light, dark
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
    console.log(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
