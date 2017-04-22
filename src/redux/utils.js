export const stringToCSSSelector = string => {
  if (string[0] === '.') {
    const ruleStart = string.indexOf('{')
    return string.slice(1, ruleStart).trim();
  } else {
    const err = new Error('selector is not a class')
    throw err;
  }
}

export const kebabToCamelCase = selectorString =>
  selectorString.split('-')
    .map((word, index) => {
      if(index > 0 && word.length > 0) {
        word = word[0].toUpperCase() + word.slice(1)
      }
      return word;
    })
    .join('')

export const ruleToDeclarationsObject = ruleString =>
  ruleString.trim()
    .split(';')
    .reduce((accum, curr) => {
      if (curr.indexOf(':') === -1) {
        return accum;
      }
      const splitDeclaration = curr.split(':');
      const prop = kebabToCamelCase(splitDeclaration[0].trim());
      const val = splitDeclaration[1].trim();
      accum[prop] = val;
      return accum;
    }, {})

export const parseRuleToReactObject = ruleString => {
  const rule = ruleString.match(/\{[\S\s]+\}/g);
  if (!rule) {
    const err = new Error('invalid rule')
    throw err;
  }
  const declarations = ruleToDeclarationsObject(rule[0].slice(1, -1))
  const selector = kebabToCamelCase(stringToCSSSelector(ruleString));
  return {
    selector,
    declarations,
  }
}

// test:
// let text = `.box {
//   color: white;
//   box-sizing: border-box;
// }
// `
// console.log(parseRuleToReactObject(text));

