import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'SalvationLayout'

export async function getStaticProps() {
  const SalvationPage = await getFileBySlug('other-pages', ['salvation'])
  return { props: { SalvationPage } }
}

export default function About({ SalvationPage }) {
  const { mdxSource, frontMatter } = SalvationPage

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
