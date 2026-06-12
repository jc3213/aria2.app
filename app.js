const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

let newWindow = null;

app.whenReady().then(() => {
    newWindow = new BrowserWindow({
        width: 1310,
        height: 1156,
        autoHideMenuBar: true,
        menuBarVisible: false,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false
        }
    });
    newWindow.loadFile('index.html');
    newWindow.on('closed', () => {
        newWindow = null;
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
