import Image from 'next/image'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { Carousel } from 'react-responsive-carousel'

import { CloseOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
  fileName: string
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} | Pititravels`}
        description={
          place.description?.text ||
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
        }
        canonical="https://pititravels.henriquetavares.com"
        openGraph={{
          url: 'https://pititravels.henriquetavares.com',
          title: `${place.name} - Pititravels`,
          description:
            place.description?.text ||
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />

      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          {place.description && (
            <S.Body
              dangerouslySetInnerHTML={{ __html: place.description.html }}
            />
          )}

          <Carousel>
            {place.gallery.map((image, index) => (
              <S.Gallery key={`${image.fileName}-${index}`}>
                <Image
                  src={image.url}
                  alt={place.name}
                  width={1000}
                  height={1000}
                  quality={75}
                />
              </S.Gallery>
            ))}
          </Carousel>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
