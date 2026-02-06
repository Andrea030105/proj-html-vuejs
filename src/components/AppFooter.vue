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
    <section class="bg-black p-5">
        <div class="container p-5">
            <div class="row">
                <div class="col-3 flex" v-for="(item, index) in store.menuFooterArray" :key="index">
                    <div class="container-list">
                        <h4 class="mb-4">
                            {{ item.title }}
                        </h4>
                        <ul>
                            <li v-for="(itemsArray, i) in item.content" :key="i">
                                <img v-if="itemsArray.img" :src="`/images/${itemsArray.img}.svg`" alt="">
                                <p class="m-0">
                                    {{ itemsArray.text }}
                                </p>
                                <div v-if="itemsArray.hasForm && itemsArray.hasBtn">
                                    <input type="text" class="form-control" placeholder="Enter Your Email">
                                    <button>
                                        subscribe
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="container-dev">
                        <p>
                            © 2023 All Rights Reserved. Developed By TemplateMela
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../style/patrial/variables' as *;
@use '../style/patrial/mixin' as *;

.flex {
    @include fullFlexCenter;

    .container-list {
        color: $whiteCl;
        height: 100%;

        h4 {
            font-weight: bold;
            text-transform: uppercase;
            font-size: .9rem;
        }

        ul {
            list-style-type: none;
            padding: 0;

            li {
                font-size: .8rem;
                display: flex;
                align-items: center;
                margin: .6rem 0;
                color: $grayCl;

                &:hover {
                    color: $whiteCl;
                    cursor: pointer;
                }

                img {
                    width: 10px;
                    margin-right: 1rem;
                }

                button {
                    @include mainBtn;
                }

                input {
                    border: none;
                    border-radius: 0;
                    background-color: $inputBlackCl;
                    margin: .6rem 0;

                    &::placeholder {
                        color: $grayCl;
                        font-size: .7rem;
                    }
                }
            }
        }
    }
}

.container-dev {
    border-top: 1px solid $grayCl;
    text-align: center;
    padding-top: 1.5rem;
    margin-top: 1rem;
    color: $grayCl;
    font-size: .8rem;
}
</style>