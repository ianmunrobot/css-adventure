 const parseRuleToReactObject = ruleString => {
  const rule = ruleString.match(/\{[\S\s]+\}/g);
  if (!rule) {
    let err = new Error('invalid rule')
    throw err;
  }
  const declarations = ruleToDeclarationsObject(rule[0].slice(1, -1))
  const selector = kebabToCamelCase(stringToCSSSelector(ruleString));
  return {
    selector,
    declarations,
  }
}

 const stringToCSSSelector = string => {
  if (string[0] === '.') {
    let ruleStart = string.indexOf('{')
    return string.slice(1, ruleStart).trim();
  } else {
    let err = new Error('selector is not a class')
    throw err;
  }
}

 const kebabToCamelCase = selectorString =>
  selectorString.split('-')
    .map((word, index) => {
      if(index > 0 && word.length > 0) {
        word = word[0].toUpperCase() + word.slice(1)
      }
      return word;
    })
    .join('')

 const ruleToDeclarationsObject = ruleString =>
  ruleString.trim()
    .split(';')
    .reduce((accum, curr) => {
      if (curr.indexOf(':') === -1) {
        return accum;
      }
      let splitDeclaration = curr.split(':');
      let prop = kebabToCamelCase(splitDeclaration[0].trim());
      let val = splitDeclaration[1].trim();
      accum[prop] = val;
      return accum;
    }, {})

// test:
// let text = `.box {
//   color: white;
//   box-sizing: border-box;
// }
// `
// console.log(parseRuleToReactObject(text));

