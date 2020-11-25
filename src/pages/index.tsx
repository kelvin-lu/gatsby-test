import React from "react"
import { Link } from "gatsby"

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout' was resolved to '/Us... Remove this comment to see the full error message
import Layout from "../components/layout"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/image' was resolved to '/Use... Remove this comment to see the full error message
import Image from "../components/image"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/seo' was resolved to '/Users... Remove this comment to see the full error message
import SEO from "../components/seo"

const IndexPage = () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Layout>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <SEO title="Home" />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <h1>Hi people</h1>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <p>Welcome to your new Gatsby site.</p>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <p>Now go build something great.</p>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Image />
    </div>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Link to="/page-2/">Go to page 2</Link> <br />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
