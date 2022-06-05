import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'WelcomeLayout'

export async function getStaticProps() {
  const WelcomePage = await getFileBySlug('other-pages', ['welcome'])
  return { props: { WelcomePage } }
}

export default function About({ WelcomePage }) {
  const { mdxSource, frontMatter } = WelcomePage

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
