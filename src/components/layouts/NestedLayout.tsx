import  { ReactElement } from 'react'

export const NestedLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
    {/* <Meta/> */}
    <div className='nested_layout'>{children}</div>
    </>
  )
}
