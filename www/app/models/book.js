define(['backbone'],
	function(Backbone){

	var Book=Backbone.Model.extend({
    //default attributes 
		defaults:{
			id:"",
			name:'',
			category:''
		}
	});

	return Book;
});

