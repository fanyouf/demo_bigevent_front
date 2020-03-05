var stat = {
    get_article_count_month: function(){

        return $.get(APIURLS.article_count_month)
    },
    // 文章类型分类汇总
    get_article_category_count: function(){

        return $.get(APIURLS.article_category_count)
    },
    // 统计：月文章访问量
    get_article_count_VisitByMonthAndType: function(){

        return $.get(APIURLS.article_count_VisitByMonthAndType)
    },

    // 统计：文章总计
    get_article_count: function(){
        return $.get(APIURLS.article_count)
    },
   // 统计：文章当日新增
    get_article_count_today: function(){
        return $.get(APIURLS.article_count_today)
    },
    // 统计：评论总计
    get_comment_count: function(){
        return $.get(APIURLS.comment_count)
    },
    // 统计：今日新增评论
    get_comment_countToDay: function(){
        return $.get(APIURLS.comment_countToDay)
    }
}