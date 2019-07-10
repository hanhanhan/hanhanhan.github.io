// https://github.com/Qix-/color
import Color from 'color'

export const baseBackground = Color('aliceblue')

// Project Components
export const projectBackground = baseBackground.saturate(0.3).darken(0.02)
export const projectHighlight = projectBackground.saturate(0.3).darken(0.02)
export const headerBackground = Color('lavender')
export const baseFont = Color('#333333')

// Header Flyover Menu
export const menuBackground = Color('aliceblue')
export const headerFont = baseFont.darken(0.7)
export const menuHamburger = headerFont
