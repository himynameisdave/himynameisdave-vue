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

<style scoped>
.face {
    border: 10px solid #002f47;
    border-radius: 100%;
    box-shadow: 0 -2px 4px 1px rgba(0, 0, 0, 0.25);
    height: 250px;
    margin: 0 0 5px;
    overflow: hidden;
    width: 250px;
}
.face img {
    max-width: 100%;
    user-select: none;
}
</style>
