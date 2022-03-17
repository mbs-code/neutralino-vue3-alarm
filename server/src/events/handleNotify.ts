import notifier from 'node-notifier'
import { get } from 'object-path'

export default async (data: object) => {
  const message = get(data, 'message')
  if (!message) throw new Error('Data not found: key=message')

  await notify(message)

  return {
    message: 'success',
  }
}

const notify = async (message: string) => {
  return new Promise((resolve, reject) => {
    notifier.notify(message, (error, response, metadata) => {
      if (error) reject(error)

      resolve(response)
    })
  })
}
