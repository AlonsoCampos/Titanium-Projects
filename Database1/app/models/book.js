/**
 * @author Desarrollo Web Studio
 */
exports.definition = {
    config: {
        "columns": {
            "title": "TEXT",
            "author": "TEXT"
        },
        "defaults": {
            "title": "-",
            "author": "-"
        },
        "adapter": {
            "type": "sql",
            "collection_name": "books",
            "idAttribute": "title"
        }
    },

    extendModel: function(Model) {		
        _.extend(Model.prototype, {
            // Implement the validate method						
            validate: function (attrs) {
    	        for (var key in attrs) {
                    var value = attrs[key];
                    if (key === "title") {
                        if (value.length <= 0) {
                            return "Error: No title!";
                        }
                    }
                    if (key === "author") {
                        if (value.length <= 0) {
                            return "Error: No author!";
                        }	
                    }	
                }
            },
            // Extend Backbone.Model
            customProperty: 'book',
            customFunction: function() {
                Ti.API.info('I am a book model.');
            },	
        });
		
        return Model;
    },

    extendCollection: function(Collection) {		
        _.extend(Collection.prototype, {
			
            // Implement the comparator method.
    	    comparator : function(book) {
        	    return book.get('title');
            }

        }); // end extend
		
        return Collection;
    }
};