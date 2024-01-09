import React from 'react'
import Header from './Header'
import ListProduct from './ListProduct'

export default function MainPage() {
  return (
    <div>
        <Header show={true}/>
        <ListProduct/>
    </div>
  )
}
