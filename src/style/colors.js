import Color from 'color'
// https://github.com/Qix-/color

export const baseBackground = Color('aliceblue')

// Project Components
export const projectHighlight = baseBackground.darken(0.17)
export const projectBackground = baseBackground.mix(Color('red'), 0.1).desaturate(0.2)
export const headerBackground = Color('lavender')

// Header Flyover Menu
export const menuBackground = projectBackground.lighten(0.05)
export const menuHamburger = Color('salmon')
export const baseFont = Color('#061c3f')

