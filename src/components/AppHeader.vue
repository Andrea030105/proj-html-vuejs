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
    <header class="p-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-2">
                    <div class="container-logo">
                        <img src="../assets/logo.svg" alt="logo">
                    </div>
                </div>
                <div class="col-8 d-flex align-items-center justify-content-center">
                    <ul>
                        <li v-for="(item, index) in store.menuHeaderArray" :key="index"
                            class="text-uppercase fw-bolder">
                            {{ item.name }}</li>
                    </ul>
                </div>
                <div class="col-2">
                    <div class="icons-list">
                        <ul>
                            <li><i class="fa-solid fa-magnifying-glass"></i></li>
                            <li>|</li>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-youtube"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header {
    height: 75px;

    .container-logo {
        img {
            width: 70%;
        }
    }

    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;

        li {
            margin-right: 1rem;
            font-size: .8rem;
        }
    }
}
</style>