import { isOpaque, isVisibleIgnoreNesting } from '../../testFunctions'
import store from '../../redux'
import { addChallengeText } from '../../redux/reducers/challengeTextReducer'

const challengeThreeTest = () => {
  let hackChecks = [
    document.getElementById('hack1'),
    document.getElementById('hack2'),
    document.getElementById('hack3'),
    document.getElementById('hack4'),
  ]

  let passing = hackChecks.filter(element => {
    return !isVisibleIgnoreNesting(element) || !isOpaque(element)
  })

  if (passing.length === 4) {
    store.dispatch(addChallengeText(`Whew!`))
  } else if (passing.length > 2) {
    store.dispatch(addChallengeText(`We're getting there! keep going...`))
  }
  // don't hide the robot!
  if (!isVisibleIgnoreNesting(document.getElementById('robot'))) {
    store.dispatch(addChallengeText(`No!!!! what have you done?! Bring me back!`))
  }

}

export default [challengeThreeTest]