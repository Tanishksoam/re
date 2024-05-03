'use client'

import React, { useState } from 'react'
import { Button, Form, Input, InputNumber, Typography } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreatePropertyPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const handleSubmit = async (values: any) => {
    if (!userId) {
      enqueueSnackbar('User must be logged in to create a property', {
        variant: 'error',
      })
      return
    }

    try {
      const newProperty = await Api.Property.createOneByUserId(userId, {
        title: values.title,
        description: values.description,
        address: values.address,
        price: values.price,
      })
      enqueueSnackbar('Property created successfully!', { variant: 'success' })
      router.push(`/properties/${newProperty.id}`)
    } catch (error) {
      enqueueSnackbar('Failed to create property', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <HomeOutlined /> Create New Property
      </Title>
      <Text type="secondary">
        Fill in the details below to list a new rental property.
      </Text>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark={false}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input the title of the property!',
            },
          ]}
        >
          <Input placeholder="Enter property title" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea rows={4} placeholder="Enter property description" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: 'Please input the address of the property!',
            },
          ]}
        >
          <Input placeholder="Enter property address" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price (USD)"
          rules={[
            {
              required: true,
              message: 'Please input the price of the property!',
            },
          ]}
        >
          <InputNumber
            min={1}
            formatter={value =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={value => value!.replace(/\$\s?|(,*)/g, '')}
            style={{ width: '100%' }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Property
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
