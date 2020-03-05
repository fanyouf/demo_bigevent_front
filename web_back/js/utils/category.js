var category = {
    show : function( ){
        return $.get(APIURLS.category_show)
    },
    del: function(id){
        return $.post(APIURLS.category_del, {'id':id})
    },
    add: function(name,slug){
        return $.post(APIURLS.category_add, {'name':name,'slug':slug})
    },
    edit: function(id,name,slug){
        return $.post(APIURLS.category_edit, {'id': id, 'name':name,'slug':slug})
    }
}
