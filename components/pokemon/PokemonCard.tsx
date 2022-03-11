import { FC } from "react";
import { Card, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";

interface props {
    pokemon:SmallPokemon
}

export const PokemonCard:FC<props> = ({pokemon}) => {
    const router = useRouter()
    const click = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }
  return (
    <Card hoverable clickable onClick={click}>
                <Card.Body css={{ p: 1}}>
                  <Card.Image 
                    src={pokemon.img}
                    width='100%'
                    height={140}
                  />
                </Card.Body>
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text>#{pokemon.id}</Text>
                    <Text transform='capitalize'>{pokemon.name}</Text>
                  </Row>
                </Card.Footer>
            </Card>
  )
}
