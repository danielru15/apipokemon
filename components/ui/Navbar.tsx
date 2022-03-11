import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from 'next/link'

export const Navbar = () => {
    const {theme} = useTheme()
  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding: '0 20px',
        backgroundColor:theme?.colors.gray900.value

    }}>
        <Image
            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"}
            alt="icono"
            width={70}
            height={70}
        />
       <NextLink href='/' passHref>
         <Link>
            <Text>Pokemon</Text>
         </Link>
       </NextLink>
       <Spacer css={{flex:1}}/>
       <NextLink href='/favorites' passHref>
         <Link>
            <Text>Favoritos</Text>
         </Link>
       </NextLink>
       
    </div>
  )
}
