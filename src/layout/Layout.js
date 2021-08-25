import React from 'react'
import Link from 'next/link';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {

  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
