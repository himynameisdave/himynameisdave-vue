<template>
    <main id="app">
        <BackgroundImage />
        <Face />
        <Name />
        <Blurb />
        <Socials />
        <Profiles />
    </main>
</template>

<script>
import BackgroundImage from './components/Background';
import Face from './components/Face';
import Name from './components/Name';
import Blurb from './components/Blurb';
import Socials from './components/Socials/Socials';
import Profiles from './components/Profiles';

export default {
    name: 'app',
    components: {
        BackgroundImage,
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
    display: flex;
    flex-direction: column;
}
#app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #465F6E;
    align-items: center;
    display: block;
    flex: 1;
    text-align: center;
    padding: 30px 0 20px;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    @media all and (min-height: 376px) {
        padding: 80px 0 20px;
    }
}
</style>
