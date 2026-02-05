<script>
export default {

}
</script>
<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="about-container">
                        <img src="../../assets/About-Us.jpg" alt="About-Us">
                        <div class="text">
                            <p>
                                ABOUT US
                            </p>
                            <h2 class="fw-bold">
                                HIGH QUALITY CINEMATICS
                            </h2>
                            <p>
                                Orci varius penatibus et magnis dis parturient In the montes, nascetur ridiculus mus.
                                Nulla
                                A nisi ut mi efficitur hendrerit. nunc urna. quisque a partr hendrerit purus erat, nec
                                dapibus sem sed. phasellus sed eli molestie, porttitor ligula of the egestas, mattis
                                augue.
                                quisque et rhoncus justo. suspendisse luctus pharetra eleme tcondimentum.
                            </p>
                            <button class="mt-3">
                                Read More
                            </button>
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

.about-container {
    img {
        width: 100%;
    }

    .text {
        width: 50%;
        position: relative;
        bottom: 300px;
        left: 600px;
        color: $whiteCl;

        p {
            font-size: .9rem
        }

        button {
            @include mainBtn;
        }
    }
}
</style>