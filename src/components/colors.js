import Color from 'color'
// https://github.com/Qix-/color#color-

const baseBackground = Color('aliceblue')
const projectHighlight = baseBackground.darken(0.1).saturate(0.1)
const projectYear = projectHighlight.desaturate(0.3)

export { baseBackground, projectHighlight }