require.config({
    // 相对于入口文件的路径
    paths: {
          jquery: '../jquery-1.12.4.min',
          template: '../template-web',
          bootstrap: '../bootstrap/js/bootstrap.min',
          category: '../utils/category',
          article: '../utils/article'
    }
  });
  
require(['jquery', 'template', 'bootstrap', 'category', 'article'], function($, template, bootstrap, category, article) {
 
    //你的代码
    alert(1)
    getAndShow()

        // 加载并显示类别
        function getAndShow() {
            category.show().then(function(res){
            // res 就是从服务器中获取的数据
            // console.log(res);
            if(res.code === 200){
                // res:{code, data:[]}
                // 把数据拼接成html字符串，显示在tbody中
                // var htmlStr = template('id',数据)
                var htmlStr = template("temp", res)
                console.log(htmlStr);
                // 显示在dom容器中
                $('#cateContainer').html(htmlStr)
            }
        })
        }
        
    
        // 删除
        // $(容器).on(事件名， 委托人，回调)
        $('#cateContainer').on('click', '.del', function(){
            if(window.confirm('确定要删除吗？') === false){
                // 取消删除 
                return;
            }
            // 获取自定义属性
            var id = $(this).attr('data-id')
            console.log(id);
            category.del(id).then(res=>{
                // console.log(res);
                let {code, msg} = res;
                if(code === 200){
                    // 删除成功
                    // 1. 直接在页面上删除dom节点（有可能会导致数据不同步）
                    //    方法一，不使用。
                    //    用第二种方法
                    // 2. 重新获取数据
                    getAndShow()
                } else {
                    alert(msg)
                }
            }) 
        })
    
        // 编辑 - 显示模态框
        $('#cateContainer').on('click', '.edit',function(){
            // 获取当前编辑的类别信息
            // 获取自定义属性
            var id = $(this).attr('data-id')
            var name = $(this).attr('data-name')
            var slug = $(this).attr('data-slug')
            console.log(id,name, slug);

            // 显示编辑模态框
            $('#editModal').modal('show')

            // 并且显示当前编辑的类别的数据
            $('#cate-edit-id').val( id )
            $('#cate-edit-name').val( name )
            $('#cate-edit-slug').val( slug )
        })

        // 编辑 -  保存
        $('#model_save').click(function(){
            // 获取用户填入的信息
            var id = $('#cate-edit-id').val().trim()
            var name = $('#cate-edit-name').val().trim()
            var slug = $('#cate-edit-slug').val().trim()
            // 简单判断是否为空
            if(name === '' || slug === ''){
                alert('不能为空')
                return;
            }
            console.log(id,name,slug);
            // 发请求
            category.edit(id,name,slug).then(function(res){
                if(res.code === 200){
                    // 修改成功
                    // 1. 重新请求，更新页面
                    getAndShow()
                    // 2. 隐藏模态框
                    $('#editModal').modal('hide');
                }
            })
        })

        // 添加
        $('#model_add').click(function(){
            // 获取用户填入的信息
            var name = $('#cate-name').val().trim()
            var slug = $('#cate-slug').val().trim()
            // 简单判断是否为空
            if(name === '' || slug === ''){
                alert('不能为空')
                return;
            }
            console.log(name,slug);
            
            // 发请求
            // alert('add');
            category.add(name,slug).then(function(res){
                if(res.code === 200){
                    // 添加成功
                    // 1. 重新请求数据
                    getAndShow()
                    // 2. 清空input框
                    $('#cate-name').val('')
                    $('#cate-slug').val('')
                    // 3.模态框隐藏
                    $('#addModal').modal('hide');
                } else {
                    alert(res.msg)
                }
            } )
        });
        // 新增-关闭按钮
        $('#model_shutoff').click(function(){
            $('#cate-name').val('')
            $('#cate-slug').val('')
            $('#addModal').modal('hide');
          });
  
  });