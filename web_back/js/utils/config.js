// 整个项目的基地址
var baseUrl = 'http://localhost:8000/'

// 列出所有用过的接口的地址
var APIURLS = {
   // 用户登出
   user_logout: baseUrl + 'admin/logout',
   // 用户登出
   user_login: baseUrl + 'admin/login',
   // 获取用户信息
   user_getInfo: baseUrl + 'admin/getuser',
   // 编辑用户信息
   user_modInfo: baseUrl + 'admin/edituser',

   // 搜索分类
   category_show: baseUrl + 'admin/category_sel',
   
   category_add: baseUrl + 'admin/category_add',
   // 删除分类
   category_del: baseUrl + 'admin/category_del',
   
   category_edit: baseUrl + 'admin/category_mod',

   article_show: baseUrl + 'admin/article_sel',
   article_del: baseUrl + 'admin/article_del',
   article_add: baseUrl + 'admin/article_add',
   article_edit: baseUrl + 'admin/article_mod',
   article_modState: baseUrl + 'admin/article_modstate',
   // 评论
   comment_show:baseUrl +'admin/comment_sel',
   comment_mod:baseUrl +'admin/comment_mod',
   comment_del:baseUrl +'admin/comment_del',


   
   // 统计：文章总计
   article_count: baseUrl + 'admin/article_count',

   // 统计：文章当日新增
   article_count_today: baseUrl + 'admin/article_count_today',

   // 统计：评论总计
   comment_count: baseUrl + 'admin/comment_count',

   // 统计：今日新增评论
   comment_countToDay: baseUrl + 'admin/comment_countToDay',

   // 统计：本月内新增文章数
   article_count_month: baseUrl + 'admin/article_count_month',

   // 统计：文章类型分类汇总
   article_category_count: baseUrl + 'admin/article_category_count',

   // 统计：月文章访问量
   article_count_VisitByMonthAndType: baseUrl + 'admin/article_count_VisitByMonthAndType',
   
}

// 统一设置跨域cookie
// 统一设置错误处理
$.ajaxSetup({
   crossDomain: true,
   xhrFields: {
         withCredentials: true
     },
   complete(xhr,ts){
      // console.dir(xhr)
      // console.dir(ts)
      if(xhr.status===401){
         top.location="/web_back/login.html"
      }
   }
});