import args from 'command-line-args'
import { get } from 'object-path'
import { ICloseEvent, IMessageEvent, w3cwebsocket as WebSocket } from 'websocket'
import handleNotify from './events/handleNotify'

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

client.onmessage = async (message: IMessageEvent) => {
  if (!message || typeof message.data !== 'string') {
    return
  }

  let res = null
  try {
    Logger.info('received message. ' + message.data)

    const json = JSON.parse(message.data)
    const event = get(json, 'event')
    const data = get(json, 'data')

    switch (event) {
      case 'notify':
        res = await handleNotify(data)
        break
      default:
        return
    }
  } catch (error) {
    Logger.error('message error!')
    Logger.error(error)
    res = String(error)
  } finally {
    return res
  }
}
