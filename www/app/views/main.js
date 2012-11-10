define(['backbone','text!templates/main.html'], 
function(Backbone, mainViewTemplate){

  var MainView = Backbone.View.extend({

    //initialize template
    template:_.template(mainViewTemplate),
    
    //render the content into div of view 
    render: function(){
	  //this.el is the root element of Backbone.View. By default, it is a div.    
      //$el is cached jQuery object for the view's element.
      //append the compiled template into view div container
      this.$el.append(this.template());

      //return to enable chained calls
      return this;
    }
  });
  return MainView;
});