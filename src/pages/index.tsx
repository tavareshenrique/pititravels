import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'

import HomeTemplate from 'templates/Home'

import { HomeProps } from '../@types/pages/Home'

export default function Home({ places }: HomeProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 5,
    props: {
      places
    }
  }
}
