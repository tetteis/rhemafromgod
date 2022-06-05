import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'FaithLayout'

export async function getStaticProps() {
  const faithPage = await getFileBySlug('other-pages', ['faith'])
  return { props: { faithPage } }
}

export default function About({ faithPage }) {
  const { mdxSource, frontMatter } = faithPage

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
