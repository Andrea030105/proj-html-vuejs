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
                        <img src="../../assets/Parallax-01.jpg" alt="Parallax-01">
                        <div class="text">
                            <div>
                                <h3>
                                    158
                                </h3>
                                <p>
                                    satisfied clients
                                </p>
                            </div>
                            <div>
                                <h3>
                                    3+
                                </h3>
                                <p>
                                    our project
                                </p>
                            </div>
                            <div>
                                <h3>
                                    1,906
                                </h3>
                                <p>
                                    cup of coffee
                                </p>
                            </div>
                            <div>
                                <h3>
                                    2
                                </h3>
                                <p>
                                    our awords
                                </p>
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
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        @include fullFlexCenter;
        text-align: center;
        color: $whiteCl;
        text-transform: uppercase;

        div {
            margin: 0 5rem;

            h3,
            p {
                font-weight: bold;
            }

            h3 {
                font-size: 2.3rem;
            }

            p {
                font-size: .7rem;
            }
        }
    }
}
</style>