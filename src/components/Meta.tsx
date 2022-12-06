import Head from 'next/head'
import React from 'react'
interface IProps{
    title:string,
    description:string,
    keywords:string
}
export const Meta = ({title,description,keywords}:IProps) => {
  return (
  
   <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name='description' content={description}/>
    <meta name='keywords' content={keywords}/>
    <meta charSet="utf-8"/>
   </Head>
 
  )
}
///Typing defaultProps
Meta.defaultProps={
    title:'انلاین شاپ',
    description:'خرید اینترنتی محصولات مختلف',
    keywords:'لباس-کفش-شلوار-جوراب'
}