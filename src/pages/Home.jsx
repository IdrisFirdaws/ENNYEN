import React from 'react'
import Topbar from '../components/header/Topbar'
import SubHero from '../components/home/SubHero'
import Hero from '../components/home/Hero'
import SectionOne from '../components/home/SectionOne'
import SEctionTwo from '../components/home/SEctionTwo'
import SectionThree from '../components/home/SectionThree'
import SectionFour from '../components/home/SectionFour'
import Navbar from '../components/header/Navbar'

export default function Home() {
    return (
        <div className='home'>
            <Topbar />
            <Navbar />
            <main>
                <Hero />
                <SubHero />
                <SectionOne />
                <SEctionTwo />
                <SectionThree />
                <SectionFour />
            </main>
        </div>
    )
}
