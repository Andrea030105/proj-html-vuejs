<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <section class="bg-black">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="container-list" v-for="(item, index) in store.menuFooterArray" :key="index">
                        {{ item.title }}
                        <ul>
                            <li v-for="(itemsArray, i) in item.content" :key="i">
                                {{ itemsArray }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../style/patrial/variables' as *;
@use '../style/patrial/mixin' as *;

.container-list {
    color: $whiteCl;

}
</style>