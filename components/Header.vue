<template>
    <header class="d-flex justify-content-center w-100 mt-5 mb-4">
        <h1 class="nuxt-logo [ d-flex align-items-center gap-3 ]">
            <img src="~/assets/img/nuxtLogo.svg" class="top-logo" alt="Nuxt Logo" />
            <span class="text-primary">NuxtJs</span>
            <span class="text-opacity-25 fw-light">|</span>
            <span class="fw-light">ToDo Lists</span>
        </h1>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            title: "Header",
        }
    }
}
</script>

<style lang="scss" scoped>
    .top-logo {
        width: 100px;
    }
</style>