'use client'

import { Typography, Upload, Button, message } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import React, { useState, useEffect } from 'react'
const { Title, Text } = Typography
const { Dragger } = Upload
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PropertyImagesUploadPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState([])
  const [property, setProperty] = useState(null)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const propertyData = await Api.Property.findOne(params.id, {
          includes: ['images'],
        })
        setProperty(propertyData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch property details.', {
          variant: 'error',
        })
      }
    }

    if (params.id) {
      fetchProperty()
    }
  }, [params.id])

  const handleUpload = async options => {
    const { file } = options
    try {
      const imageUrl = await Api.Upload.upload(file)
      const image = await Api.Image.createOneByPropertyId(params.id, {
        imageUrl,
      })
      setFileList(fileList => [
        ...fileList,
        { uid: image.id, name: file.name, status: 'done', url: imageUrl },
      ])
      enqueueSnackbar('Image uploaded successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Upload failed.', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Upload Images for Property</Title>
      <Text>
        Please upload images for the property titled:{' '}
        {property?.title || 'Loading...'}
      </Text>
      <Dragger
        fileList={fileList}
        customRequest={handleUpload}
        multiple
        accept="image/*"
        listType="picture"
        onRemove={file => {
          setFileList(fileList.filter(f => f.uid !== file.uid))
        }}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
      <Button
        type="primary"
        onClick={() => router.push(`/properties/${params.id}`)}
      >
        Back to Property Details
      </Button>
    </PageLayout>
  )
}
