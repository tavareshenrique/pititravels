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
        title="Pititravels | Home"
        description="Mapa das viagens entre a minha pitica e eu."
        canonical="https://pititravels.henriquetavares.com"
        openGraph={{
          url: 'https://pititravels.henriquetavares.com',
          title: 'Pititravels',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://pititravels.henriquetavares.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Pititravels'
            }
          ],
          site_name: 'Pititravels'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
