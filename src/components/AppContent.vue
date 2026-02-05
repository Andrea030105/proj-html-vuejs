<script>
import AboutUs from './content/AboutUs.vue';
import Jumbotron from './content/Jumbotron.vue';
import Pelicula from './content/Pelicula.vue';
import Stats from './content/Stats.vue';
import Team from './content/Team.vue';
import YourWatchList from './content/YourWatchList.vue';

export default {

    components: {
        Jumbotron,
        Pelicula,
        AboutUs,
        YourWatchList,
        Stats,
        Team,
    }
}
</script>
<template>
    <Jumbotron />
    <Pelicula />
    <AboutUs />
    <YourWatchList />
    <Stats />
    <Team />
</template>
<style lang="scss" scoped></style>