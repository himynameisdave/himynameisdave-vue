<template>
    <svg viewBox="0 0 20 20" :class="className">
        <use v-bind:xlink:href="href"></use>
    </svg>
</template>

<script>
export default {
    name: 'icon',
    props: {
        name: String,
    },
    computed: {
        href() {
            return `#icon-${this.name}`;
        },
        className() {
            return `icon icon-${this.name}`;
        }
    }
};
</script>
