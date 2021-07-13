<template>
	<div class="element-box">
	<h4>Container 布局容器</h4>
	
	<h5>用于布局的容器组件，方便快速搭建页面的基本结构：</h5>
	<p><code>&lt;el-container&gt;</code>：外层容器。当子元素中包含 <code>&lt;el-header&gt;</code> 或 <code>&lt;el-footer&gt;</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。</p>
	<p><code>&lt;el-header&gt;</code>：顶栏容器。</p>
	<p><code>&lt;el-main&gt;</code>：主要区域容器。</p>
	<p><code>&lt;el-footer&gt;</code>：底栏容器。</p>
	<el-container>
	  <el-header>Header</el-header>
	  <el-main>Main</el-main>
	</el-container>
	
	<el-container>
	  <el-header>Header</el-header>
	  <el-main>Main</el-main>
	  <el-footer>Footer</el-footer>
	</el-container>
	
	<el-container>
	  <el-aside width="200px">Aside</el-aside>
	  <el-main>Main</el-main>
	</el-container>
	
	<el-container>
	  <el-header>Header</el-header>
	  <el-container>
	    <el-aside width="200px">Aside</el-aside>
	    <el-main>Main</el-main>
	  </el-container>
	</el-container>
	
	<el-container>
	  <el-header>Header</el-header>
	  <el-container>
	    <el-aside width="200px">Aside</el-aside>
	    <el-container>
	      <el-main>Main</el-main>
	      <el-footer>Footer</el-footer>
	    </el-container>
	  </el-container>
	</el-container>
	
	<el-container>
	  <el-aside width="200px">Aside</el-aside>
	  <el-container>
	    <el-header>Header</el-header>
	    <el-main>Main</el-main>
	  </el-container>
	</el-container>
	
	<el-container>
	  <el-aside width="200px">Aside</el-aside>
	  <el-container>
	    <el-header>Header</el-header>
	    <el-main>Main</el-main>
	    <el-footer>Footer</el-footer>
	  </el-container>
	</el-container>
	<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">el-main</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">el-main</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-footer</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span class="hljs-name">el-footer</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span class="hljs-name">el-aside</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">el-main</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	    <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span class="hljs-name">el-aside</span>&gt;</span>
	    <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">el-main</span>&gt;</span>
	  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	    <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span class="hljs-name">el-aside</span>&gt;</span>
	    <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	      <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">el-main</span>&gt;</span>
	      <span class="hljs-tag">&lt;<span class="hljs-name">el-footer</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span class="hljs-name">el-footer</span>&gt;</span>
	    <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span class="hljs-name">el-aside</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	    <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
	    <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">el-main</span>&gt;</span>
	  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span class="hljs-name">el-aside</span>&gt;</span>
	  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
	    <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
	    <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">el-main</span>&gt;</span>
	    <span class="hljs-tag">&lt;<span class="hljs-name">el-footer</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span class="hljs-name">el-footer</span>&gt;</span>
	  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
	
	<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
	  <span class="hljs-selector-class">.el-header</span>, <span class="hljs-selector-class">.el-footer</span> {
	    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#B3C0D1</span>;
	    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
	    <span class="hljs-attribute">text-align</span>: center;
	    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">60px</span>;
	  }
	  
	  <span class="hljs-selector-class">.el-aside</span> {
	    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#D3DCE6</span>;
	    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
	    <span class="hljs-attribute">text-align</span>: center;
	    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">200px</span>;
	  }
	  
	  <span class="hljs-selector-class">.el-main</span> {
	    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#E9EEF3</span>;
	    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
	    <span class="hljs-attribute">text-align</span>: center;
	    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">160px</span>;
	  }
	  
	  <span class="hljs-selector-tag">.el-container</span>+<span class="hljs-selector-class">.el-container</span> {
	    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">20px</span>;
	  }
	  
	  <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(5)</span> <span class="hljs-selector-class">.el-aside</span>,
	  <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(6)</span> <span class="hljs-selector-class">.el-aside</span> {
	    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">260px</span>;
	  }
	  
	  <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(7)</span> <span class="hljs-selector-class">.el-aside</span> {
	    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">320px</span>;
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
<style scoped="">
	p{
		font-size: 14px;
		color:#777;
	}
	  .el-header, .el-footer {
	    background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	  }
	  
	  .el-aside {
	    background-color: #D3DCE6;
	    color: #333;
	    text-align: center;
	    line-height: 200px;
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    line-height: 160px;
	  }
	  
	   .el-container+.el-container{
	    margin-top:20px;
	  }
	  
	  .el-container:nth-child(5) .el-aside,
	  .el-container:nth-child(6) .el-aside {
	    line-height: 260px;
	  }
	  
	  .el-container:nth-child(7) .el-aside {
	    line-height: 320px;
	  }
</style>


