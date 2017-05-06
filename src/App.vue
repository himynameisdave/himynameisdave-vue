<template>
    <main id="app">
        <Face />
        <Name />
        <Blurb />
    </main>
</template>

<script>
import Face from './components/Face';
import Name from './components/Name';
import Blurb from './components/Blurb';

export default {
    name: 'app',
    components: {
        Face,
        Name,
        Blurb,
    },
};
</script>

<style>
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
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 80px;
    height: 100%;
    width: 100%;
}
</style>
