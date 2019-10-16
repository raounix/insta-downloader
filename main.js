const { app, BrowserWindow,ipcMain } = require('electron')


function createWindow () {

  let win = new BrowserWindow({
    width: 700,
    height: 860,
    webPreferences: {
      nodeIntegration: true
      
    }
    
    
  })
 


  
  win.loadFile('index.htm')


} 

app.on('ready', createWindow)
