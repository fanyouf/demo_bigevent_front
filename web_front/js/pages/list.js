
require.config({
    // 相对于入口文件的路径
    paths: {
        jquery: '../jquery-1.12.4.min',
        template: '../template-web',
        bootstrap: '../bootstrap.min',
        category: '../utils/category',
        article: '../utils/article',
        lazyload: '../lazyload',
        twbsPagination: '../jquery.twbsPagination',
        bootbox: 'https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.3.3/bootbox.min'
    }
});

require(['jquery', 'template', 'bootstrap', 'category', 'article', 'lazyload', 'twbsPagination', 'bootbox'], function ($, template, bootstrap, category, article, lazyload, twbsPagination, bootbox) {
    bootbox.alert('1sdfsd')
    //你的代码
    // console.log( lazyload )
    var curPage = 1
    var curTotalPage = -1;
    var id = location.search.substr(4);

    function getAndShow() {
        article.getList({ type: id, page: curPage }).then(function (res) {
            if (res.code === 200) {
                var htmlStr = template('temp_list', res)
                console.log(htmlStr);
                $('#common_news_list').html(htmlStr);
                // lazyload()
                $("img.lazyload").lazyload();
                if (curTotalPage != res.pages) {
                    $('#pagination').twbsPagination('destroy');
                    curTotalPage = res.pages
                }
                $("#pagination").twbsPagination({
                    // startPage:1,
                    // page:curPage,
                    totalPages: res.pages,
                    initiateStartPageClick: false,
                    visiblePages: 7,
                    first: '首页',
                    prev: '上一页',
                    next: '下一页',
                    last: '尾页',
                    onPageClick: function (event, page) {
                        // 点击页码：
                        // 1. 更新全局变量
                        // console.log(event,page);
                        curPage = page
                        // 2. 重新请求
                        getAndShow()
                    }
                });
            }
        })
    }

    article.getRank({ type: id }, res => {
        if (res.code === 200) {
            var htmlStr = template("temp_rank", res);
            $("#rank_list").html(htmlStr)
        }
    })

    // // 获取文章类别，并显示
    category.show().then(res => {
        if (res.code === 200) {
            // 模板引擎来 渲染数据
            res.cur = id
            res.data.length = 8
            var htmlStr = template("temp_cate", res);
            console.log(htmlStr);
            $("#left_menu").html(htmlStr)
            $("#level_two").html('<li class="up"></li>' + htmlStr)
            let rs = res.data.find(it => it.id == id)
            if (!rs) {
                return;
            }
            $('#cate_title').html(rs.name)
            getAndShow()
        }
    })
});