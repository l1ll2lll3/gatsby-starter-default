import * as React from "react"
import PropTypes from "prop-types"
import { Link, withPrefix } from "gatsby"
import { Helmet } from "react-helmet"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Helmet>
    <script src={withPrefix('bmr.js')} type="text/javascript"></script>
    <script src={withPrefix('plugins/rt.js')} type="text/javascript"></script>
    <script src={withPrefix('plugins/navtiming.js')} type="text/javascript"></script>
    <script src={withPrefix('plugins/auto-xhr.js')} type="text/javascript"></script>
    <script src={withPrefix('plugins/spa.js')} type="text/javascript"></script>
    <script src={withPrefix('plugins/history.js')} type="text/javascript"></script>
    <script src={withPrefix('script.js')} type="text/javascript"></script>
   
    </Helmet>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
