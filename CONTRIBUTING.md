# How to contribute

We're looking for contributions to the robot adventure, especially additional challenges!

## To add a new challenge

Clone/create a branch and create a new folder in the `src/Challenges` folder. This folder should have at least 3 files - `Challenge.js` to export a React component, `tests.js` to export an array of test(s) that should each return `true` once the the challenge is complete, and an `index.js` to import these files and export them in an object with format:

```js
{
  challengeComponent: component,
  prompt: `newline separated string of prompt text`,
  tests: ['array of test functions'],
}

```

You will probably also want to include a `Challenge.css` file that can be required by the main `Challenge` component with challenge-specific styling.

Submit a PR! Open an issue if you want to propose new challenges but can't work on them yourself. Or open an issue to let me know if you're working on something.