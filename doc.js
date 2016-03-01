// 自定义脚本，添加文档分类导航
(function ($) {

// 是否在文档页，不在文档页则不执行
if (location.pathname.indexOf('/hc/kb/article') !== 0) {
  return
}

var cssHref = 'https://raw.githubusercontent.com/zhanjiaxia/gizwits_doc/master/doc-nav.css'
var jsSrc = 'https://raw.githubusercontent.com/zhanjiaxia/gizwits_doc/master/doc-nav.js'

var $head = $('head').eq(0)
var cacheBuster = function (uri) { return uri + '?' + Math.random() }

// set style
$.ajax(cacheBuster(cssHref)).success(function (style) {
  $head.append('<style>'+ style +'</style>')
})

// set javascript
$.ajax(cacheBuster(jsSrc)).success(function (src) {
  eval(src)
})

})(jQuery)