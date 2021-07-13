<template>
	<div class="element-box">
	<h4>基础用法 </h4>

	<el-row>
	  <el-button>默认按钮</el-button>
	  <el-button type="primary">主要按钮</el-button>
	  <el-button type="success">成功按钮</el-button>
	  <el-button type="info">信息按钮</el-button>
	  <el-button type="warning">警告按钮</el-button>
	  <el-button type="danger">危险按钮</el-button>
	</el-row>
	
	<el-row>
	  <el-button plain>朴素按钮</el-button>
	  <el-button type="primary" plain>主要按钮</el-button>
	  <el-button type="success" plain>成功按钮</el-button>
	  <el-button type="info" plain>信息按钮</el-button>
	  <el-button type="warning" plain>警告按钮</el-button>
	  <el-button type="danger" plain>危险按钮</el-button>
	</el-row>
	
	<el-row>
	  <el-button round>圆角按钮</el-button>
	  <el-button type="primary" round>主要按钮</el-button>
	  <el-button type="success" round>成功按钮</el-button>
	  <el-button type="info" round>信息按钮</el-button>
	  <el-button type="warning" round>警告按钮</el-button>
	  <el-button type="danger" round>危险按钮</el-button>
	</el-row>
	
	<el-row>
	  <el-button icon="el-icon-search" circle></el-button>
	  <el-button type="primary" icon="el-icon-edit" circle></el-button>
	  <el-button type="success" icon="el-icon-check" circle></el-button>
	  <el-button type="info" icon="el-icon-message" circle></el-button>
	  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
	  <el-button type="danger" icon="el-icon-delete" circle></el-button>
	</el-row>
	
	<h5>使用type、plain、round和circle属性来定义 Button 的样式。</h5>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">plain</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">plain</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">plain</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">plain</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">plain</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">plain</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">round</span>&gt;</span>圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">round</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">round</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">round</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">round</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">round</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-search"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-edit"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-check"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-message"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-star-off"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-delete"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	</code></pre>
	
	<h4>禁用状态</h4>
	<el-row>
	  <el-button disabled>默认按钮</el-button>
	  <el-button type="primary" disabled>主要按钮</el-button>
	  <el-button type="success" disabled>成功按钮</el-button>
	  <el-button type="info" disabled>信息按钮</el-button>
	  <el-button type="warning" disabled>警告按钮</el-button>
	  <el-button type="danger" disabled>危险按钮</el-button>
	</el-row>
	
	<el-row>
	  <el-button plain disabled>朴素按钮</el-button>
	  <el-button type="primary" plain disabled>主要按钮</el-button>
	  <el-button type="success" plain disabled>成功按钮</el-button>
	  <el-button type="info" plain disabled>信息按钮</el-button>
	  <el-button type="warning" plain disabled>警告按钮</el-button>
	  <el-button type="danger" plain disabled>危险按钮</el-button>
	</el-row>
	<h5>你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。</h5>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">disabled</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">disabled</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">disabled</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">disabled</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">disabled</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">disabled</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	</code></pre>
	
	
	<h4>文字按钮</h4>
	<el-button type="text">文字按钮</el-button>
	<el-button type="text" disabled>文字按钮</el-button>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">disabled</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	</code></pre>
	
	<h4>图标按钮</h4>
	<h5>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</h5>
	<el-button type="primary" icon="el-icon-edit"></el-button>
	<el-button type="primary" icon="el-icon-share"></el-button>
	<el-button type="primary" icon="el-icon-delete"></el-button>
	<el-button type="primary" icon="el-icon-search">搜索</el-button>
	<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
	<h5>设置icon属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用i标签即可，可以使用自定义图标。</h5>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-share"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-delete"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-search"</span>&gt;</span>搜索<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>上传<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-upload el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	</code></pre>
	
	<h4>按钮组</h4>
	<h5>点击按钮后进行数据加载操作，在按钮上显示加载状态。</h5>
	
	<el-button-group>
	  <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
	  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
	</el-button-group>
	
	<el-button-group>
	  <el-button type="primary" icon="el-icon-edit"></el-button>
	  <el-button type="primary" icon="el-icon-share"></el-button>
	  <el-button type="primary" icon="el-icon-delete"></el-button>
	</el-button-group>
	<p>使用<code>&lt;el-button-group&gt;</code>标签来嵌套你的按钮。</p>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-button-group</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-arrow-left"</span>&gt;</span>上一页<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>下一页<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-arrow-right el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-button-group</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button-group</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-share"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-delete"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-button-group</span>&gt;</span>
	</code></pre>
	
	<h4>按钮组</h4>
	<h5>要设置为 loading 状态，只要设置loading属性为true即可。</h5>
	<el-button type="primary" :loading="true">加载中</el-button>
	<p>要设置为 loading 状态，只要设置<code>loading</code>属性为<code>true</code>即可。</p>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">"true"</span>&gt;</span>加载中<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	</code></pre>
	
	
	<h4>不同尺寸</h4>
	<h5>额外的尺寸：medium、small、mini，通过设置size属性来配置它们。</h5>

	<el-row>
	  <el-button>默认按钮</el-button>
	  <el-button size="medium">中等按钮</el-button>
	  <el-button size="small">小型按钮</el-button>
	  <el-button size="mini">超小按钮</el-button>
	</el-row>
	<el-row>
	  <el-button round>默认按钮</el-button>
	  <el-button size="medium" round>中等按钮</el-button>
	  <el-button size="small" round>小型按钮</el-button>
	  <el-button size="mini" round>超小按钮</el-button>
	</el-row>
	<h5>额外的尺寸：medium、small、mini，通过设置size属性来配置它们。</h5>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>中等按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>小型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span>&gt;</span>超小按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">round</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span> <span class="hljs-attr">round</span>&gt;</span>中等按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">round</span>&gt;</span>小型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">round</span>&gt;</span>超小按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
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

<style scoped="">
	
</style>
