var comment = {
    // 作用：获取第curPage页，类型是tpype,状态是state 的数据 
    show: function(curPage,type,state){
        // 根据接口的定义，要请哪一页的数据，就传对应的值给page
        return $.get(APIURLS.comment_show,
            {
                page: curPage,
                typeId:type,
                state
            })
    },
    // 删除评论
    del: function(id){
        return $.post(APIURLS.comment_del,{id})
    },
    
    // 更新评论状态
    modState: function(id,m_state){
        return $.ajax({
            url: APIURLS.comment_mod,
            type: 'post',
            data: {id,m_state}
        })
    },

}