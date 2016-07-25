const electron = require('electron');
// Модуль контроля жизненного цикла приложения
const {app} = electron;
// Модуль создания нативного окна браузера
const {BrowserWindow} = electron;

let win;

function createWindow() {
  // Создаем окно браузера
  win = new BrowserWindow({width: 800, height: 600});

  // и загружаем index.html приложения
  win.loadURL(`file://${__dirname}/index.html`);

  // Открываем DevTools
  //win.webContents.openDevTools();

  // Сообщаем когда окно закрыто
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});