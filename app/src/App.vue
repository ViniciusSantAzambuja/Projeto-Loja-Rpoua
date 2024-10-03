<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400&display=swap" rel="stylesheet">
        <VNavBar/>
        <RouterView></RouterView>
        <VFooter/>
 </template>
 
 <script>
  import VNavBar from '@/components/VNavBar.vue'
  import VFooter from '@/components/footer/VFooter.vue'
  export default{
    components: { VNavBar, VFooter }
}
 </script>
