import  { ReactElement } from 'react'
import { Meta } from '../Meta'

export const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
    <Meta title='صفحه نخست'/>
    <div className='layout'>{children}</div>
    </>
  )
}
