import React,{useContext} from 'react'
import { AllData } from '../contextApi'
import Header from './Header'
import PropsUser from './PropsUser'
import Order from './Order'
import { Box } from '@mui/material';


export default function PageUser() {
  const AllData1 = useContext(AllData)
  return (
      <div>
          <Header />
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px', height: '600px' }}>
              <div className='productBuy'>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontSize: '18px', color: 'gray', fontWeight: 'bold'}}>totul number order {AllData1?.userConect.arrOrder.length}</p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '8px' }}>
                          <p style={{ fontSize: '18px', color: 'gray', fontWeight: 'bold' }}>order number</p>
                      </div>
                      <p style={{ fontSize: '18px', color: 'gray', fontWeight: 'bold', marginLeft: '160px' }}>Amount</p>
                      <p style={{ fontSize: '18px', color: 'gray', fontWeight: 'bold', marginLeft: '230px' }}> price</p>
                  </div>
                  <Box
                      sx={{
                          flexWrap: 'wrap',
                          overflowY: 'scroll',
                          height: '400px',
                          '&::-webkit-scrollbar': {
                              width: '8px',
                              height: '20px'
                          },
                          '&::-webkit-scrollbar-thumb': {
                              backgroundColor: '#888',
                              borderRadius: '4px'
                          },

                      }}
                  >
                      {
                          AllData1?.userConect.arrOrder.map((val: any, ind) => {
                              let cunt = 0
                              val.listProduct.forEach((val: any) => {
                                  cunt += val.cunt
                              })
                              return <Order val={val} cunt={cunt} ind={++ind} />
                          })
                      }
                  </Box>

              </div>
              <PropsUser />
          </div>
      </div>
  )
}
