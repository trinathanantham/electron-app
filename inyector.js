// inyector.js// Get the ipcRenderer of electron
const { ipcRenderer } = require('electron');

// Do something according to a request of your mainview
ipcRenderer.on('request', function () {
    ipcRenderer.sendToHost(getScripts());
});

ipcRenderer.on("alert-something", function (event, data) {
    alert(data);
});

ipcRenderer.on("change-text-element-id", function (event, data) {
    document.getElementById(data.id).innerHTML = data.text;
});


ipcRenderer.on("delete-element-id", function (event, data) {
    document.getElementById(data.id).remove();
});


ipcRenderer.on("change-text-element-class", function (event, data) {
    document.getElementsByClassName(data.class)[0].innerHTML = data.text;
});


/**
 * Simple function to return the source path of all the scripts in the document
 * of the <webview>
 *
 *@returns {String}
 **/
function getScripts() {
    var items = [];

    for (var i = 0; i < document.scripts.length; i++) {
        items.push(document.scripts[i].src);
    }

    return JSON.stringify(items);
}