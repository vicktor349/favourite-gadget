import { Button, Divider, Input } from '@mantine/core'
import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Divider />
            <div className={styles.footerContents}>
                <div>
                    <h3 className={styles.h3}>CUSTOMER SERVICE</h3>
                    <p className={styles.p}>Contact Us</p>
                    <p className={styles.p}>Locate Us</p>
                    <p className={styles.p}>Shipping</p>
                </div>
                <Divider orientation='vertical' />
                <div>
                    <h3 className={styles.h3}>LINKS</h3>
                    <p className={styles.p}>Contact Us</p>
                    <p className={styles.p}>Locate Us</p>
                    <p className={styles.p}>Shipping</p>
                </div>
                <Divider orientation='vertical' />
                <div>
                    <h3 className={styles.h3}>NEWSLETTER</h3>
                    <p className={styles.p}>Sign Up for Our Newsletter</p>
                    <div className={styles.subscribeDiv}><Input /><Button>Subscribe</Button></div>
                </div>
            </div>
            <p className={styles.copyright}>© Favourite Gadgets</p>
        </div>
    )
}

export default Footer