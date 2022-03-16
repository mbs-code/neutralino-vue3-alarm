import args from 'command-line-args'
import { get } from 'object-path'
import { ICloseEvent, IMessageEvent, w3cwebsocket as WebSocket } from 'websocket'
import notifier from 'node-notifier'

import Logger from './logger'

const optionDefinitions = [
  { name: 'nl-port', type: String },
  { name: 'nl-token', type: String },
  { name: 'nl-extension-id', type: String },
]

const options = args(optionDefinitions)

const HOST = '127.0.0.1'
const NL_PORT: string = options['nl-port']
const NL_TOKEN: string = options['nl-token']
const NL_EXTID: string = options['nl-extension-id']

const URL = `ws://${HOST}:${NL_PORT}?extensionId=${NL_EXTID}`
Logger.info('url: ' + URL)

const client = new WebSocket(URL)
client.onopen = () => {
  Logger.info('connected.')
}

client.onerror = (error: Error) => {
  Logger.error('connection error!')
  Logger.error(error)
}

client.onclose = (event: ICloseEvent) => {
  Logger.info('connection closed.')
  Logger.info(event)
}

client.onmessage = (message: IMessageEvent) => {
  if (!message || typeof message.data !== 'string') {
    return
  }

  try {
    Logger.info('received message. ' + message.data)

    const json = JSON.parse(message.data)
    const event = get(json, 'event')
    const data = get(json, 'data')

    let res = null
    switch (event) {
      case 'notify':
        res = handleNotify(data)
        break
      default:
        return
    }
  } catch (error) {
    Logger.error('message error!')
    Logger.error(error)
    // TODO: 返す
  }
}

const handleNotify = (data: object) => {
  const message = get(data, 'message')
  if (!message) throw new Error('Data not found: key=message')

  notifier.notify(message, (error, resoinse, metadata) => {
    Logger.info(error)
    Logger.info(resoinse)
    Logger.info(metadata)
  })
  return {
    message: 'success',
  }
}
