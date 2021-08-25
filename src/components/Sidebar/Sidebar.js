import React from 'react';
import Link from 'next/link';
import { SidebarDiv, SidebarButton } from './SidebarStyles';

const handleScroll = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'})
}

const Sidebar = () =>  
(
    <SidebarDiv>
        <SidebarButton onClick={()=>handleScroll()} />
      <Link href="#projects">
        <SidebarButton />
      </Link>
      <Link href="#tech">
        <SidebarButton />
      </Link>
      <Link href="#about">
        <SidebarButton />
      </Link>
      <Link href="#certifications">
        <SidebarButton />
      </Link>
    </SidebarDiv>
)


export default Sidebar;