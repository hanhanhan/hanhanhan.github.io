import Color from 'color'
// https://github.com/Qix-/color#color-

const baseBackground = Color('aliceblue')
const projectHighlight = baseBackground.darken(0.17)
const baseFont = Color('#061c3f')

export { baseBackground, projectHighlight, baseFont, Color }
