import { RefTagger } from 'react-reftagger'

// const customStyle = {
//   heading: {
//     backgroundColor: '#171717',
//     color: '#d4d4d4',
//   },
//   body: {
//     color: '#d4d4d4',
//   },
// }

const refTaggerSettings = {
  settings: {
    bibleVersion: 'NKJV',
    tooltipStyle: 'dark',
    customStyle: {
      heading: {
        backgroundColor: '#171717',
        color: '#d4d4d4',
      },
      body: {
        color: '#d4d4d4',
      },
    },
  },
}

export default function FaithlifeRefTagger() {
  return <RefTagger RefTaggerSettings={refTaggerSettings} />
}
