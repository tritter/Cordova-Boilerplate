define(['jquery','underscore', 'backbone','router'],function($, _, Backbone,Router) {
	'use strict';
	var init=function(){
		//create backbone router
		var router=new Router();
		Backbone.history.start();
	};
    return{
	    initialize:init
    }
});

