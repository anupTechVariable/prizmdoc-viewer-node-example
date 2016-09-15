window.languageItems = require('./public/viewer-assets/languages/en-US.json');
window.htmlTemplates = {
  comment: require('./public/viewer-assets/templates/commentTemplate.html'),
  contextMenu: require('./public/viewer-assets/templates/contextMenuTemplate.html'),
  copyOverlay: require('./public/viewer-assets/templates/copyOverlayTemplate.html'),
  downloadOverlay: require('./public/viewer-assets/templates/downloadOverlayTemplate.html'),
  esignOverlay: require('./public/viewer-assets/templates/esignOverlayTemplate.html'),
  hyperlinkMenu: require('./public/viewer-assets/templates/hyperlinkMenuTemplate.html'),
  imageStampOverlay: require('./public/viewer-assets/templates/imageStampOverlayTemplate.html'),
  overwriteOverlay: require('./public/viewer-assets/templates/overwriteOverlayTemplate.html'),
  pageRedactionOverlay: require('./public/viewer-assets/templates/pageRedactionOverlayTemplate.html'),
  printOverlay: require('./public/viewer-assets/templates/printOverlayTemplate.html'),
  print: require('./public/viewer-assets/templates/printTemplate.html'),
  redactionReason: require('./public/viewer-assets/templates/redactionReasonTemplate.html'),
  unsavedChangesOverlay: require('./public/viewer-assets/templates/unsavedChangesOverlayTemplate.html'),
  viewer: require('./public/viewer-assets/templates/viewerTemplate.html')
};

window.jQuery = require('jquery');
window.$ = window.jQuery;
require('underscore');
