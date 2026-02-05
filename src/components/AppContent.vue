<script>
import AboutUs from './content/AboutUs.vue';
import Jumbotron from './content/Jumbotron.vue';
import Pelicula from './content/Pelicula.vue';

export default {

    components: {
        Jumbotron,
        Pelicula,
        AboutUs,
    }
}
</script>
<template>
    <Jumbotron />
    <Pelicula />
    <AboutUs />
</template>
<style lang="scss" scoped></style>