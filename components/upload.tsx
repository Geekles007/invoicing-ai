'use client'

import { ChangeEvent, InputHTMLAttributes, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'
import { convertImageToBase64Jpg } from '@/lib/upload'

type UploadProps = InputHTMLAttributes<HTMLInputElement> &
  ControllerRenderProps<FieldValues, string> & {}

const Upload = ({ defaultValue, onChange, ...field }: UploadProps) => {
  useEffect(() => {}, [])

  const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) {
      const base64 = await convertImageToBase64Jpg(e?.target?.files?.[0])
      onChange?.(base64)
    }
  }

  return <Input {...field} onChange={onUpload} defaultValue={defaultValue} />
}

export default Upload
