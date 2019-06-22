import Color from 'color'
// https://github.com/Qix-/color

const baseBackground = Color('aliceblue')
const projectHighlight = baseBackground.darken(0.17)
const projectBackground = baseBackground.mix(Color('red'), 0.1).desaturate(0.2)
const baseFont = Color('#061c3f')

export { baseBackground, projectBackground, projectHighlight, baseFont, Color }
