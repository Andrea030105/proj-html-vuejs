<script>
import { store } from '../store';
import Jumbotron from './content/Jumbotron.vue';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        Jumbotron,
    }
}
</script>
<template>
    <Jumbotron />
</template>
<style lang="scss" scoped></style>