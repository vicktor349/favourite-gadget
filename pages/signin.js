import react, { useState } from 'react';
import {
    TextInput,
    PasswordInput,
    Button,
    Text,
    Group,
    Anchor,
    Divider,
    Paper
} from '@mantine/core';
import Head from 'next/head';
import { FcGoogle } from 'react-icons/fc'
import { GrFacebook } from 'react-icons/gr'
import styles from '../styles/signin.module.css'

const Signin = () => {
    const [authMode, setAuthMode] = useState('signup')
    const changeAuthMode = () => {
        setAuthMode(authMode === "signup" ? "signin" : "signup")
    }
    if (authMode === 'signin') {
        return (
            <>
                <Head>
                    <title>Favourite Gadget | Sign Up</title>
                </Head>
                <div>
                    <Paper radius="md" p="xl" withBorder className={styles.paper}>
                        <Text size="lg" weight={500}>
                            Register An Account
                        </Text>
                        <TextInput
                            label="Email"
                            type='email'
                            placeholder="Please Enter Your Email Address"
                            style={{ margin: '0.7rem 0 0.7rem 0' }}
                        />
                        <TextInput
                            label="First Name"
                            type='text'
                            placeholder="Please Enter Your First Name"
                            style={{ margin: '0.7rem 0 0.7rem 0' }}
                        />
                        <TextInput
                            label="Last Name"
                            type='text'
                            placeholder="Please Enter Your Last Name"
                            style={{ margin: '0.7rem 0 0.7rem 0' }}
                        />
                        <PasswordInput
                            label="Password"
                            placeholder="Please Enter Your Password"
                            style={{ margin: '0.7rem 0 0.7rem 0' }}

                        />
                        <PasswordInput
                            label="ReType Password"
                            placeholder="Please Retype Your Password"
                            style={{ margin: '0.7rem 0 0.7rem 0' }}
                        />
                        <Group position="apart" mt="xl">
                            <Anchor
                                component="button"
                                type="button"
                                color="dimmed"
                                onClick={changeAuthMode}
                                size="xs"
                            >
                                Already have an account? Login
                            </Anchor>
                            <Button type="submit">Sign Up</Button>
                        </Group>
                        <Divider label="Or" labelPosition="center" my="lg" />

                        <Group grow mb="md" mt="md">
                            <div className={styles.google} style={{ border: '1px solid #dee2e6', borderRadius: '6px', padding: '0.625rem' }}><FcGoogle radius="xl" className={styles.FcGoogle} style={{ marginRight: '10px' }} />Google</div>
                            <div className={styles.facebook} style={{ border: '1px solid #dee2e6', borderRadius: '6px', padding: '0.625rem' }}><GrFacebook radius="xl" className={styles.GrFacebook} style={{ marginRight: '10px' }} />Facebook</div>
                        </Group>
                    </Paper>
                </div>
            </>
        )
    }
    return (
        <>
            <Head>
                <title>
                    Favourite Gadget | Sign In
                </title>
            </Head>
            <div>
                <Paper radius="md" p="xl" withBorder className={styles.paper}>
                    <Text size="lg" weight={500}>
                        Login To Your Account
                    </Text>
                    <TextInput
                        label="Email"
                        type='email'
                        placeholder="Please Enter Your Email Address"
                        style={{ margin: '0.7rem 0 0.7rem 0' }}
                    />
                    <TextInput
                        label="Password"
                        placeholder="Please Enter Your Password"
                    />
                    <Group position="apart" mt="xl">
                        <Anchor
                            component="button"
                            type="button"
                            color="dimmed"
                            onClick={changeAuthMode}
                            size="xs"
                        >
                            Don't have an account? Register
                        </Anchor>
                        <Button type="submit">Sign In</Button>
                    </Group>
                </Paper>
            </div>
        </>
    )
}
export default Signin