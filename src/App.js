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

export default App => (
  <FilmsProvider>
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <Layout>
        <Header />
        <ContentArea>
          <Router>
            <Navigation />
            {routes}
          </Router>
        </ContentArea>
        <Footer />
      </Layout>
    </ThemeProvider>
  </FilmsProvider>
)
