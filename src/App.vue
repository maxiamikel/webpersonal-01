<template>
  
      <router-view/>
   
   
</template>

<script>
export default {
  name:"App",
  components:{
  }
}
</script>

<style lang="scss" scoped>
@import "@/components/_app.scss";
*{
  margin: 0px;
  padding: 0px;
}
html,body{
  box-sizing: border-box;
  background-color: $black1;
}

.main-app{
  width: 100%;
  background: $main-white;
  &__content{
    width:85%;
    background: $white;
    margin:0 auto;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    border-radius: 5px;
    height: 96vh;
  }
}
.router-link-exact-active{
        color: red;
    }
</style>
