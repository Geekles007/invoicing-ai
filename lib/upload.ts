export const getBase64 = (img: File, callback: (url: string) => void): void => {
  const reader = new FileReader()
  reader.addEventListener('load', () => {
    callback(reader.result as string)
  })
  reader.readAsDataURL(img)
}

export const convertImageListToBase64String = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fileObj: any,
): Promise<string> => {
  return new Promise((resolve) => {
    getBase64(fileObj, (url) => {
      const based64Image = url.split('base64,')[1]
      resolve(based64Image)
    })
  })
}

const getUrlExtension = (url: string) => {
  return url.split(/[#?]/)[0].split('.').pop()?.trim()
}

export const fromUrlToFile = async (imgUrl: string) => {
  const imgExt = getUrlExtension(imgUrl)

  const response = await fetch(imgUrl)
  const blob = await response.blob()
  const file = new File([blob], 'profileImage.' + imgExt, {
    type: blob.type,
  })
  return await file
}

export function convertImageToBase64Jpg(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    // When the file is read as a Data URL
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        if (!ctx) {
          return reject('Failed to get canvas context')
        }

        // Set canvas dimensions to the image dimensions
        canvas.width = img.width
        canvas.height = img.height

        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0)

        // Convert the canvas to a JPG data URL (base64 encoded)
        const jpgDataUrl = canvas.toDataURL('image/jpeg', 0.9) // Adjust quality if needed

        // Resolve with the base64 string (without the data URL prefix)
        const base64String = jpgDataUrl.split(',')[1] // Removing the "data:image/jpeg;base64," part
        resolve(base64String)
      }

      // Set the image source to the result of the FileReader (base64 data URL)
      if (event.target?.result) {
        img.src = event.target.result as string
      }
    }

    // Handle reading errors
    reader.onerror = (error) => reject(error)

    // Read the file as a Data URL
    reader.readAsDataURL(file)
  })
}
