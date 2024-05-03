'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Col, Row, Space, Image } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PropertyListingsPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [properties, setProperties] = useState([])

  useEffect(() => {
    if (!authentication.isAuthenticated) {
      enqueueSnackbar('You must be logged in to view properties', {
        variant: 'error',
      })
      router.push('/home')
      return
    }

    const fetchProperties = async () => {
      try {
        const propertiesData = await Api.Property.findMany({
          includes: ['user', 'images'],
        })
        setProperties(propertiesData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch properties', { variant: 'error' })
      }
    }

    fetchProperties()
  }, [authentication.isAuthenticated, router])

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Available Rental Properties</Title>
        <Text>Explore a variety of properties available for rent.</Text>
        <Row gutter={[16, 16]}>
          {properties?.map(property => (
            <Col key={property.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <Image
                    alt="property"
                    src={property.images?.[0]?.imageUrl || ''}
                  />
                }
                onClick={() => router.push(`/properties/${property.id}`)}
              >
                <Card.Meta
                  title={property.title}
                  description={
                    <>
                      <Text>{property.description}</Text>
                      <br />
                      <Text strong>Price: ${property.price}</Text>
                      <br />
                      <Text type="secondary">
                        Listed by: {property.user?.name}
                      </Text>
                      <br />
                      <Text type="secondary">
                        Date listed:{' '}
                        {dayjs(property.dateCreated).format('DD/MM/YYYY')}
                      </Text>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </PageLayout>
  )
}
