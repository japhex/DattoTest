import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import routes from './routes'

import { appTheme } from 'global/themes/appTheme'
import { GlobalStyle } from 'global/styles'

import { FilmsProvider } from './context/films'

import { Layout } from 'global/components/layout'
import { Header } from 'global/components/header'
import { Footer } from 'global/components/footer'
import { ContentArea } from 'global/components/contentArea'
import { Navigation } from 'components/navigation'
import useMediaQuery from './hooks/useMediaQuery'

export default App => {
  const isDesktop = useMediaQuery(appTheme.breakpoints.desktopUp)

  return (
    <FilmsProvider>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <Layout>
          <Router>
            <Header />
            <ContentArea>
              {isDesktop && <Navigation />}
              {routes}
            </ContentArea>
            <Footer />
          </Router>
        </Layout>
      </ThemeProvider>
    </FilmsProvider>
  )
}
