<template>
    <!-- <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 20px;
    background-color: rgba(7, 34, 211, 0.583);
    a {
        margin: auto 10px;
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
