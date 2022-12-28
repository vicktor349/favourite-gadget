import Image from 'next/image'
import React from 'react'
import styles from '../styles/cardDetails.module.css'
import { Card, Text, Button, Group } from '@mantine/core';
import { IconHeart } from '@tabler/icons'

const CardDetails = ({ img, category, name }) => {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder className={styles.card}>
            <Card.Section>
                <Image src={img} width={250} height={250} className={styles.images} />
            </Card.Section>
            <IconHeart style={{ position: 'relative', float: 'right', marginTop: '0.625rem' }} />
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} style={{ clear: 'both' }}>{category}</Text>
            </Group>
            <Text size="sm" color="dimmed">
                {name}
            </Text>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                ADD TO CART
            </Button>
        </Card>
    )
}

export default CardDetails