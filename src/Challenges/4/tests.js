import { getElementRotationAngle } from '../../testFunctions'
import store from '../../redux'
import { setChallengeProps } from '../../redux/reducers/challengeSpecificProps'
import { addStyle } from '../../redux/reducers/styleReducer'


const tests = () => {
  const lightbult = document.getElementById('lightbulb')
  const upperLeft = document.getElementById('pipe-top-left')
  const upperMiddle = document.getElementById('pipe-top-left')
  const middleLeft = document.getElementById('pipe-middle-left')
  const middleMiddle = document.getElementById('pipe-middle-middle')
  const middleRight = document.getElementById('pipe-middle-right')
  const bottomLeft = document.getElementById('pipe-bottom-left')
  const bottomMiddle = document.getElementById('pipe-bottom-middle')
  const bottomRight = document.getElementById('pipe-bottom-right')
  const upperLeftRotation = getElementRotationAngle(upperMiddle)

  let newProps = {
      lightbulb: false,
      topLeft: false,
      topMiddle: false,
      middleLeft: false,
      middleMiddle: false,
      bottomLeft: false,
      bottomMiddle: false,
      bottomRight: false,
    }
  const progressStyles = ['222222', '333333', '444444', '555555', '666666', '777777']
  let progressIndex = 0

  if (upperLeftRotation === 180 || upperLeftRotation === -180) {
    newProps.topLeft = true
    progressIndex++
    const middleLeftRotation = getElementRotationAngle(middleLeft)
    if (middleLeftRotation === 90 || middleLeftRotation === -90) {
      newProps.middleLeft = true
      progressIndex++
      const bottomLeftRotation = getElementRotationAngle(bottomLeft)
      if (bottomLeftRotation === 0) {
        newProps.bottomLeft = true
        progressIndex++
        const bottomMiddleRotation = getElementRotationAngle(bottomMiddle)
        if (bottomMiddleRotation === 90 || bottomMiddleRotation === -90) {
          newProps.bottomMiddle = true
          progressIndex++
          const bottomRightRotation = getElementRotationAngle(bottomRight)
          if (bottomRightRotation === -90) {
            newProps.bottomRight = true
            progressIndex++
            const middleRightRotation = getElementRotationAngle(middleRight)
            if (middleRightRotation === 90 || middleRightRotation === -90) {
              newProps.middleRight = true
              newProps.lightbulb = true
              store.dispatch(addStyle(`.wrapper-4 {background: #eaf279;
                background: -moz-radial-gradient(center, ellipse cover, #eaf279 17%, #5b5b5b 100%);
                background: -webkit-radial-gradient(center, ellipse cover, #eaf279 17%,#5b5b5b 100%);
                background: radial-gradient(ellipse at center, #eaf279 17%,#5b5b5b 100%);)}`))
              store.dispatch(setChallengeProps(newProps))
              return true;
            }
          }
        }
      }
    }
  }
  store.dispatch(addStyle(`.wrapper-4 {background: linear-gradient( 330deg, black, #${progressStyles[progressIndex]} );}`))
  store.dispatch(setChallengeProps(newProps))
  return false
}

export default [tests]