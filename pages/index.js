import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NavLink, Divider } from '@mantine/core'
import { IconMenu2 } from '@tabler/icons'
import Navbar from '../components/Navbar'
import Courousel from '../components/Courousel'
import sidepicture1 from '../public/Images/Side Image/sidepicture1.jpg'
import sidepicture2 from '../public/Images/Side Image/sidepicture2.jpg'
import CourouselSlide from '../components/CourouselSlide'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favourite Gadget | Home</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.leftSection}>
          <h6 className={styles.logo}>Favourite Gadget</h6>
          <div className={styles.categories}>
            <div className={styles.cat}><IconMenu2 style={{ color: '#fff' }} className={styles.burger} /><span className={styles.category}>Browse Categories</span></div>
            <NavLink
              className={styles.navLinkDiv}
              label='Cell Phone'
            >
              <NavLink label='Tecno' />
              <NavLink label='Infix' />
              <NavLink label='Apple' />
              <NavLink label='Samsung' />
            </NavLink>
            <NavLink
              className={styles.navLinkDiv}
              label='Computers & Accessories'
            >
              <NavLink label='HP' />
              <NavLink label='Lenovo' />
              <NavLink label='Acer' />
              <NavLink label='Razer' />
            </NavLink>
            <NavLink
              className={styles.navLinkDiv}
              label='Television & Video'
            >
              <NavLink label='Samsung' />
              <NavLink label='Tcl' />
              <NavLink label='Apple' />
              <NavLink label='Samsung' />
            </NavLink>

            <NavLink
              className={styles.navLinkDiv}
              label='Smart Watches'
            >
              <NavLink label='Apple' />
              <NavLink label='Samsung' />
              <NavLink label='Fossil' />
              <NavLink label='Oraimo' />
            </NavLink>
            <NavLink
              label='Camera & Headphones'
              className={styles.navLinkDiv}
            >
              <NavLink label='Jbl' />
              <NavLink label='Beyerdynamic' />
              <NavLink label='Jabra' />
              <NavLink label='Plantronics' />
            </NavLink>
            <NavLink
              label='Video Games'
              className={styles.navLinkDiv}
            >
              <NavLink label='Assassin Creeds' />
              <NavLink label='Call of Duty' />
              <NavLink label='Battle Field' />
              <NavLink label='ProtoType' />
            </NavLink>
          </div>
        </div>
        <div>
          <Navbar />
          <Courousel />
          <div className={styles.sideImage}>
            <div className={styles.sidepictureDiv}><Image className={styles.sidepicture} src={sidepicture1} alt='First Side Picture' /></div>
            <div className={styles.sidepictureDiv}><Image className={styles.sidepicture} src={sidepicture2} alt='Second Side Picture' /></div>
          </div>
        </div>
      </div>
      <div className={styles.courouselSlide}>
        <CourouselSlide />
      </div>
      <div className={styles.products}>
        <h1 className={styles.bestSelling}>Best Selling Product</h1>
        <div style={{ marginBottom: '2rem' }}>
          <Divider label={<h2 style={{ fontWeight: 'lighter', textAlign: 'center' }}>Featured</h2>} labelPosition='center' />
        </div>
        <Card />
      </div>
    </div>
  )
}
