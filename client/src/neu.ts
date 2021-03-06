function setTray() {
  if (window.NL_MODE != 'window') {
    console.log('INFO: Tray menu is only available in the window mode.')
    return
  }
  let tray = {
    icon: '/client/dist/trayIcon.png',
    menuItems: [
      { id: 'VERSION', text: 'Get version' },
      { id: 'SEP', text: '-' },
      { id: 'QUIT', text: 'Quit' }
    ]
  }
  window.Neutralino.os.setTray(tray)
}

function onTrayMenuItemClicked(event) {
  switch (event.detail.id) {
    case 'VERSION':
      window.Neutralino.os.showMessageBox('Version information',
        `Neutralinojs server: v${window.NL_VERSION} | Neutralinojs client: v${window.NL_CVERSION}`)
      break
    case 'QUIT':
      window.Neutralino.app.exit()
      break
  }
}

function onWindowClose() {
  window.Neutralino.app.exit()
}

window.Neutralino.init()
console.log('neu init')

window.Neutralino.events.on('trayMenuItemClicked', onTrayMenuItemClicked)
window.Neutralino.events.on('windowClose', onWindowClose)

if (window.NL_OS != 'Darwin') { // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
  setTray()
}
