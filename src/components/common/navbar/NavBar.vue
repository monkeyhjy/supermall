<template>
<!--  这里用class而不用id的原因是许多个组件中都可能有导航栏，用id不太合适-->
	<div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
	export default {
		name: "NavBar"
	}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>
