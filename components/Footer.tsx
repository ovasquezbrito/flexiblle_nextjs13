import { footerLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type ColumnProps = {
  title: string;
  links: Array<string>;
}
const FooterColumn = ({title, links}:ColumnProps) => (
  <div className='footer_column'>
    <h4 className='font-semibold'>Title</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
    </ul>
  </div>
)
const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
          <Image 
            src="/logo-purple.svg"
            width={115}
            height={38}
            alt='Flexible'
          />
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>
            Flexible es la comunidad líder mundial para que los creativos compartan, crezcan y sean contratados
          </p>
        </div>
        <div className='flex flex-wrap gap-12'>
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>
          <div className='flex-1 flex flex-col gap-4'>
          <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}/>
          <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}/>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer