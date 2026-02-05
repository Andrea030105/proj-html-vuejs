<script>
export default {

}
</script>
<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="img-container">
                        <img src="../../assets/Parallax-03.jpg" alt="Parallax-03">
                        <div class="text">
                            <div>
                                <img src="../../assets/01.png" alt="01">
                            </div>
                            <div>
                                <img src="../../assets/02.png" alt="02">
                            </div>
                            <div>
                                <img src="../../assets/03.png" alt="03">
                            </div>
                            <div>
                                <img src="../../assets/04.png" alt="04">
                            </div>
                            <div>
                                <img src="../../assets/05.png" alt="05">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../../style/patrial/variables' as *;
@use '../../style/patrial/mixin' as *;

.img-container {
    width: 100%;
    height: 200px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .text {
        padding: 0 4rem;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @include fullFlexCenter;
        text-align: center;
        color: $whiteCl;
        text-transform: uppercase;

        div {
            margin: 0 3rem;

            img {
                width: 100%;
            }
        }
    }
}
</style>