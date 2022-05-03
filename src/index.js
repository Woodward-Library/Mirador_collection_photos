import Mirador from "mirador/dist/mirador.min.js";

Mirador.viewer({
  id: "app",
  window: {
    views: [{ key: "gallery" }, {key:"single"}, {key: "book"}],
    allowClose: true, // Configure if windows can be closed or not
    allowFullscreen: false, // Configure to show a "fullscreen" button in the WindowTopBar
    allowMaximize: true, // Configure if windows can be maximized or not
    allowTopMenuButton: true, // Configure if window view and thumbnail display menu are visible or not
    allowWindowSideBar: true, // Configure if side bar menu is visible or not
    authNewWindowCenter: 'parent', // Configure how to center a new window created by the authentication flow. Options: parent, screen
    sideBarPanel: 'info', // Configure which sidebar is selected by default. Options: info, attribution, canvas, annotations, search
    defaultSidebarPanelHeight: 201,  // Configure default sidebar height in pixels
    defaultSidebarPanelWidth: 235, // Configure default sidebar width in pixels
    defaultView: 'single',  // Configure which viewing mode (e.g. single, book, gallery) for windows to be opened in
    forceDrawAnnotations: false,
    hideWindowTitle: false, // Configure if the window title is shown in the window title bar or not
    highlightAllAnnotations: false, // Configure whether to display annotations on the canvas by default
    showLocalePicker: false, // Configure locale picker for multi-lingual metadata
    sideBarOpen: false, // Configure if the sidebar (and its content panel) is open by default
    switchCanvasOnSearch: true, // Configure if Mirador should automatically switch to the canvas of the first search result
  },

  panels: { // Configure which panels are visible in WindowSideBarButtons
    info: true,
    attribution: true,
    canvas: true,
    annotations: true,
    search: true,
    layers: true,
  },

  thumbnails: {
    preferredFormats: ['jpg', 'png', 'webp', 'tif'],
  },
  thumbnailNavigation: {
    defaultPosition: 'off', // Which position for the thumbnail navigation to be be displayed. Other possible values are "far-bottom" or "far-right"
    displaySettings: true, // Display the settings for this in WindowTopMenu
    height: 130, // height of entire ThumbnailNavigation area when position is "far-bottom"
    width: 100, // width of one canvas (doubled for book view) in ThumbnailNavigation area when position is "far-right"
  },


  windows: [
    {
      "loadedManifest": "https://iiif.lib.harvard.edu/manifests/drs:48309543",
      "canvasIndex": 2,
      sideBarOpen: false,

    }
  ],

  thumbnailNavigation: {
   defaultPosition: 'off', // Which position for the thumbnail navigation to be be displayed. Other possible values are "far-bottom" or "far-right"
   displaySettings: true, // Display the settings for this in WindowTopMenu
   height: 130, // height of entire ThumbnailNavigation area when position is "far-bottom"
   width: 100, // width of one canvas (doubled for book view) in ThumbnailNavigation area when position is "far-right"
 },

 workspaceControlPanel: {
  enabled: false, // Configure if the control panel should be rendered.  Useful if you want to lock the viewer down to only the configured manifests
},
workspace: {
  type: 'mosaic',
}


});
