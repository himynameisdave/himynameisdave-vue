<template>
    <div class="face">
        <div
            class="face-image"
            v-bind:class="{ 'face-image-loaded': hasLoaded  }"
        />
    </div>
</template>

<script>
import face from '../assets/face.jpg';

export default {
    name: 'Face',
    data() {
        return {
            isLoading: false,
            hasLoaded: false,
        };
    },
    mounted() {
        if (!this.isLoading) {
            this.isLoading = true;
            const img = new Image();
            img.src = face;
            img.onload = () => {
                this.hasLoaded = true;
            };
        }
    }
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
    position: relative;
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

.face-image {
    background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIACgAKAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAGBwgJA//aAAgBAQAAAAAKXvAnXoHw0lPs2JsNrvpnNVKNC7nxPcv12Ht2Z//EABYBAQEBAAAAAAAAAAAAAAAAAAQGB//aAAgBAhAAAACckbZ2daK0D//EABcBAQEBAQAAAAAAAAAAAAAAAAYDBAX/2gAIAQMQAAAA7rMLgbCYXh//xAAvEAABAwMCBAQEBwAAAAAAAAAEAwUGAAcTFCMIFTNDJCVTcwGDw9MSRFRjk7Pw/9oACAEBAAE/AJ3cuPMLjhDF1/8ATR95cUe8uG84IKxIo/WqK2QmNwvMXx9KzL1MLHyq28d5vzTXhIdZH0aalc1Kuo6xG8V85WmRwblpCLqyhR0UCqjUgjzCzCl8zF0XrU4S+28wizkJz0RdEhtW6uzUfSID2VusPXiO9Vv0iDJCKIj+9XDtbBuLgpLv0DDyjRFsv6P6fTqP2bhojeMW7NjXhHF2fvb1cQEwHcr1vrixk7KGET3sCOGoVGSZe44dTp0UOstTVb95hLyK7o76I5XRrhW+Lg4x0pLsjlLVNJs3RZwYoit482TZsPyK4u4fBWe1nMXEUVB/1SCTYsl1l/VR9rHUKh7izt+Zu7Hq9+pBbpvco9mbtUOtpcq33qgCspjgxXI9jxWb+bs1HrZuFwZixXKlDngWHF8EzJdjD/vx1xylOBkyjDd+TAa8yPvLrbtf/8QAJREAAQIEBAcAAAAAAAAAAAAAAQAEAxQVIQIFEBESEyMxNFFS/9oACAECAQE/AKfK37qv5oXmxtCQuAU48YpwHLnNeVsm8KVhYYXyNKe1mJrg6vvT/8QAIxEAAQIFBAMBAAAAAAAAAAAAAQAEAgMFExQQERIhIjM0Uf/aAAgBAwEBPwADd2BkKo0KltoRLA369oR6KbfULqqDrHagSinEd6aY/wB0z3PC3y8dP//Z');
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    filter: blur(10px);
    width: 100%;
    z-index: -1;
    transition: filter 0.45s ease-in-out;
    &-loaded {
        background-image: url('../assets/face.jpg');
        filter: blur(0);
    }
}

.face img {
    max-width: 100%;
    user-select: none;
}
</style>
