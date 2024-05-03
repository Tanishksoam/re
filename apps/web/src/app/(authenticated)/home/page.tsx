'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Avatar, Button } from 'antd'
import {
  HomeOutlined,
  MailOutlined,
  NotificationOutlined,
  PropertySafetyOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id

  const [user, setUser] = useState<Model.User | null>(null)
  const [properties, setProperties] = useState<Model.Property[]>([])

  useEffect(() => {
    if (userId) {
      fetchUserData()
      fetchProperties()
    }
  }, [userId])

  const fetchUserData = async () => {
    try {
      const userData = await Api.User.findOne(userId, {
        includes: ['notifications', 'propertys'],
      })
      setUser(userData)
    } catch (error) {
      enqueueSnackbar('Failed to fetch user data', { variant: 'error' })
    }
  }

  const fetchProperties = async () => {
    try {
      const propertiesData = await Api.Property.findAll({ userId })
      setProperties(propertiesData)
    } catch (error) {
      enqueueSnackbar('Failed to fetch properties', { variant: 'error' })
    }
  }

  const navigateToPropertyDetails = (propertyId: string) => {
    router.push(`/properties/${propertyId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Welcome to RentEase</Title>
      <Text>Welcome to your dashboard, {user?.name || 'User'}!</Text>
      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        <Col span={24}>
          <Card
            title="Your Notifications"
            extra={
              <Button
                icon={<NotificationOutlined />}
                onClick={() => router.push('/communications')}
              >
                View All
              </Button>
            }
          >
            {user?.notifications?.map(notification => (
              <Card
                key={notification.id}
                type="inner"
                title={notification.title}
              >
                {notification.message}
              </Card>
            ))}
          </Card>
        </Col>
        <Col span={24}>
          <Card
            title="Your Properties"
            extra={
              <Button
                icon={<PropertySafetyOutlined />}
                onClick={() => router.push('/properties')}
              >
                Manage Properties
              </Button>
            }
          >
            {properties.map(property => (
              <Card
                key={property.id}
                type="inner"
                title={property.title}
                extra={
                  <Button
                    onClick={() => navigateToPropertyDetails(property.id)}
                  >
                    Details
                  </Button>
                }
              >
                <p>{property.description}</p>
                <Text strong>Price: ${property.price}</Text>
              </Card>
            ))}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
