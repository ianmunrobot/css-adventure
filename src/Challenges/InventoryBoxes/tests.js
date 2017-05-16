import { isVisibleIgnoreNesting } from '../../testFunctions'
import store from '../../redux'
import { addChallengeText } from '../../redux/reducers/challengeTextReducer'

const inventoryTest = () => {
  let passing = true

  // don't hide the robot!
  if (!isVisibleIgnoreNesting(document.getElementById('robot-2'))) {
    store.dispatch(addChallengeText(`No!!!! what have you done?! Bring me back!`))
    // Rather than keeping track of the passing Bool, we just return false here
    // Because why would you hide our poor robot friend?!?
    return false
  }

  const inventoryListItems = Array.from(document.querySelectorAll('.inventory-li'))

  for (var i = 0; i < inventoryListItems.length; i++) {
    const style = window.getComputedStyle(inventoryListItems[i])
    // assert that the list has no bullets

    if (style.listStyleType !== 'none' || style.listStyleImage !== 'none' || style.borderColor !== 'rgb(198, 198, 198)' || style.backgroundColor !== 'rgb(0, 0, 0)') {
      passing = false;
    }
  }

  const topLeft = inventoryListItems[0].getBoundingClientRect()
  const topMiddle = inventoryListItems[1].getBoundingClientRect()
  const topRight = inventoryListItems[2].getBoundingClientRect()
  const middleLeft = inventoryListItems[3].getBoundingClientRect()
  const middleMiddle = inventoryListItems[4].getBoundingClientRect()
  const middleRight = inventoryListItems[5].getBoundingClientRect()
  const bottomLeft = inventoryListItems[6].getBoundingClientRect()

  // determine if the inventory is displaying as a grid
  let correctLayout =
    topLeft.top === topMiddle.top &&
    topLeft.right === topMiddle.left &&
    topMiddle.top === topRight.top &&
    topMiddle.right === topRight.left &&
    topLeft.bottom === middleLeft.top &&
    topMiddle.bottom === middleMiddle.top &&
    topRight.bottom === middleRight.top &&
    middleLeft.right === middleMiddle.left &&
    middleMiddle.right === middleRight.left &&
    middleLeft.bottom === bottomLeft.top

  // See if the overall spec is passing
  passing = passing && correctLayout

  if (!passing && correctLayout) {
    store.dispatch(addChallengeText(`Great - the grid layout is looking pretty good, but we still need to fix some of the styling errors`))
  }
  return passing;
}

export default [inventoryTest];