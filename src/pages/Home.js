import React,{useState} from 'react'
import {Box} from '@mui/material';
import Exercises from '../components/Exercises'
import Hero from '../components/Hero'
import SearchExercises  from '../components/SearchExercises'
const Home = () => {
  return (
    <Box>
      <Hero/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home