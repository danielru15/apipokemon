import { FC } from "react"
import Head  from "next/head"
import { Navbar } from "../ui"

interface props {
    title?:string
}
export const Layout: FC<props>= ({children,title}) => {
  return (
    <>
        <Head>
            <title>{title || 'pokemon app'}</title>
            <meta name="author" content="daniel ramirez" />
            <meta name="description" content="informacion pokemon" />
            <meta name="keywords" content="xxxx, pokemon, pokedex" />
        </Head>
        {/* navbar*/}
        <Navbar/>
        <main style={{
          padding:'0 20px'
        }}>
            {children}
        </main>
    </>
  )
}
