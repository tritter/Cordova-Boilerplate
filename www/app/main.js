require.config({
	baseUrl: 'lib',
    //path mappings for module names not found directly under baseUrl
    paths: {
    	app:			'../app/app',
    	router:			'../app/router',
        jquery:     	'../lib/jquery/jquery-1.8.2.min',
        jqmconfig:		'jqm/jqm-config',
        jqm:     		'jqm/jquery.mobile-1.2.0.min', 
        underscore: 	'underscore/underscore-1.4.1.min',
        backbone:   	'backbone/backbone-0.9.2.min',
        text:       	'require/text-2.0.3.min',
        models:      	'../app/models',
        collections:	'../app/collections',
        views:			'../app/views',
        templates:		'../app/templates'
        
    },
      shim: {
          underscore: {
            exports: "_"
          },
          backbone: {
              //These script dependencies should be loaded before loading
              //backbone.js
              deps: ['jquery', 'jqm', 'underscore'],
              //Once loaded, use the global 'Backbone' as the
              //module value.
              exports: 'Backbone'
          },
          jqmconfig: ['jquery'],
          jqm: ['jquery','jqmconfig']
        }

});

define(['app','jqmconfig'], function(app) {
       $(document).ready(function() {
       		console.log("DOM IS READY");// Handler for .ready() called.
       });
       app.initialize();
       });