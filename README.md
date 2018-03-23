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
        5.JQuery选择器通过click事件获取当前点击对象
        $(this)  或者 $(event.target)
        6. $pages.css("background","white")
           $(target).css('background','red')
                        在JS中修改样式，会对元素的：hover中的样式进行覆盖
        7.index(); get(index)方法   
        8.$(template('comments',{comments:data})).appendTo($('#pl'))
        9.时间过滤器的使用
          template.defaults.imports.dateFormat = function(date, format){
              return moment(date).format(format);
          };
         
###day04

    完成进度：
        1.jQuery项目完成 
    今日收获：
        1.完成了头部动画
            通过添加css样式实现。
        2.实现页面跳转
        1).在原来的窗体中直接跳转用
        onClick="window.location.href='你所要跳转的页面';"
        
        2)、在新窗体中打开页面用：
        onclick="window.open('你所要跳转的页面')"
        
        3)、返回上一页 （ 本地测试无效，服务器上可用）
        window.history.back(-1);
        <a onclick="javascript:history.back(1);" href="#">返回</a>
        <a href="javascript:history.go(-1)">返回上一页</a>
        <a href="<%=Request.ServerVariables("HTTP_REFERER")%>">返回上一页</a>
        
        4)、一些用法
        按钮式：
        <INPUT name="pclog" type="button" value="ztffei的博客" onClick="location.href='连接地址'">
        直接跳转式：
        <script>window.location.href='连接地址';</script>
        开新窗口：
        <a href="javascript:" onClick="window.open('连接地址','','height=500,width=611,scrollbars=yes,status =yes')">123</a>
        
        自动打开<SCRIPT>
        <!--
        window.open('连接地址','newwindow','height=100,width=400,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no') //写成一行
        -->
        </SCRIPT>
        
        脚本运行后，'连接地址' 将在新窗体newwindow中打开，宽为100，高为400，距屏顶0象素，屏左0象素，无工 具条，无菜单条，无滚动条，不可调整大小，无地址栏，无状态栏。请对照。


  
