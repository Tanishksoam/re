'use client'

import { useEffect, useState } from 'react'
import { Typography, Descriptions, Spin, Button } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ContractDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [contract, setContract] = useState<Model.Contract | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContract = async () => {
      try {
        const contractData = await Api.Contract.findOne(params.id, {
          includes: ['property', 'tenant', 'landlord', 'payments'],
        })
        setContract(contractData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch contract details', {
          variant: 'error',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchContract()
  }, [params.id])

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!contract) {
    return (
      <PageLayout layout="narrow">
        <Text>No contract details available.</Text>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Contract Details</Title>
      <Descriptions bordered>
        <Descriptions.Item label="Start Date">
          {dayjs(contract.startDate).format('DD/MM/YYYY')}
        </Descriptions.Item>
        <Descriptions.Item label="End Date">
          {dayjs(contract.endDate).format('DD/MM/YYYY')}
        </Descriptions.Item>
        <Descriptions.Item label="Terms">{contract.terms}</Descriptions.Item>
        <Descriptions.Item label="Tenant">
          {contract.tenant?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Landlord">
          {contract.landlord?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Property Title">
          {contract.property?.title}
        </Descriptions.Item>
        <Descriptions.Item label="Property Address">
          {contract.property?.address}
        </Descriptions.Item>
      </Descriptions>
      <Button icon={<HomeOutlined />} onClick={() => router.push('/home')}>
        Return Home
      </Button>
    </PageLayout>
  )
}
