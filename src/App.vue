<template>
    <main id="app">
        <Face />
        <Name />
        <Blurb />
        <Socials />
        <Profiles />
    </main>
</template>

<script>
import Face from './components/Face';
import Name from './components/Name';
import Blurb from './components/Blurb';
import Socials from './components/Socials/Socials';
import Profiles from './components/Profiles';

export default {
    name: 'app',
    components: {
        Face,
        Name,
        Blurb,
        Socials,
        Profiles,
    },
};
</script>

<style lang="less">
* { box-sizing: border-box;}
html, body {
    display: block;
    margin: 0;
    padding: 0;
    height: 100%;
}
body {
    background-image: url('./assets/bg-large.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 35%;
}
#app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: fade(#E9EFF2, 80%);
    color: #465F6E;
    align-items: center;
    display: block;
    text-align: center;
    padding: 30px 0 20px;
    height: 100%;
    width: 100%;
    @media all and (min-height: 376px) {
        padding: 80px 0 20px;
    }
}
</style>
