'use client'

import React, { useEffect, useState } from 'react'
import { Button, Table, Modal, Form, Input, Select, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MaintenanceRequestsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [properties, setProperties] = useState([])
  const [maintenances, setMaintenances] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedPropertyId, setSelectedPropertyId] = useState<
    string | undefined
  >(undefined)

  useEffect(() => {
    if (userId) {
      fetchProperties()
    }
  }, [userId])

  const fetchProperties = async () => {
    try {
      const properties = await Api.Property.findManyByUserId(userId, {
        includes: ['maintenances'],
      })
      setProperties(properties)
      const allMaintenances = properties.flatMap(
        property => property.maintenances || [],
      )
      setMaintenances(allMaintenances)
    } catch (error) {
      enqueueSnackbar('Failed to fetch properties', { variant: 'error' })
    }
  }

  const handleCreateMaintenance = async (values: {
    issueDescription: string
    status: string
  }) => {
    if (!selectedPropertyId) return

    try {
      await Api.Maintenance.createOneByPropertyId(selectedPropertyId, {
        issueDescription: values.issueDescription,
        status: values.status,
      })
      enqueueSnackbar('Maintenance request created successfully', {
        variant: 'success',
      })
      fetchProperties()
      setIsModalVisible(false)
    } catch (error) {
      enqueueSnackbar('Failed to create maintenance request', {
        variant: 'error',
      })
    }
  }

  const columns = [
    {
      title: 'Property Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Issue Description',
      dataIndex: 'issueDescription',
      key: 'issueDescription',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (text: string) => dayjs(text).format('DD/MM/YYYY'),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Maintenance Requests</Title>
      <Text>Manage and track maintenance requests for your properties.</Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setIsModalVisible(true)}
        style={{ marginBottom: 16 }}
      >
        Add Maintenance Request
      </Button>
      <Table dataSource={maintenances} columns={columns} rowKey="id" />

      <Modal
        title="Create Maintenance Request"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleCreateMaintenance}>
          <Form.Item
            name="propertyId"
            label="Property"
            rules={[{ required: true, message: 'Please select a property' }]}
          >
            <Select onChange={value => setSelectedPropertyId(value)}>
              {properties.map(property => (
                <Option key={property.id} value={property.id}>
                  {property.title}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="issueDescription"
            label="Issue Description"
            rules={[
              { required: true, message: 'Please input the issue description' },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select a status' }]}
          >
            <Select>
              <Option value="Pending">Pending</Option>
              <Option value="In Progress">In Progress</Option>
              <Option value="Completed">Completed</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
