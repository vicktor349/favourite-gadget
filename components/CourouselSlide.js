import React from 'react'
import Image from 'next/image'
import { Carousel } from '@mantine/carousel';
import earphone from '../public/Images/Courousel Mini Slider/earphone.jpg'
import laptop from '../public/Images/Courousel Mini Slider/laptop.jpg'
import phone from '../public/Images/Courousel Mini Slider/phone.jpg'
import playstation from '../public/Images/Courousel Mini Slider/playstation.jpg'
import smartwatch from '../public/Images/Courousel Mini Slider/smartwatch.jpg'
import speaker from '../public/Images/Courousel Mini Slider/speaker.jpg'

const CourouselSlide = () => {
    return (
        <div>
            <Carousel
                height={120}
                slideSize="20%"
                slideGap="lg"
                speed={4}
                loop
                align="start"
            >
                <Carousel.Slide><Image src={earphone} /></Carousel.Slide>
                <Carousel.Slide><Image src={laptop} /></Carousel.Slide>
                <Carousel.Slide><Image src={phone} /></Carousel.Slide>
                <Carousel.Slide><Image src={playstation} /></Carousel.Slide>
                <Carousel.Slide><Image src={smartwatch} /></Carousel.Slide>
                <Carousel.Slide><Image src={speaker} /></Carousel.Slide>
            </Carousel>
        </div>
    )
}

export default CourouselSlide