// Файл для межпроцессного взаимодействия (если потребуется)
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    // Если нужно добавить функции для взаимодействия с основным процессом
});

