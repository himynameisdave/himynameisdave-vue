<template>
    <main id="app">
        <Face />
        <Name />
        <Blurb />
        <Profiles />
    </main>
</template>

<script>
import Face from './components/Face';
import Name from './components/Name';
import Blurb from './components/Blurb';
import Profiles from './components/Profiles';

export default {
    name: 'app',
    components: {
        Face,
        Name,
        Blurb,
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
#app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #E9EFF2;
    color: #465F6E;
    align-items: center;
    display: block;
    text-align: center;
    padding: 30px 0 20px;
    height: 100%;
    width: 100%;
    overflow: scroll;
    @media all and (min-height: 376px) {
        padding: 80px 0 20px;
    }
}
</style>
