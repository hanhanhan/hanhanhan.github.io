import Color from 'color'
// https://github.com/Qix-/color#color-

const baseBackground = Color('aliceblue')
const projectHighlight = baseBackground.lighten(0.02)
const projectYear = projectHighlight.desaturate(0.3)

export { baseBackground, projectHighlight }