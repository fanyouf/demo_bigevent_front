
// 用户的操作
var user = {
    logout:  () => $.post(APIURLS.user_logout), 

    login: (myName, myPassword) => {
        // console.log(myName,myPassword)
        return $.post(APIURLS.user_login,
            {
                user_name: myName, 
                password:myPassword
            }
        )
    },
    getInfo: () => {
        return $.get(APIURLS.user_getInfo)
    },
    modInfo: (fd)=> {
        // $.get(地址，参数，回调)
        return $.ajax(
            {
                url:APIURLS.user_modInfo,
                type:"post",
                processData: false, // 不要让jquery去处理formdata数据
                contentType: false, // 不要使用默认的请求头
                data:fd
            })
    }
}