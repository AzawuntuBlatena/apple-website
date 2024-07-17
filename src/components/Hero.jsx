import { heroVideo, smallHeroVideo } from '../utils'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useState } from 'react'
import { useEffect } from 'react'
const Hero = () => {
    useGSAP(()=>{
        gsap.to("#hero", {opacity: 1, delay: 1.5})
    },[])

    const[videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        }
        else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect(()=>{
        window.addEventListener("resize", handleVideoSrcSet)
        return () => {
            window.removeEventListener("resize", handleVideoSrcSet)
        }
    },[])

  return (
    <section className='w-full nav-height bg-black relative'>
        <div className='w-full h-5/6 flex-center flex-col '>
            <p id='hero' className='hero-title'>iPhone 15 Pro</p>

            <div className='md:w-10/12 w-9/12'>
                <video className='pointer-events-none'
                autoPlay muted playsInline="true" key={videoSrc}>
                    <source src={videoSrc}/>
                </video>
            </div>
        </div>
    </section>
  )
}

export default Hero