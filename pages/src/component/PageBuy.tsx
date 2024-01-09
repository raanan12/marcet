import React from 'react'
import ListProductBiy from './ListProductBiy'
import Header from './Header'
import PropsClient from './PropsClient'

export default function PageBuy() {
  return (
    <div>
        <Header/>
      <div style={{display:'flex',justifyContent:'space-between',margin:'15px',height:'600px'}}>
        <ListProductBiy />
        <PropsClient />
      </div>
    </div>
  )
}
