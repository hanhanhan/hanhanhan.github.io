import { css } from '@emotion/core'
import { menuHamburger, baseFont, menuBackground } from './colors'


export const nav = css`
  padding-top: 0em;
  margin: 0;
`

export const menuToggle = css`
 /*
  * modified from Erik Terwan
  * 24th of November 2015
  * MIT License
  * and 
  * https://css-tricks.com/responsive-menu-concepts/
  *
  * If you are thinking of using this in
  * production code, beware of the browser
  * prefixes.
  */

  display: block;
  position: relative;
  z-index: 1;

  -webkit-user-select: none;
  user-select: none;


  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

/*
 * Just a quick hamburger
 */
  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: ${menuHamburger.toString()};
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

/*
 * But let's hide the middle one.
 */
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

/*
 * Ohyeah and the last one should go the other direction
 */
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  /*
 * Make this absolute positioned
 * at the top right of the screen
 */
  ul {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    margin: 0px;
    padding: 2em 0em 2em 2em;
    background: ${menuBackground.toString()};
    list-style-type: none;
    /* to stop flickering of text in safari */
    -webkit-font-smoothing: antialiased;

    transform-origin: 0% 0%;
    transform: translate(200%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    @media screen and (min-width: 500px) {
      width: auto;
      padding: 2em 6em 2em 2em;
    }
  }

  li {
    margin: 1em;
    margin-left: 2em;
    font-size: 22px;
  }

 /*
  * Slide on screen when checked
  */
  input:checked ~ ul {
    transform: none;
  }
`
