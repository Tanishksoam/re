'use client'

import React, { useEffect, useState } from 'react'
import {
  Button,
  Form,
  Input,
  InputNumber,
  Typography,
  Row,
  Col,
  Card,
} from 'antd'
import { DollarCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PaymentGatewayPage() {
  const [form] = Form.useForm()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [contracts, setContracts] = useState([])

  useEffect(() => {
    if (userId) {
      fetchContracts()
    }
  }, [userId])

  const fetchContracts = async () => {
    try {
      const contractsFound = await Api.Contract.findManyByTenantId(userId, {
        includes: ['property', 'landlord', 'payments'],
      })
      setContracts(contractsFound)
    } catch (error) {
      enqueueSnackbar('Failed to fetch contracts', { variant: 'error' })
    }
  }

  const handlePaymentSubmission = async values => {
    try {
      const { contractId, amount, paymentDate } = values
      const payment = await Api.Payment.createOneByContractId(contractId, {
        amount,
        paymentDate: dayjs(paymentDate).format('YYYY-MM-DD'),
        status: 'Pending',
      })
      enqueueSnackbar('Payment submitted successfully', { variant: 'success' })
      router.push('/mypropmanager')
    } catch (error) {
      enqueueSnackbar('Failed to submit payment', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <DollarCircleOutlined /> Make a Payment
      </Title>
      <Text>Please select a contract and enter your payment details.</Text>
      <Form form={form} layout="vertical" onFinish={handlePaymentSubmission}>
        <Form.Item
          name="contractId"
          label="Contract"
          rules={[{ required: true, message: 'Please select a contract' }]}
        >
          <Input type="select">
            {contracts?.map(contract => (
              <option key={contract.id} value={contract.id}>
                {contract.property?.title} - {contract.landlord?.name}
              </option>
            ))}
          </Input>
        </Form.Item>
        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: 'Please input the amount' }]}
        >
          <InputNumber style={{ width: '100%' }} min={1} />
        </Form.Item>
        <Form.Item
          name="paymentDate"
          label="Payment Date"
          rules={[{ required: true, message: 'Please select a payment date' }]}
        >
          <Input type="date" />
        </Form.Item>
        <Row justify="center">
          <Col>
            <Button type="primary" htmlType="submit">
              Submit Payment
            </Button>
          </Col>
        </Row>
      </Form>
    </PageLayout>
  )
}
