// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import "./sticky.css"

const Footer = () => (
  <footer
    style={{
      background: `#0c9344`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.35rem 0.35rem`,
      }}
    >
      <a
        href="https://gtbs.se"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        © {new Date().getFullYear()}, Built by GTBS App Development
      </a>
    </div>
  </footer>
)

export default Footer
