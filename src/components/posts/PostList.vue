<template>
    <h2>List</h2>
</template>

<script>
export default {
    beforeRouteEnter: (to, from, next) => {
        console.log('before route enter guard');
        next();
    },
    beforeRouteLeave: (to, from, next) => {
        console.log('before route leave guard');
        next();
    }
}
</script>