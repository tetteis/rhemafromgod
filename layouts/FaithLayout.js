import { PageSEO } from '@/components/SEO'

export default function FaithLayout({ children, frontMatter }) {
  const { name } = frontMatter

  return (
    <>
      <PageSEO
        title={`Statement of Faith - ${name}`}
        description={`Statement of Faith - ${name}`}
      />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Statement of Faith
          </h1>
        </div>
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
      </div>
    </>
  )
}
