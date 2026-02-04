<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        toggleMenu(index) {
            // Chiudi tutti gli altri menu
            store.menuHeaderArray.forEach((item, i) => {
                if (i !== index) {
                    item.active = false;
                }
            });
            // Toggle del menu corrente
            store.menuHeaderArray[index].active = !store.menuHeaderArray[index].active;
        },
        closeAllMenus() {
            store.menuHeaderArray.forEach(item => {
                item.active = false;
            });
        }
    }
}
</script>
<template>
    <header class="p-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 d-flex align-items-center justify-content-center">
                    <div class="container-logo">
                        <img src="../assets/logo.svg" alt="logo">
                    </div>
                </div>
                <div class="col-8 d-flex align-items-center justify-content-center">
                    <ul>
                        <li @click="toggleMenu(index)" v-for="(item, index) in store.menuHeaderArray" :key="index"
                            class="text-uppercase fw-bolder me-4">
                            {{ item.name }}
                            <i v-if="item.dropDown" class="fa-solid fa-angle-down"></i>
                            <ul class="dropdown" v-if="(item.active && item.subLink)">
                                <li v-for="(itemSub, indexSub) in item.subLink" :key="indexSub">
                                    {{ itemSub }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="col-2 d-flex align-items-center justify-content-center">
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
@use '../style/patrial/variables' as *;
@use '../style/patrial/mixin' as *;

header {
    height: 75px;
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: $whiteCl;

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
            position: relative;

            &:hover {
                cursor: pointer;
            }
        }

        .dropdown {
            width: 200px;
            max-height: 100px;
            position: absolute;
            top: 48px;
            left: 0;
            background-color: $blackCl;
            color: $whiteCl;
            flex-direction: column;
            align-items: start;

            li {
                width: 100%;
                padding: 0 1rem;
                margin: .5rem 0;

                &:hover {
                    color: $grayCl;
                }
            }
        }
    }
}
</style>