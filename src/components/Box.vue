<template>
    <div class="box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Box',
};
</script>

<style lang="less">
.box {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: fade(#E4F2F9, 90%);
    border-radius: 5px;
    padding: 12px 18px;
    margin: 0 auto;
    text-align: left;
    width: 100%;
    transition: transform 0.45s ease-in-out;
    transform: scale(1);
    &:hover {
        transform: scale(1.025);
    }
}
</style>
