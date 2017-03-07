<template>
<div>
    <h2>Detail</h2>
    <p>Id: {{ id }}</p>
    <p>q: {{ q }}</p>
    <p>Fragment: {{ fragment }}</p>
</div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            q:this.$route.query.q,
            fragment: this.$route.hash
        }
    }
}
</script>