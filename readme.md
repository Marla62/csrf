get的跨站点伪造攻击
新开一个80服务，做两件事
1 被访问后返回setcookie的动作
2 新增接口，当访问时返回用户的私密信息 http://localhost/getUserInfo

新开一个81服务，新建html文件
内容：img.src = 'http://localhost/getUserInfo'
通过此接口如果返回了用户的私密信息那么表示跨站伪造攻击成功
