'use client'

import { useEffect, useState } from 'react'
import {
  Button,
  Table,
  Typography,
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ContractManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [contracts, setContracts] = useState<Model.Contract[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const contractsAsTenant = await Api.Contract.findManyByTenantId(
          userId,
          { includes: ['property', 'landlord'] },
        )
        setContracts(contractsAsTenant)
      } catch (error) {
        enqueueSnackbar('Failed to fetch contracts', { variant: 'error' })
      }
    }

    if (userId) {
      fetchContracts()
    }
  }, [userId])

  const handleCreateContract = async values => {
    try {
      const newContract = await Api.Contract.createOneByTenantId(userId, {
        ...values,
        startDate: values.startDate.format('YYYY-MM-DD'),
        endDate: values.endDate.format('YYYY-MM-DD'),
        tenantId: userId,
      })
      setContracts([...contracts, newContract])
      enqueueSnackbar('Contract created successfully', { variant: 'success' })
      setIsModalVisible(false)
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to create contract', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Property',
      dataIndex: ['property', 'title'],
      key: 'property',
    },
    {
      title: 'Landlord',
      dataIndex: ['landlord', 'name'],
      key: 'landlord',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: text => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: text => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Terms',
      dataIndex: 'terms',
      key: 'terms',
    },
  ]

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Contract Management</Title>
      <Text>Manage and create your rental contracts.</Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={showModal}
        style={{ marginBottom: 16 }}
      >
        Create Contract
      </Button>
      <Table dataSource={contracts} columns={columns} rowKey="id" />

      <Modal
        title="Create New Contract"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleCreateContract} layout="vertical">
          <Form.Item
            name="propertyId"
            label="Property"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select a property">
              {/* Properties should be fetched and listed here */}
            </Select>
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="endDate"
            label="End Date"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item name="terms" label="Terms" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Contract
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
