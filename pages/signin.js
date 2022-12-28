import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    Button,
    Divider,
    Anchor,
    Stack,
} from '@mantine/core';
import Head from 'next/head';
import { FcGoogle } from 'react-icons/fc'
import { GrFacebook } from 'react-icons/gr'
import styles from '../styles/signin.module.css'

const signin = () => {
    const [type, toggle] = useToggle(['signin', 'signup']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
        }
    });

    return (
        <>
            <Head>
                <title>
                    Favourite Gadget | {type}
                </title>
            </Head>
            <Paper radius="md" p="xl" withBorder className={styles.paper}>
                <Text size="lg" weight={500}>
                    Welcome, {type}
                </Text>


                <form onSubmit={form.onSubmit(() => { })}>
                    <Stack>
                        {type === 'signup' && (
                            <div>
                                <TextInput
                                    label="First Name"
                                    placeholder="Please Enter Your First Name"
                                    style={{ margin: '0.7rem 0 0.7rem 0' }}
                                />
                                <TextInput
                                    label="Name"
                                    placeholder="Please Enter Your Last Name"
                                />
                            </div>

                        )}

                        <TextInput
                            required
                            label="Email"
                            placeholder="Please Enter Your Email Address"
                            style={{ margin: '0.7rem 0 0.7rem 0' }}
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Please Enter Your Password"
                        />
                    </Stack>

                    <Group position="apart" mt="xl">
                        <Anchor
                            component="button"
                            type="button"
                            color="dimmed"
                            onClick={() => toggle()}
                            size="xs"
                        >
                            {type === 'signup'
                                ? 'Already have an account? Login'
                                : "Don't have an account? Register"}
                        </Anchor>
                        <Button type="submit">{upperFirst(type)}</Button>
                    </Group>
                </form>
                <Divider label="Or" labelPosition="center" my="lg" />

                <Group grow mb="md" mt="md">
                    <div className={styles.google} style={{ border: '1px solid #dee2e6', borderRadius: '6px', padding: '0.625rem' }}><FcGoogle radius="xl" className={styles.FcGoogle} style={{ marginRight: '10px' }} />Google</div>
                    <div className={styles.facebook} style={{ border: '1px solid #dee2e6', borderRadius: '6px', padding: '0.625rem' }}><GrFacebook radius="xl" className={styles.GrFacebook} style={{ marginRight: '10px' }} />Facebook</div>
                </Group>
            </Paper>
        </>
    );
}
export default signin