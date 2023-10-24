import React, { useEffect } from 'react'
import BackgroundImg from '../components/BackgroundImg'
import TrendingSection from '../components/TrendingSection';
import PopularSection from '../components/PopularSection';
import TopRatedSection from '../components/TopRatedSection';

const HomePage = () => {


  return (
    <>
      <BackgroundImg/>
      <TrendingSection/>
      <PopularSection/>
      <TopRatedSection/>
    </>
  )
}

export default HomePage