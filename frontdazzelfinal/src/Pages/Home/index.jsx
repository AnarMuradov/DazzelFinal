import React from 'react'
import DownloadSection from '../../Components/HomeSections/DownloadSection'
import FetchSection from '../../Components/HomeSections/FetchSection'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>
        Home
      </title>
    </Helmet>
    <main>
      <DownloadSection/>
      <FetchSection/>
    </main>
    </>
  )
}

export default Home