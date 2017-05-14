<template>
    <div class="face">
        <img src="../assets/face.jpg" />
    </div>
</template>

<script>
export default {
    name: 'Face',
};
</script>

<style lang="less">
.face {
    border: 10px solid #002f47;
    border-radius: 100%;
    box-shadow: 0 -2px 4px 1px rgba(0, 0, 0, 0.25);
    display: block;
    height: 190px;
    margin: 0 auto 10px;
    overflow: hidden;
    width: 190px;
    transition: transform 0.425s ease-in-out;
    transform: rotate(0) scale(1);
    &:hover {
        transform: rotate(-7deg) scale(1.04);
    }
    @media all and (min-height: 376px) {
        height: 230px;
        width: 230px;
    }
}
.face img {
    max-width: 100%;
    user-select: none;
}
</style>
