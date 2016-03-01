(function ($) {

var template = (function () {/*
  <div class="category-nav">
    <h3>分类导航</h3>
    <ul class="category-nav-zones">
      <li class="category-nav-zone">
        <div class="zone-title"><a href="https://ken.kf5.com/hc/kb/category/20531/" title="帮助支持">帮助支持</a></div>
        <ul class="category-nav-cates">
          <li class="category-nav-cate">
            <div class="cate-title"><a href="https://ken.kf5.com/hc/kb/section/79597/" title="使用说明">使用说明</a></div>
            <ul class="category-nav-articles">
              <li class="category-nav-article">
                <a href="https://ken.kf5.com/hc/kb/article/137218/" title="代码测试文档">代码测试文档</a>
              </li>
              <li class="category-nav-article">
                <a href="https://ken.kf5.com/hc/kb/article/137211/" title="您的帮助中心已经建立成功">您的帮助中心已经建立成功</a>
              </li>
            </ul>
          </li>
          <li class="category-nav-cate">
            <div class="cate-title"><a href="https://ken.kf5.com/hc/kb/section/79598/" title="常见问题">常见问题</a></div>
            <ul class="category-nav-articles">
              <li class="category-nav-article">
                <a href="https://ken.kf5.com/hc/kb/article/137212/" title="文章分区和分类是干什么用的？">文章分区和分类是干什么用的？</a>
              </li>
              <li class="category-nav-article">
                <a href="https://ken.kf5.com/hc/kb/article/137213/" title="我将如何自定义前台界面？">我将如何自定义前台界面？</a>
              </li>
              <li class="category-nav-article">
                <a href="https://ken.kf5.com/hc/kb/article/137214/" title="我还有其他问题如何解决？">我还有其他问题如何解决？</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="category-nav-zone">
        <div class="zone-title"><a href="https://ken.kf5.com/hc/kb/category/20536/" title="DEMO-分区">DEMO-分区</a></div>
        <ul class="category-nav-cates">
          <li class="category-nav-cate">
            <div class="cate-title"><a href="https://ken.kf5.com/hc/kb/section/79596/" title="公告与新闻">公告与新闻</a></div>
            <ul class="category-nav-articles">
              <li class="category-nav-article">
                <a href="https://ken.kf5.com/hc/kb/article/137210/" title="欢迎来到您的帮助中心">欢迎来到您的帮助中心</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
*/}).toString().split('\n').slice(1, -1).join('\n')

var href = location.href

$('.content-sidebar').append(template).find('a').each(function () {
  var $this = $(this)
  if (href.indexOf($this.attr('href')) === 0) {
    $this.addClass('selected-article')
    return false
  }
})

})(jQuery)