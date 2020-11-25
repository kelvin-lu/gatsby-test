// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout' was resolved to '/Us... Remove this comment to see the full error message
import Layout from "../components/layout"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/seo' was resolved to '/Users... Remove this comment to see the full error message
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Layout>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <SEO title="Using TypeScript" />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <h1>Gatsby supports TypeScript by default!</h1>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <p>This means that you can create and write <em>.ts/.tsx</em> files for your pages, components etc. Please note that the <em>gatsby-*.js</em> files (like gatsby-node.js) currently don't support TypeScript yet.</p>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <p>For type checking you'll want to install <em>typescript</em> via npm and run <em>tsc --init</em> to create a <em>.tsconfig</em> file.</p>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <p>You're currently on the page "{path}" which was built on {data.site.buildTime}.</p>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <p>To learn more, head over to our <a href="https://www.gatsbyjs.com/docs/typescript/">documentation about TypeScript</a>.</p>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
