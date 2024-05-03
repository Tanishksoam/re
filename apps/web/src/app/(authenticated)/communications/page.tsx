'use client'

import { useEffect, useState } from 'react'
import { Typography, List, Avatar, Button, Input, Form } from 'antd'
import { MessageOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CommunicationsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [communications, setCommunications] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!userId) {
      router.push('/home')
      return
    }

    const fetchData = async () => {
      try {
        const communicationsAsSender =
          await Api.Communication.findManyBySenderId(userId, {
            includes: ['receiver'],
          })
        const communicationsAsReceiver =
          await Api.Communication.findManyByReceiverId(userId, {
            includes: ['sender'],
          })
        setCommunications([
          ...communicationsAsSender,
          ...communicationsAsReceiver,
        ])
      } catch (error) {
        enqueueSnackbar('Failed to fetch communications', { variant: 'error' })
      }
    }

    fetchData()
  }, [userId, router])

  const handleSendMessage = async () => {
    if (!message.trim()) {
      enqueueSnackbar('Message cannot be empty', { variant: 'error' })
      return
    }

    try {
      await Api.Communication.createOneBySenderId(userId, {
        message: message,
        timestamp: new Date().toISOString(),
        receiverId: 'some-receiver-id', // This should be dynamically set based on UI interactions
      })
      enqueueSnackbar('Message sent successfully', { variant: 'success' })
      setMessage('')
    } catch (error) {
      enqueueSnackbar('Failed to send message', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Communications Hub</Title>
      <Text>
        This is your central hub for all communications between you and your
        tenants or landlords.
      </Text>
      <List
        itemLayout="horizontal"
        dataSource={communications}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<MessageOutlined />} />}
              title={item.sender?.name || item.receiver?.name}
              description={item.message}
            />
          </List.Item>
        )}
      />
      <Form onFinish={handleSendMessage}>
        <Form.Item>
          <Input.TextArea
            rows={4}
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
