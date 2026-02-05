<script>
import AboutUs from './content/AboutUs.vue';
import Jumbotron from './content/Jumbotron.vue';
import Pelicula from './content/Pelicula.vue';
import YourWatchList from './content/YourWatchList.vue';

export default {

    components: {
        Jumbotron,
        Pelicula,
        AboutUs,
        YourWatchList,
    }
}
</script>
<template>
    <Jumbotron />
    <Pelicula />
    <AboutUs />
    <YourWatchList />
</template>
<style lang="scss" scoped></style>