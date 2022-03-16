import { configure, getLogger } from 'log4js'

configure({
  appenders: {
    temp: {
      type: 'file',
      flags: 'w', // 一回ごとに上書き
      filename: './server.log',
      layout: { type: 'pattern', pattern: '%d %5p - %m' },
    },
  },

  categories: {
    default: { appenders: ['temp'], level: 'all' },
  },
})

const Logger = getLogger()

export default Logger
