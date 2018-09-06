import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './prof-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Marcel Kooi`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            height: rhythm(3),
          }}
        />
        <p>
        </p>
      </div>
    )
  }
}

export default Bio
