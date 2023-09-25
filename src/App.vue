<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '~@/assets/fonts/stylesheet.css';
  html,body {
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: 'Poppins', Arial;
    text-rendering: optimizeLegibility;
  }
  *,*::after,*::before {
    box-sizing: border-box;
  }
</style>
