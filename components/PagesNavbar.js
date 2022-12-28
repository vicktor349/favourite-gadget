import React from 'react'
import styles from '../styles/pagesNavbar.module.css'
import { Input, Divider } from '@mantine/core'
import Link from 'next/link'
import { IconSearch, IconUser, IconHeart, IconShoppingCart } from '@tabler/icons'

const PagesNavbar = () => {
    return (
        <div className={styles.body}>
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
        </div>
    )
}

export default PagesNavbar