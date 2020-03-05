// 整个项目的基地址
// const BASE_URL = 'https://39.99.130.177:8000/'
// const BASE_URL = 'https://www.fanyoufu.com/api/'
const BASE_URL = 'http://localhost:8000/'

// 列出所有用过的接口的地址
const APIURLS = {
	// 文章类别
	category_show: BASE_URL + 'category',
	// 文章详情
	article_detail: BASE_URL + 'article',
	// 最新资讯 共5条
	article_lastest: BASE_URL + 'lastest',
	// 文章搜索
	article_search: BASE_URL + 'article_search',
	// 文章按访问量排名
	article_rank: BASE_URL + 'rank',
	// 最新的评论
	comments_lastest: BASE_URL + 'get_latest_comments',
	// 添加评论
	comment_add: BASE_URL + 'post_comment',
	// 获取评论
	comment_get: BASE_URL + 'get_comments'
}

