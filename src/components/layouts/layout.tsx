import  { ReactElement } from 'react'

export const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
    {/* <Meta/> */}
    <div className='layout'>{children}</div>
    </>
  )
}
