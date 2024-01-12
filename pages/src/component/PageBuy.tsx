import React from 'react'
import ListProductBiy from './ListProductBiy'
import Header from './Header'
import PropsClient from './PropsClient'
import './styls/pageBuy.css'

export default function PageBuy() {
  return (
    <div>
        <Header/>
      <div className='main2' >
        <ListProductBiy />
        <PropsClient />
      </div>
    </div>
  )
}
