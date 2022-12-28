import React from 'react'
import { Carousel } from '@mantine/carousel';
import Image from 'next/image'
import slider1 from '../public/Images/Courousel Images/slider1.jpg'
import slider2 from '../public/Images/Courousel Images/slider2.jpg'
import slider3 from '../public/Images/Courousel Images/slider3.jpg'
import slider4 from '../public/Images/Courousel Images/slider4.jpg'
import styles from '../styles/courousel.module.css'

const Courousel = () => {

    return (
        <div className={styles.courouselBody}>
            <Carousel sx={{ maxWidth: 800 }} withIndicators mx="auto" height={325}
                styles={{
                    control: {
                        '&[data-inactive]': {
                            opacity: 0,
                            cursor: 'default',
                        },
                    },
                }}
                loop
            >
                <Carousel.Slide><Image src={slider1} alt='Image' /></Carousel.Slide>
                <Carousel.Slide><Image src={slider2} alt='Image' /></Carousel.Slide>
                <Carousel.Slide><Image src={slider3} alt='Image' /></Carousel.Slide>
                <Carousel.Slide><Image src={slider4} alt='Image' /></Carousel.Slide>
            </Carousel>
        </div>
    )
}

export default Courousel

