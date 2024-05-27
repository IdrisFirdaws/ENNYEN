import React from 'react'
import SubHero from '../components/home/SubHero'
import Hero from '../components/home/Hero'
import SectionOne from '../components/home/SectionOne'
import SEctionTwo from '../components/home/SEctionTwo'
import SectionThree from '../components/home/SectionThree'
import SectionFour from '../components/home/SectionFour'
import SectionFive from '../components/home/SectionFive'
import SectionSix from '../components/home/SectionSix'
import SectionSeven from '../components/home/SectionSeven'
import SectionEight from '../components/home/SectionEight'
import Regions from '../components/home/Regions'

export default function Home() {
    return (
        <div className='home'>

            <Hero />
            <SubHero />
            <SectionOne />
            <SEctionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <Regions />
        </div>
    )
}
