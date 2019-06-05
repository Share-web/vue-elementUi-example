<template>
  <header class="app-header navbar">
    <slot>
                <a class="navbar-brand" >LOGO</a>
          <el-button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</el-button>

    </slot>
  </header>
</template>
<script>
export default {
  name: 'navbar',
  created () {
    this._navbar = true
  }
}
</script>
