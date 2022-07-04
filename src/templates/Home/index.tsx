import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

import { InfoOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'

import { HomeTemplateProps } from './@types'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: HomeTemplateProps) {
  return (
    <>
      <NextSeo
        title="My Trips | Home"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://pititravels.henriquetavares.com"
        openGraph={{
          url: 'https://pititravels.henriquetavares.com',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://pititravels.henriquetavares.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
