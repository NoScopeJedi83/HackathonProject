import React,{useState} from 'react'
import {Box} from '@mui/material';
import Exercises from '../components/Exercises'
import Hero from '../components/Hero'
import SearchExercises  from '../components/SearchExercises'
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <Hero />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}      
      />
    </Box>
  )
}

export default Home