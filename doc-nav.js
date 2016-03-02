(function ($) {

var template = (function () {/*
  <div class="category-nav">
    <h3>开发文档</h3>
    <ul class="category-nav-zones">
      <li class="category-nav-zone">
        <div class="zone-title"><a href="https://ken.kf5.com/hc/kb/category/20531/" title="帮助支持">开发文档</a></div>
        <ul class="category-nav-cates">
          <li class="category-nav-cate">
            <div class="cate-title"><a href="https://gizwits.kf5.com/hc/kb/article/135399/" title="IOS APP开发">IOS APP开发</a></div>
            <ul class="category-nav-articles">
              <li class="category-nav-article">
                <a href="https://gizwits.kf5.com/hc/kb/article/135399/" title="概述">概述</a>
              </li>
              <li class="category-nav-article">
                <a href="https://gizwits.kf5.com/hc/kb/article/138223/" title="SDK说明">SDK说明</a>
              </li>
               <li class="category-nav-article">
                <a href="https://gizwits.kf5.com/hc/kb/article/138220/" title="ErrorCode说明">ErrorCode说明</a>
              </li>
              <li class="category-nav-article">
                <a href="https://gizwits.kf5.com/hc/kb/article/138222/" title="IOS app开发过程中的FAQ">FAQ</a>
              </li>
            </ul>
          </li>
          <li class="category-nav-cate">
            <div class="cate-title"><a href="https://ken.kf5.com/hc/kb/section/79598/" title="Android开发">Android开发</a></div>
            <ul class="category-nav-articles">
              <li class="category-nav-article">
                <a href="https://ken.kf5.com/hc/kb/article/137212/" title="概述">概述</a>
              </li>
              <li class="category-nav-article">
                <a href="https://ken.kf5.com/hc/kb/article/137213/" title="SDK">SDK</a>
              </li>
              <li class="category-nav-article">
                <a href="https://ken.kf5.com/hc/kb/article/137214/" title="ErrorCode">ErrorCode</a>
              </li>
              <li class="category-nav-article">
                <a href="https://ken.kf5.com/hc/kb/article/137214/" title="FAQ">FAQ</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="category-nav-zone">
        
        <ul class="category-nav-cates">
          <li class="category-nav-cate">
            <div class="cate-title"><a href="https://ken.kf5.com/hc/kb/section/79596/" title="H5应用开发">H5应用开发</a></div>
            <ul class="category-nav-articles">
              <li class="category-nav-article">
                <a href="https://gizwits.kf5.com/hc/kb/article/138270/" title="概述">概述</a>
              </li>
              <li class="category-nav-article">
                <a href="https://gizwits.kf5.com/hc/kb/article/138294/" title="概述">API说明</a>
              </li>
               <li class="category-nav-article">
                <a href="https://gizwits.kf5.com/hc/kb/article/138270/" title="js调用的范例">示例</a>
              </li>
               <li class="category-nav-article">
                <a href="https://gizwits.kf5.com/hc/kb/article/138296/" title="FAQ">FAQ</a>
              </li>
              
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
*/}).toString().split('\n').slice(1, -1).join('\n')

var href = location.href

$('.content-sidebar').prepend(template).find('a').each(function () {
  var $this = $(this)
  if (href.indexOf($this.attr('href')) === 0) {
    $this.addClass('selected-article')
    return false
  }
})

})(jQuery)
