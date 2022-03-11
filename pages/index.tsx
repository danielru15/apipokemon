import { Grid } from '@nextui-org/react';
import { NextPage , GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';


interface props {
  pokemon: SmallPokemon[]
}
const Home: NextPage<props> = ({pokemon}) => {
  console.log(pokemon)
  return (
    <Layout title='Listado de pokemons'>
      <h1>Pokemones</h1>
      <Grid.Container gap={2} justify='flex-start'>
      {
        pokemon.map(pokemon => (
          <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <PokemonCard
              pokemon={pokemon}
            />
            
          </Grid>
        ))
      }
      </Grid.Container>
    </Layout>
  )
}
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
   const pokemon: SmallPokemon[] = data.results.map((poke, i)=> (
     {
       ...poke,
       id: i + 1,
       img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
     }
   ))
   return {
    props: {
      pokemon
    }
  }
}
export default Home
