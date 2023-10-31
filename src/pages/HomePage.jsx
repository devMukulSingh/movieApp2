import React, { useEffect } from 'react'
import BackgroundImg from '../components/home/BackgroundImg';
import TrendingSection from '../components/home/TrendingSection';
import PopularSection from '../components/home/PopularSection';
import TopRatedSection from '../components/home/TopRatedSection';

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