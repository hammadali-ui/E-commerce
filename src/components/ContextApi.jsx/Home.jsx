import React from 'react'
import { useContext } from 'react'
import { BioContext } from '.'

function Home() {
    const {myName,myAge} = useContext(BioContext)
  return (
    <div>
      <h1>Hello Context Api . my name is {myName}. and i am {myAge} years old</h1>
    </div>
  )
}

export default Home
