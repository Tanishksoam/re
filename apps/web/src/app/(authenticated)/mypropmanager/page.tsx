'use client'

import { useEffect, useState } from 'react'
import { Button, Table, InputNumber, Form, Typography } from 'antd'
import { EditOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MyPropManager() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [properties, setProperties] = useState<Model.Property[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchProperties = async () => {
      if (userId) {
        try {
          const properties = await Api.Property.findManyByUserId(userId, {
            includes: ['contracts', 'images', 'feedbacks', 'maintenances'],
          })
          setProperties(properties)
        } catch (error) {
          enqueueSnackbar('Failed to fetch properties', { variant: 'error' })
        }
      }
    }

    fetchProperties()
  }, [userId])

  const handleSave = async (id: string) => {
    try {
      const row = await form.validateFields()
      const newData = [...properties]
      const index = newData.findIndex(item => item.id === id)
      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        const updatedProperty = await Api.Property.updateOne(id, row)
        setProperties(newData)
        setEditingId(null)
        enqueueSnackbar('Property updated successfully', { variant: 'success' })
      } else {
        throw new Error('Property not found')
      }
    } catch (err) {
      enqueueSnackbar('Failed to update property', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Current Rent',
      dataIndex: 'price',
      key: 'price',
      editable: true,
      render: (text: string, record: Model.Property) => {
        if (editingId === record.id) {
          return (
            <Form.Item
              name="price"
              style={{ margin: 0 }}
              rules={[
                { required: true, message: 'Please input the rent price!' },
              ]}
            >
              <InputNumber min={1} />
            </Form.Item>
          )
        }
        return text
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_: any, record: Model.Property) => {
        const editable = editingId === record.id
        return editable ? (
          <span>
            <Button
              onClick={() => handleSave(record.id)}
              style={{ marginRight: 8 }}
            >
              Save
            </Button>
            <Button onClick={() => setEditingId(null)}>Cancel</Button>
          </span>
        ) : (
          <Button
            disabled={editingId !== null}
            onClick={() => setEditingId(record.id)}
          >
            <EditOutlined /> Edit
          </Button>
        )
      },
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Property Management</Title>
      <Text type="secondary">
        Manage your properties and update rent prices.
      </Text>
      <Form form={form} component={false}>
        <Table
          bordered
          dataSource={properties}
          columns={columns}
          rowKey="id"
          rowClassName="editable-row"
        />
      </Form>
    </PageLayout>
  )
}
