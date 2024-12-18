const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: __dirname + '/preload.js',
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    // Загружаем Яндекс.Музыку
    mainWindow.loadURL('https://music.yandex.ru');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

