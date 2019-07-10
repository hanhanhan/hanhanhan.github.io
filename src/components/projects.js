import React from 'react'

// const sampleProject = {
//     name: ``,
//     link: ``,
//     description: <></>,
//     language: ``,
//     year: ``,
// }

const fakebus = {
  name: `Fakebus`,
  link: `https://hanhanhan.github.io/fake_bus_client/`,
  description: (
    <>
      <p>
        A simple mockup of a mobile-friendly bus scheduler. There's a vanilla
        javascript client using websockets, and bundled with webpack. It
        consumes an <a href="https://github.com/hanhanhan/fake_bus_api">API</a>{' '}
        I built with Flask.
      </p>
    </>
  ),
  language: [`javascript`, `python`],
  year: `2017`,
}

const deliquescent = {
  name: `Deliquescent`,
  link: `https://hanhanhan.github.io/deliquescent/`,
  description: (
    <>
      <p>Click and drag. Not mobile touch friendly.</p>
      <p>
        A variation on{' '}
        <a href="http://codepen.io/tmrDevelops/full/OPZKNd">
          {' '}
          Tiffany Rayside's Deliquescent
        </a>
        . I completely{' '}
        <a
          href="https://github.com/hanhanhan/deliquescent/compare/c20c1ea3527cf9fe319b82a66f5b6364f9a79b39...746a75367c95ef37545e0c9444499d5e4f9403e2?diff=unified&name=746a75367c95ef37545e0c9444499d5e4f9403e2"
          title="github comparison"
        >
          refactored
        </a>{' '}
        her code as a learning exercise, and made color a function of
        displacement.
      </p>
      <p>
        I also did a{' '}
        <a
          href="https://codepen.io/hanhanhan/post/dissecting-deliquescent"
          title="Dissecting Deliquescent"
        >
          post explaining the math
        </a>{' '}
        behind the motion.
      </p>
    </>
  ),
  language: [`javascript`],
  year: `2016`,
}

const rattle = {
  name: `Rattle`,
  link: `https://hanhanhan.github.io/rattle/`,
  description: (
    <>
      <p>Click and drag the beads. Not mobile touch friendly.</p>
      <p>
        I started by looking at this{' '}
        <a href="https://codepen.io/dissimulate/pen/eZxEBO">Tearable Cloth</a>{' '}
        example, made it 1D, did not make it tearable, and changed the
        constraints. So really, it's terrible cloth.
      </p>
    </>
  ),
  language: [`javascript`],
  year: `2016`,
}

const cellular = {
  name: `1D Cellular Automata`,
  link: `https://hanhanhan.github.io/cellular_automata_1d/`,
  description: (
    <>
      <p>My first javascript program.</p>
      <p>
        Choose your ruleset, click tiles to flip their value, and see what
        happens next. Daniel Shiffman's wonderful{' '}
        <a href="http://natureofcode.com/book/chapter-7-cellular-automata/">
          Nature of Code
        </a>{' '}
        was my starting point. The first javascript toy I built.
      </p>
    </>
  ),
  language: [`javascript`],
  year: `2015`,
}

const flyaway = {
  name: `Flyaway`,
  link: `https://hanhanhan.github.io/flyaway/`,
  description: (
    <>
      <p>
        The fly has a happy, random flight path until needs to evade your mouse
        at 90&#176; angles. Inspired by (and sprites adapted from){' '}
        <a href="http://dx.doi.org/10.1126/science.1248955">research</a>{' '}
        described in{' '}
        <a href="http://voices.nationalgeographic.com/2014/04/10/insects-fruit-flies-science-flight-animals/">
          National Geographic
        </a>
        .
      </p>
    </>
  ),
  language: [`javascript`],
  year: `2015`,
}

const pinkwater = {
  name: `Pinkwater Scrape`,
  link: `https://github.com/hanhanhan/pinkwater/blob/master/pinkwater_mp3_scrape.py`,
  description: (
    <>
      <p>My first Python program.</p>
      <p>
        Children's author{' '}
        <a href="http://pinkwater.com/podcast/">Daniel Pinkwater</a> posted
        chapter-by-chapter audiobooks of him reading his classics like{' '}
        <u>Borgel</u>, <u>Lizard Music</u>, and <u>Fat Men from Outer Space</u>{' '}
        free -- donation encouraged.
      </p>
      <p>
        It's just awkward to click through the site and download each file
        individually. This script gets, organizes, and labels the files so your
        mp3 player will see author, title, and genre.
      </p>
    </>
  ),
  language: [`python`],
  year: `2015`,
}

const bokeh = {
  name: `Metabolism Plot`,
  link: `http://bokeh.hanhanhan.org/metabolism`,
  description: (
    <>
      <p>Trying out bokeh.</p>
      <p>
        Resting metabolism rate plotted using a user-selected equation and
        parameters. Parameters are equation-dependent. Playing with the Bokeh
        library for data visualization. 
      </p>
    </>
  ),
  language: [`python`],
  year: `2016`,
}

const robotrkelly = {
  name: `Robot R Kelly`,
  link: ``,
  description: (
    <>
      <p>
        My first server based site. It included a Flask site, database, a server
        I set up on Digital Ocean, HTTPS, nginx, changing around some systemd
        settings, and a cron job. 
      </p>
      <p>
        Inspired by a challenge from{' '}
        <a
          href="https://www.youtube.com/watch?v=20EfiLHG9aY&t=54s"
          title="Ian Pfaff"
        >
          {' '}
          this robotics engineer
        </a>
        , Daniel Schiffman's{' '}
        <a href="http://shiffman.net/a2z/markov/" title="Schiffman">
          explanation of Markov chains
        </a>
        , and enabled by the beautiful{' '}
        <a href="https://github.com/jsvine/markovify" title="Markovify">
          Markovify
        </a>{' '}
        library.
      </p>
      <p>
        He's on{' '}
        <a href="https://twitter.com/robot_rkelly" title="twitterbot">
          Twitter
        </a>{' '}
        too.
      </p>
    </>
  ),
  language: [`python`],
  year: `2016`,
}

const projects = [
  fakebus,
  deliquescent,
  cellular,
  rattle,
  flyaway,
  pinkwater,
  bokeh,
  robotrkelly,
]

export { projects }
