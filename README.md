1.art-template看一下官网
2.gulp  同步异步
###day01
   ######PC端多页面网站 到位
   1.完成进度
       完成头部，轮播图和二级菜单
       在webstrom中设置了less自动编译为css文件配置
   2.遇到的问题及解决方案
       1）.浏览器窗口压缩时，头部数据会出现挤压状况。
       使用媒体查询对浏览器窗口进行监控。
       2）.二级菜单出现的位置不对 
       改为相对于一级菜单的ul，进行绝对定位。
       3).内容区 flex 布局，屏幕缩小，导致布局异常
       white-space:nowarp
###day02

    完成进度：
    1.完成了首页，服务商页面，服务项目详情页三个静态页面
    2.今天进度较慢，晚上争取把静态页写完，开始设置服务器
    遇到的问题：
    1.gulp工作流设置压缩图片的配置，总是报错（尚未解决）
    2.express服务器配置流程遗忘了，需要再仔细看看。
    3.同时开启前台和后台时，获取数据需要跨域请求
          使用了gulp-connect的一个插件
          gulp-connect-proxy,
    1）下载模块并引入：      
    var Proxy = require('gulp-connect-proxy');      
    2） //配置服务器选项
          connect.server({
              root:'public/',
              livereload:true,
              port:5000,
              middleware: function (connect, opt) {
                  opt.route = '/proxy';
                  var proxy = new Proxy(opt);
                  return [proxy];
              }
          });
    3）此时需要将请求路径写为
          "http://localhost:5000/proxy/localhost:3000/"
          来进行跨域请求。
          
    4）  
    
###day03
    
    完成进度：
        1.四个静态页面完成，还有数据获取写到翻页效果。
    遇到的问题：    
        1.响应式布局，很所高宽都设置的百分比，可以通过给body设置
        最大宽度与最小宽度
        body{
          min-width: 1200px;
          max-width: 1200px;
        }
        2.头部还未实现翻转效果
         两种解决方式：
         1）transition样式与display：inline-block 要添加一定的延迟
         2）强制数据回流
        3.二级菜单使用toggle实现//使用hover函数也可以

        4.异步获取时有时间延迟问题。。。
        一些对于数据的操作，可以放在数据获取的回调函数中。

    未完成任务:
    1.学习使用模板
    2.头部出现时的翻转效果！！！   
                6.数据库，插入数据的问题，插入的判断？？！！
               7.懒加载，逐渐显示的效果？？

   
问题汇总 共性的问题
操作数据库



  
