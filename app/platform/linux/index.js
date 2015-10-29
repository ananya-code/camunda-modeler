'use strict';

var Menus = require('../Menus');

function LinuxIntegration(app) {

  // close handling
  app.on('window-all-closed', function () {
    app.quit();
  });

  // editor menu
  app.on('editor-create-menu', function(mainWindow) {
    new Menus(mainWindow);
  });

  // modeler was opened through file association
  app.on('association-file-open', function() {
    if (/(\.bpmn$|\.dmn$)/.test(process.argv[2])) {
      app.fileSystem.addFile(process.argv[2]);
    }
  });
}

module.exports = LinuxIntegration;
