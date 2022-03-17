export default class ServerRepository {
  protected static readonly EXTENSION = 'js.neutralino.server'

  protected static readonly NOTIFY_EVENT = 'notify'

  public static async healthCheck() {
    return this.notify('Health OK!')
  }

  public static async notify(message: string) {
    return window.Neutralino.extensions.dispatch(this.EXTENSION, this.NOTIFY_EVENT, {
      message: message,
    })
  }
}
