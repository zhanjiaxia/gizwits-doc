# gizwits-doc
机智云文档中心，逸创·云客服，知识库文档页导航

## 例子

[https://ken.kf5.com/hc/](https://ken.kf5.com/hc/)

## 导航说明

导航只有三级

分区 -> 分类 -> 文章

## 使用方法

将 doc.js 中的代码复制到模板编辑中的"全局JS"中

## 添加说明

暂时以直接修改代码的方式添加

代码所在文件为 doc-nav.js

因为平台限制, 需要使用 js 的方式导入 html, 所有的 html 代码都放置在注释文件中.

### 修改

```html
  <div class="category-nav">
    <!-- 导航名称 -->
    <h3>分类导航</h3>
    <!-- 导航内容(分区列表) -->
    <ul class="category-nav-zones">
      <!-- 分区 -->
      <li class="category-nav-zone">
        <div class="zone-title"><a href="分区链接" title="分区标题">分区标题</a></div>
        <!-- 分区内容(分类列表) -->
        <ul class="category-nav-cates">
          <!-- 分类 -->
          <li class="category-nav-cate">
            <div class="cate-title"><a href="分类链接" title="分类标题">分类标题</a></div>
            <!-- 分类内容(文章列表) -->
            <ul class="category-nav-articles">
              <!-- 文章(1) -->
              <li class="category-nav-article">
                <a href="文章链接" title="文章标题">文章标题</a>
              </li>
              <!-- 文章(2) -->
              <li class="category-nav-article">
                <a href="文章链接" title="文章标题">文章标题</a>
              </li>
            </ul>
          </li>
          ...
        </ul>
      </li>
      ...
    </ul>
  </div>
```

