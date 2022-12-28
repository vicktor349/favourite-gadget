import React from 'react'
import { IconSearch, IconUser, IconHeart, IconShoppingCart } from '@tabler/icons'
import { Input, Divider } from '@mantine/core'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <div className={styles.rightSection}>
                <div className={styles.rightSectionNavbar}>
                    <Input icon={<IconSearch />} placeholder='Search for products...' />
                    <div className={styles.account}>
                        <IconUser />
                        <div>
                            <Link href='/signin'><a className={styles.signin}>Login</a></Link>
                            <h6>Account</h6>
                        </div>
                    </div>
                    <div className={styles.favourite}>
                        <IconHeart />
                    </div>
                    <div className={styles.cart}>
                        <IconShoppingCart />
                    </div>
                </div>

            </div>
            <Divider className={styles.divider} my="xs" />
            <div className={styles.productLinks}>
                <p className={styles.productLink}>Home</p>
                <p className={styles.productLink}>Today's Deal</p>
                <p className={styles.productLink}>Trending Products</p>
                <p className={styles.productLink}>Special Offers</p>
            </div>
        </div>
    )
}

export default Navbar