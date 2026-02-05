<script>
import AboutUs from './content/AboutUs.vue';
import Icons from './content/Icons.vue';
import JhonDoe from './content/JhonDoe.vue';
import Jumbotron from './content/Jumbotron.vue';
import LatestNews from './content/LatestNews.vue';
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
        JhonDoe,
        LatestNews,
        Icons,
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
    <JhonDoe />
    <LatestNews />
    <Icons />
</template>
<style lang="scss" scoped></style>