define(['jquery', 'underscore', 'backbone','views/main', 'views/collection',
            'collections/books',
            'views/books',            
            'jqm'], 
	function($, _, Backbone,MainView, CollectionView, BookCollection,BookListView) {

    'use strict';
    var Router = Backbone.Router.extend({
    //define routes and mapping route to the function
        routes: {
        	'':    'showMain',
        	'collection':	   'showCollection',
        	'home': 'showHome',         //home view as well
            'list/:categoryId' : 'showBooks',
            '*actions': 'defaultAction' //default action,mapping "/#anything"       	
        },

	    defaultAction: function(actions){
	    	this.showMain();
	    },
	    
	    showMain:function(actions){
			var mainView=new MainView();
	    	mainView.render();
	    	this.changePage(mainView);		
	    },
	    
	    showCollection:function(actions){
		    var collectionView=new CollectionView();
		    collectionView.render();
		    this.changePage(collectionView);
	    },

	    showHome:function(actions){
		console.log("show home");
	    	// will render home view and navigate to homeView
	    	var homeView=new HomeView();
	    	homeView.render();
	    	this.changePage(homeView);
	    },

        init:true,

        showBooks:function(categoryId){
            //create a collection
            var bookList=new BookCollection();
            //create book list view and pass bookList as the collection of the view
            var bookListView=new BookListView({collection:bookList});
            //need to pass this as context 
            bookListView.bind('renderCompleted:Books',this.changePage,this);
            //update view
            bookListView.update(categoryId);
        },

        //1. changePage will insert view into DOM and then call changePage to enhance and transition
        //2. for the first page, jQuery mobile will present and enhance automatically
        //3. for the other page, we will call $.mobile.changePage() to enhance page and make transition
        //4. argument 'view' is passed from event trigger
        changePage:function (view) {
        	//add the attribute 'data-role="page" ' for each view's div
    		view.$el.attr('data-role', 'page');   
            //append to dom
        	$('body').append(view.$el);  
			console.log('append');
            if(!this.init){  
	 			console.log($(view.el));
                $.mobile.changePage($(view.el), {changeHash:false});
            }else{   
				 $.mobile.changePage($(view.el), {changeHash:false});
                this.init = false;
            }            
    	}       

    });

    return Router;
});




