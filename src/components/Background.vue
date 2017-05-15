<template>
    <div  class="background-image"
          v-bind:class="{ 'background-image-loaded': hasLoaded  }"
    >
        <div class="background-image__image"/>
        <div class="background-image__fadeout" />
    </div>
</template>

<script>
import image from '../assets/bg-large.jpg';

export default {
    name: 'BackgroundImage',
    data() {
        return {
            hasLoaded: false,
            isLoading: false,
        };
    },
    mounted() {
        if (!this.isLoading) {
            this.isLoading = true;
            const img = new Image();
            img.src = image;
            img.onload = () => {
                this.hasLoaded = true;
            };
        }
    },
};
</script>

<style lang="less">

@keyframes back-and-forth {
    0%, 50%, 100% {
        transform: translate(-50%, -50%);
    }
    25% {
        transform: translate(-55%, -50%);
    }
    75% {
        transform: translate(-45%, -50%);
    }
}

.background-image {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    overflow: hidden;
    z-index: -1;
    > * {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 30%;
        height: 100%;
        position: absolute;
        width: 100%;
    }
    &-loaded {
        .background-image__image {
            animation-name: back-and-forth;
            animation-duration: 120s;
            animation-timing-function: ease-out;
            animation-iteration-count: infinite;
            background-image: url('../assets/bg-large.jpg');
            filter: blur(3px);
        }
    }
}


.background-image__image {
    background-image: url('data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAKAAD/4QNTaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjQ1QTBGNzBERTY4NEI5M0RDNTZBMkM4M0ZBM0IxRkFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5ODVFMjdBMzEzMzExRTc5NDczQ0RFQzA4Mjk4RkU3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5ODVFMjc5MzEzMzExRTc5NDczQ0RFQzA4Mjk4RkU3IiB4bXA6Q3JlYXRvclRvb2w9IlZlci4xLjAwICI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI5MTRENzczMzAyQTExRTc5QkRFQTRCOEU3OUQ2OERDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI5MTRENzc0MzAyQTExRTc5QkRFQTRCOEU3OUQ2OERDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAFBAQGRIZJxcXJzImHyYyLiYmJiYuPjU1NTU1PkRBQUFBQUFERERERERERERERERERERERERERERERERERERERAEVGRkgHCAmGBgmNiYgJjZENisrNkREREI1QkRERERERERERERERERERERERERERERERERERERERERERERERERE/8AAEQgAGwAoAwEiAAIRAQMRAf/EAHcAAAMBAQAAAAAAAAAAAAAAAAAFBgQDAQADAQAAAAAAAAAAAAAAAAAAAQMCEAABAwEFBgMJAAAAAAAAAAABABECAyExEhMEQXGBMlIFUWHBkaGx4SJCgjQGEQABBAEFAQAAAAAAAAAAAAAAARExAgMhQVEiExL/2gAMAwEAAhEDEQA/ALF0Os0+4UIQxymA2xwT7nSfWd5lVjhoAxBvkb/kqVx2tCGLXrUfmpGN5A4ozIeKjYU5kGZm0el2sXTNnMCInEObSSX4+W5UTEiujwTXIqMrSU1buWmolpzD+At+CFImn9JlijYWIxWoVPCrTqY9rcCoVjEWG1bNNVlqDhBYgO269FLL+7B+WZ6J3ocGVUwZPJLkxY7j1Jd9nDruTdWpKZvsN4WrS0q2qcUg5izpeLhuTv8Alv2J38nC/b6I7OvzIaMjwcjoNV0S9iFXzQm+TgTV5P/Z');
    left: 50%;
    top: 50%;
    filter: blur(12px);
    transition: filter 0.45s ease-in-out;
    transform: translate(-50%, -50%);
    height: 115%;
    width: 115%;
}

.background-image__fadeout {
    background: fade(#E9EFF2, 70%);
    z-index: 1;
}

</style>
