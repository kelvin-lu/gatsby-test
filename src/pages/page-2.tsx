import React from "react"
import { Link } from "gatsby"

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout' was resolved to '/Us... Remove this comment to see the full error message
import Layout from "../components/layout"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/seo' was resolved to '/Users... Remove this comment to see the full error message
import SEO from "../components/seo"

const SecondPage = () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Layout>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <SEO title="Page two" />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <h1>Hi from the second page</h1>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <p>Welcome to page 2</p>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
