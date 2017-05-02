import React from 'react'
import { connect } from 'react-redux'
import allChallenges from './index'

const Challenges = ({currentChallenge}) => {
  const Chal = allChallenges[`Challenge${currentChallenge}`]
  return (
    <Chal />
  )
}

const mapState = ({challenge}) => ({
  currentChallenge: challenge
})

export default connect(mapState)(Challenges)