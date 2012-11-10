define(['jquery', 'underscore', 'backbone','models/book'],
       function ($, _, Backbone, Book){

        var Books=Backbone.Collection.extend({

          // Book is the model of the collection
          model:Book,

          //fetch data from books.json using Ajax 
          //and then dispatch customized event "fetchCompleted:Books"
          fetch:function(categoryId){
            var self=this;
            var tmpItem;
            //fetch the data using ajax
            var jqxhr = $.getJSON("data/category" + categoryId+".json")
              .success(function(data, status, xhr) { 
                $.each(data, function(i,item){
                  //create book for each item and then insert into the collection
                  tmpItem=new Book({id:item.id,category:categoryId,name:item.name});
                  self.add(tmpItem);
                });
                //dispatch customized event
                self.trigger("fetchCompleted:Books");
              })
              .error(function() { alert("error"); })
              .complete(function() {
                    console.log("fetch complete + " + this);
              });
          }
  });

  return Books;
});


