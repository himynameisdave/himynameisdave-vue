<template>
    <div class="blurb">
        <p class="blurb__text">
           &#128075; Hi, my name is Dave. I am a developer based in Vancouver, Canada. I love making me some internets.
        </p>
        <p class="blurb__text">
            Currently soaring over at <Link url="https://7geese.com/" text="7Geese" />	&#128640;
        </p>
    </div>
</template>


<script>
import Link from './Link';

export default {
    name: 'Blurb',
    components: {
        Link
    }
};
</script>


<style scoped>
.blurb {
    margin: 0 0 30px;
    max-width: 475px;
    width: 98%;
}
.blurb__text {
    font-size: 0.9rem;
    padding: 0;
    margin: 0 0 5px
}
</style>
