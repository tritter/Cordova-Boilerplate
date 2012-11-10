define(['backbone', 'text!templates/book.html'],
       function (Backbone, bookViewTemplate) {
  'use strict';

  var BookListView = Backbone.View.extend({
    
    template: _.template(bookViewTemplate),
    
    update:function(categoryId){
      //set callback of the event "fetchCompleted:Books" 
      this.collection.bind('fetchCompleted:Books',this.render,this);
      this.collection.fetch(categoryId);
    },

    render: function(){
      this.$el.empty();
      //compile template using the data fetched by collection
      this.$el.append(this.template({data:this.collection.toJSON()}));
      this.trigger("renderCompleted:Books",this);
      return this;
    }
  });
  
  return BookListView;
});


