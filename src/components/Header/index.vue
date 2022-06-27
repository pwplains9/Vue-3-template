<template lang="pug">
.header
    router-link(to="/") Main
    router-link(to="/home") Home

</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>
@import "Style.scss";
</style>