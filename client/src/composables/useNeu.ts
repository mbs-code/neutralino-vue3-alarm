const EXTENSION = 'js.neutralino.server'
const NOTIFY_EVENT = 'notify'

export const useNeu = () => {
  const getExtensionStatus = async () => {
    const res: { loaded: string[]; connected: string[] } = await window.Neutralino.extensions.getStats()
    return res
  }

  const notify = async (message: string) => {
    const res: { message: string } = await window.Neutralino.extensions.dispatch(EXTENSION, NOTIFY_EVENT, {
      message: message,
    })
    return res
  }

  const healthCheck = async () => await notify('Health OK!')

  return {
    getExtensionStatus,
    notify,
    healthCheck,
  }
}
