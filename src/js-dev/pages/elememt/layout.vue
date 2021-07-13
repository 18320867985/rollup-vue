<template>
	<div class="element-box">
	<h4>基础用法</h4>
	<el-row>
	  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<h5>通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。</h5>
	<pre>
	<code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"24"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-dark"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined">
	  .el-row {
	    margin-bottom: 20px;
	    &amp;:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #d3dce6;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	  }
	</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
	</code></pre>
	
	<h4>分栏间隔</h4>
	<h5>分栏之间存在间隔</h5>
	<el-row :gutter="20">
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<h5>Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。</h5>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	</code></pre>
	
	 <h4>混合布局</h4>
	<h5>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</h5>	
	<el-row :gutter="20">
	  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row :gutter="20">
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row :gutter="20">
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	
	<h4>分栏偏移</h4>
	<h5>支持偏移指定的栏数。</h5>
	<el-row :gutter="20">
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row :gutter="20">
	  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row :gutter="20">
	  <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<h5>通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。</h5>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	</code></pre>
	
	<h4>对齐方式	</h4>
	<h5>通过 flex 布局来对分栏进行灵活的对齐。</h5>
	<el-row type="flex" class="row-bg">
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row type="flex" class="row-bg" justify="center">
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row type="flex" class="row-bg" justify="end">
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row type="flex" class="row-bg" justify="space-between">
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row type="flex" class="row-bg" justify="space-around">
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<h5>将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。</h5>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row-bg"</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row-bg"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"center"</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row-bg"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"end"</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row-bg"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"space-between"</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row-bg"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"space-around"</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	</code></pre>
	<h4>响应式布局 </h4>
	<h5>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。</h5>
	<el-row :gutter="10">
	  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"10"</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:xs</span>=<span class="hljs-string">"8"</span> <span class="hljs-attr">:sm</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:md</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">:lg</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">:xl</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:xs</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">:sm</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:md</span>=<span class="hljs-string">"8"</span> <span class="hljs-attr">:lg</span>=<span class="hljs-string">"9"</span> <span class="hljs-attr">:xl</span>=<span class="hljs-string">"11"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:xs</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">:sm</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:md</span>=<span class="hljs-string">"8"</span> <span class="hljs-attr">:lg</span>=<span class="hljs-string">"9"</span> <span class="hljs-attr">:xl</span>=<span class="hljs-string">"11"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:xs</span>=<span class="hljs-string">"8"</span> <span class="hljs-attr">:sm</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:md</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">:lg</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">:xl</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
	  <span class="hljs-selector-class">.el-col</span> {
	    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
	  }
	  <span class="hljs-selector-class">.bg-purple-dark</span> {
	    <span class="hljs-attribute">background</span>: <span class="hljs-number">#99a9bf</span>;
	  }
	  <span class="hljs-selector-class">.bg-purple</span> {
	    <span class="hljs-attribute">background</span>: <span class="hljs-number">#d3dce6</span>;
	  }
	  <span class="hljs-selector-class">.bg-purple-light</span> {
	    <span class="hljs-attribute">background</span>: <span class="hljs-number">#e5e9f2</span>;
	  }
	  <span class="hljs-selector-class">.grid-content</span> {
	    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
	    <span class="hljs-attribute">min-height</span>: <span class="hljs-number">36px</span>;
	  }
	</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
	</code></pre>
	
	</div>
</template>

<script>
	export default{
		data(){
			return {
			val:"elementUI dev "
			}
		}
	}
</script>
<style>
	
	  .el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #d3dce6;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	  }
</style>


