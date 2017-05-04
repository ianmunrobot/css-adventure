import { isVisible, overlap, isOpaque } from '../../testFunctions'

const challengeOneTest = () => {
  let element = document.getElementById('stuckFriend')
  let isOverlapping = overlap(element, document.getElementById('box-left')) || overlap(element, document.getElementById('box-right'))
  // console.log('overlap?', isOverlapping);
  let opacity = isOpaque(document.getElementById('box-left')) && isOpaque(document.getElementById('box-right'))
  let visible = isVisible(element)
  if (!isOverlapping && visible) {
    console.log('You saved me!')
  } else if (!opacity) {
    console.log('even transparent blocks can keep me stuck, please move items to free me!')
  } else {
    console.log('overlap?', isOverlapping, '\nvisible?', visible, '\nopaque?', opacity)
    console.log('not found')
  }
}

export default [challengeOneTest]