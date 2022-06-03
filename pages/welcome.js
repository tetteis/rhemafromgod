import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Welcome() {
  return (
    <>
      <PageSEO title={`Welcome - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Welcome
          </h1>
          <h2 className="text-lg leading-7 text-gray-500 dark:text-gray-400">Jesus love you.</h2>
        </div>
        <div className="container py-12">
          <p>Hey! 👋</p>

          <p>
            You're most welcome to my blog. I developed it purposely to reach out to "lost souls"
            and to help Christians grow in faith and increase in the knowledge of God's Word.
            Whether you are a Christian or a seeker, you will find resources here to help you.
          </p>

          <p>
            God's Word is the foundation for our spiritual growth and development. And He has made
            It accessible to us in diverse formats. He's faithful indeed! The Apostle Paul through
            the Holy Spirit admonishes us to be filled with the Spirit (Ephesians 5:18). It's God's
            perfect will for us to reign and live above the world's system of life. He wants us to
            break out the status quo! The Lord says His children perish not because they’re not born
            again; they perish because they lack knowledge (Hosea 4:6).
          </p>

          <p>
            The message I share with you have deep understanding into the mystery of Christ. This
            mystery was never disclosed to human beings in past generations as it has now been
            revealed to God's children. This is in accordance with the terms of the eternal and
            timeless purpose which God has realized and carried into effect in the person of Christ
            Jesus our Lord, in Whom, because of our faith in Him, we dare to have the boldness
            (courage and confidence) of free access (an unreserved approach to God with freedom and
            without fear).
          </p>

          <p>
            While here, I encourage you to make the best use of this site. Subscribe to the feed, so
            you will be guided on receiving a "ping" every time there's something new on this site.
            Most people don't know about that, but try it out, it's a great service! You can also
            subscribe to this site via e-mail to be notified when new messages get published. And
            please do not be afraid subscribing because I respect your privacy and will never get
            you spammed! Unless otherwise stated, all scriptures are taken from the King James
            Version (KJV) of the Bible.
          </p>

          <p>
            Read the messages over and over until you're so filled with them. I love these words
            from the great man of faith, Smith Wigglesworth:
          </p>

          <blockquote>
            Fill your head and your heart with the Scriptures... As you do this, you are sewing
            seeds that the Spirit of God can germinate... You must be so soaked with the Word of
            God, you must be so filled with it, that you yourself are a living epistle, known and
            read of all men. Believers are strong only as the Word of God abides in them. The Word
            of God is Spirit and life to those who receive it in simple faith... Know your Book,
            live it, believe it and obey it... If a thing is in the Bible it is so; it is not even
            to be prayed about; it is to be received and acted upon. Inactivity of faith is a robber
            which steals blessing.
          </blockquote>

          <p>
            If you have a question, suggestion or prayer request kindly contact me through the form,
            and I will be glad to get back to you!
          </p>

          <p>God Bless You!</p>
        </div>
      </div>
    </>
  )
}
