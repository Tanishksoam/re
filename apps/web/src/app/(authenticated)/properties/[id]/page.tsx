'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Image, List, Rate, Divider } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PropertyDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [property, setProperty] = useState<Model.Property | null>(null)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const propertyData = await Api.Property.findOne(params.id, {
          includes: ['user', 'images', 'feedbacks', 'feedbacks.user'],
        })
        setProperty(propertyData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch property details.', {
          variant: 'error',
        })
      }
    }

    fetchProperty()
  }, [params.id])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Property Details</Title>
      <Paragraph>
        Here you can view the details of the property, including descriptions,
        images, and feedback.
      </Paragraph>
      {property ? (
        <Card
          title={property.title}
          extra={<HeartOutlined style={{ color: 'red', fontSize: '24px' }} />}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Image.PreviewGroup>
                {property.images?.map(image => (
                  <Image key={image.id} width={200} src={image.imageUrl} />
                ))}
              </Image.PreviewGroup>
            </Col>
            <Col span={12}>
              <List>
                <List.Item>
                  <Text strong>Price:</Text> ${property.price}
                </List.Item>
                <List.Item>
                  <Text strong>Address:</Text> {property.address}
                </List.Item>
                <List.Item>
                  <Text strong>Description:</Text> {property.description}
                </List.Item>
                <List.Item>
                  <Text strong>Owner:</Text> {property.user?.name}
                </List.Item>
                <List.Item>
                  <Text strong>Date Listed:</Text>{' '}
                  {dayjs(property.dateCreated).format('MMMM D, YYYY')}
                </List.Item>
              </List>
            </Col>
          </Row>
          <Divider />
          <Title level={4}>Feedback</Title>
          <List
            itemLayout="horizontal"
            dataSource={property.feedbacks}
            renderItem={feedback => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Rate disabled defaultValue={feedback.rating} />}
                  title={feedback.user?.name}
                  description={feedback.comment}
                />
              </List.Item>
            )}
          />
        </Card>
      ) : (
        <Text>Loading...</Text>
      )}
    </PageLayout>
  )
}
