const colors = {
  white: '#fff',
  lightGrey: '#eee',
  darkGrey: '#333',
  red: '#E04D40',
  darkRed: '#ab3a30',
  lightGreen: '#BCE089',
  green: '#6da31f',
  darkGreen: '#89a364',
  yellow: '#FFCB6B',
  black: '#000'
}

const fonts = {
  arial: 'arial',
  roboto: "'Roboto', sans-serif"
}

const spacing = {
  padding: {
    default: 15
  }
}

const breakpoints = {
  desktopUp: `(min-width: 1020px)`,
  desktopDown: `(max-width: 1020px)`,
  tabletUp: `(min-width: 720px)`,
  tabletDown: `(max-width: 720px)`,
  mobileUp: `(min-width: 420px)`,
  mobileDown: `(max-width: 420px)`
}

export const constants = {
  headerHeight: 80,
  footerHeight: 60
}

export const appTheme = {
  colors: {
    ...colors
  },
  fonts: {
    ...fonts
  },
  spacing: {
    ...spacing
  },
  breakpoints: {
    ...breakpoints
  },
  borders: {
    default: `1px solid ${colors.lightGrey}`,
    dark: `1px solid ${colors.darkGrey}`
  }
}
