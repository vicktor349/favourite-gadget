import React from 'react'
import styles from '../styles/card.module.css'
import CardDetails from './CardDetails'
import headphones1 from '../public/Images/CardImages/Headphones/headphones1.jpg'
import headphones2 from '../public/Images/CardImages/Headphones/headphones2.jpg'
import headphones3 from '../public/Images/CardImages/Headphones/headphones3.jpg'
import headphones4 from '../public/Images/CardImages/Headphones/headphones4.jpg'
import headphones5 from '../public/Images/CardImages/Headphones/headphones5.jpg'
import laptop1 from '../public/Images/CardImages/Laptops/laptop1.jpg'
import laptop2 from '../public/Images/CardImages/Laptops/laptop2.jpg'
import laptop3 from '../public/Images/CardImages/Laptops/laptop3.jpg'
import laptop4 from '../public/Images/CardImages/Laptops/laptop4.jpg'
import laptop5 from '../public/Images/CardImages/Laptops/laptop5.jpg'
import phone1 from '../public/Images/CardImages/Phones/phone1.jpg'
import phone2 from '../public/Images/CardImages/Phones/phone2.jpg'
import phone4 from '../public/Images/CardImages/Phones/phone4.jpg'
import phone3 from '../public/Images/CardImages/Phones/phone3.jpg'
import phone5 from '../public/Images/CardImages/Phones/phone5.jpg'
import speaker1 from '../public/Images/CardImages/Speakers/speaker1.jpg'
import speaker2 from '../public/Images/CardImages/Speakers/speaker2.jpg'
import speaker3 from '../public/Images/CardImages/Speakers/speaker3.jpg'
import speaker4 from '../public/Images/CardImages/Speakers/speaker4.jpg'
import speaker5 from '../public/Images/CardImages/Speakers/speaker5.jpg'

const card = () => {
    return (
        <div className={styles.body}>
            <CardDetails name='JBL' category='Speakers' img={speaker3} />
            <CardDetails name='Iphone 11 64GB' category='Phones' img={phone1} />
            <CardDetails name='Sony Headphones' category='Headphones' img={headphones3} />
            <CardDetails name='Iphone 12 Pro Max 64GB' category='Phones' img={phone2} />
            <CardDetails name='JBL' category='Headphones' img={headphones5} />
            <CardDetails name='MacBook Pro 2019' category='Laptops' img={laptop2} />
            <CardDetails name='JBL' category='Speakers' img={speaker1} />
            <CardDetails name='SoundCore' category='Speakers' img={speaker5} />
            <CardDetails name='Iphone 13 64GB' category='Phones' img={phone3} />
            <CardDetails name='MacBook Pro 2018' category='Laptops' img={laptop1} />
            <CardDetails name='JBL' category='Speakers' img={speaker4} />
            <CardDetails name='MacBook Pro 2020' category='Laptops' img={laptop3} />
            <CardDetails name='Iphone X 64GB' category='Phones' img={phone4} />
            <CardDetails name='JBL' category='Speakers' img={speaker2} />
            <CardDetails name='Iphone 11 128GB' category='Phones' img={phone5} />
            <CardDetails name='MacBook Pro 2022' category='Laptops' img={laptop5} />
            <CardDetails name='Beats by Dre' category='Headphones' img={headphones1} />
            <CardDetails name='Apple Airpods' category='Headphones' img={headphones2} />
            <CardDetails name='MacBook Pro 2021' category='Laptops' img={laptop4} />
            <CardDetails name='Apple Earpiece' category='Headphones' img={headphones4} />
        </div>
    )
}

export default card