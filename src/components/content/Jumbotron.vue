<script>
export default {

}
</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="jumbotron-container">
                    <div class="arrow-left">
                        <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <div class="text-container">
                        <p>
                            Cinemato Studio
                        </p>
                        <h2>
                            Action and inspire people
                        </h2>
                        <button>
                            read more
                        </button>
                    </div>
                    <div class="arrow-right">
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/patrial/variables" as *;
@use "../../style/patrial/mixin" as *;

.jumbotron-container {
    width: 100%;
    height: 500px;
    background-image: url("../../assets/blog02.jpg");
    position: relative;

    .text-container {
        position: absolute;
        top: 200px;
        left: 200px;
        width: 400px;
        text-transform: uppercase;
        font-weight: bolder !important;
        color: $whiteCl;

        h2 {
            font-size: 3rem;
        }

        button {
            @include mainBtn
        }
    }

    .arrow-left {
        @include arrowClBgColor;
        @include fullFlexCenter;
        position: absolute;
        top: 50%;
        left: 0;
        padding: .5rem;
    }

    .arrow-right {
        @include arrowClBgColor;
        @include fullFlexCenter;
        position: absolute;
        top: 50%;
        right: 0;
        padding: .5rem;
    }
}
</style>