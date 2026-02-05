<script>
export default {

}
</script>
<template>
    <section class="p-5">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title text-uppercase text-center">
                        <p class="fw-bold">
                            Your Watchlist
                        </p>
                        <h1 class="fw-bold fs-2">
                            Best hits movies
                        </h1>
                    </div>
                </div>
            </div>
            <div class="row py-4">
                <div class="col-4">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/Gallery-01.jpg" class="rounded-0 card-img-top" alt="Gallery-01">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="fw-bold">
                                SEVENTEENTH SUMMER
                            </h5>
                            <p class="card-text">
                                Commercial, Music Video.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/Gallery-02.jpg" class="rounded-0 card-img-top" alt="Gallery-02">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="fw-bold">
                                A MESSAGE TO SPACE
                            </h5>
                            <p class="card-text">
                                Short Film
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/Gallery-03.jpg" class="rounded-0 card-img-top" alt="Gallery-03">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="fw-bold">
                                THE MOST BEAUTIFUL THING
                            </h5>
                            <p class="card-text">
                                Music Video
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row py-4">
                <div class="col-4">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/Gallery-04.jpg" class="rounded-0 card-img-top" alt="Gallery-04">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="fw-bold">
                                PERMISSION TO SPEAK
                            </h5>
                            <p class="card-text">
                                Documentary
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/Gallery-05.jpg" class="rounded-0 card-img-top" alt="Gallery-05">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="fw-bold">
                                EXPLORE OUR SPACE
                            </h5>
                            <p class="card-text">
                                Film noir
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/Gallery-06.jpg" class="rounded-0 card-img-top" alt="Gallery-06">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="fw-bold">
                                FILM PRODUCTION
                            </h5>
                            <p class="card-text">
                                Blaxploitation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../../style/patrial/variables' as *;

@keyframes myAnimation {
    0% {
        transform: 0;
    }

    100% {
        transform: scale(1.1);
    }
}

img:hover {
    animation: myAnimation .5s forwards;
}

.card-body {

    h5,
    p {

        font-size: .8rem;
    }

    .card-text {
        color: $grayCl;
    }
}
</style>