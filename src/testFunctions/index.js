export const runTests = (testArray) => {
  return testArray.reduce((passing, test) => (passing && test()), true)
}

// thanks to http://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom
export const isVisible = (elem) => {
  if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.')
  const style = getComputedStyle(elem)
  if (style.display === 'none') return false
  if (style.visibility !== 'visible') return false
  if (style.opacity < 0.1) return false
  if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
    elem.getBoundingClientRect().width === 0) {
    return false;
  }
  const elemCenter   = {
    x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
    y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
  };
  if (elemCenter.x < 0) return false
  if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false
  if (elemCenter.y < 0) return false
  if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false
  let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y)
  do {
    if (pointContainer === elem) return true
    pointContainer = pointContainer.parentNode
  } while (pointContainer)
  return false
}

export const isVisibleIgnoreNesting = (elem) => {
  if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.')
  const style = getComputedStyle(elem)
  if (style.display === 'none') return false
  if (style.visibility !== 'visible') return false
  if (style.opacity < 0.1) return false
  if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
    elem.getBoundingClientRect().width === 0) {
    return false;
  }
  const elemCenter   = {
    x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
    y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
  };
  if (elemCenter.x < 0) return false
  if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false
  if (elemCenter.y < 0) return false
  if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false
  return true
}

/**
 * Evaluates whether two DOM Elements overlap
 * @param {Element} elem1
 * @param {Element} elem2
 */
export const overlap = (elem1, elem2) => {
  const rect1 = elem1.getBoundingClientRect()
  const rect2 = elem2.getBoundingClientRect()
  return !(
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right
  );
}

export const isOpaque = (elem) => {
  let style = window.getComputedStyle(elem)
  let opacity = style.getPropertyValue('opacity')
  return +opacity > 0
}

/**
 *
 * @param {Element} element
 * @return {Number} angle
 */
export const getElementRotationAngle = element => {
  const style = window.getComputedStyle(element)
  const tr = style.getPropertyValue('-webkit-transform') ||
          style.getPropertyValue('-moz-transform') ||
          style.getPropertyValue('-ms-transform') ||
          style.getPropertyValue('-o-transform') ||
          style.getPropertyValue('transform') ||
          'none'

  // if no transform property, return 0º angle
  if (tr === 'none') {
    return 0
  }

  // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix

  var values = tr.split('(')[1]
      values = values.split(')')[0]
      values = values.split(',')
  const a = values[0]
  const b = values[1]
  const angle = Math.round(Math.atan2(+b, +a) * (180/Math.PI))
  console.log(angle)
  return angle
}