<template>
    <a :href="url" class="link">{{ text }}</a>
</template>


<script>
export default {
    name: 'Link',
    props: {
        url: String,
        text: String,
    },
};
</script>


<style lang="less">
@denim: #0F76AC;
.link {
    color: @denim;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: lighten(@denim, 15)
    }
    &:before {

    }
}
</style>
