import React from "react"

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout' was resolved to '/Us... Remove this comment to see the full error message
import Layout from "../components/layout"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/seo' was resolved to '/Users... Remove this comment to see the full error message
import SEO from "../components/seo"

const NotFoundPage = () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Layout>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <SEO title="404: Not found" />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <h1>404: Not Found</h1>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
