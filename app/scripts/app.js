/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Sets app default base URL
  app.baseUrl = '/';
  if (window.location.port === '') {  // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    // app.baseUrl = '/polymer-starter-kit/';
  }
  
  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {});

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });
  
  app.onDataRouteClick = function(e) {
  	var attributeRoute = typeof e.target.attributes['data-route'] === "undefined" ? "":e.target.attributes['data-route'].nodeValue;
  	var dataRoute = e.target.dataRoute;
  	var route = (typeof attributeRoute === "undefined" ? "" : attributeRoute) || (typeof dataRoute === "undefined" ? "" : dataRoute);
  	page.show("/" + route);
  };
  
  app.loadAlbum = function(data, album) {
  	var gallery = document.querySelector('wedding-gallery');
  	return gallery.loadAlbum(album);
  };
  
  app.loadPhoto = function(data, album, photo) {
  	var gallery = document.querySelector('wedding-gallery');
  	return gallery.loadPhoto(album, photo);
  };
  
  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    document.getElementById('mainContainer').scroller.scrollTop = 0;
  };
})(document);
