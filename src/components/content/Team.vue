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
                            The Pericuros
                        </p>
                        <h1 class="fw-bold fs-2">
                            Meet the Team
                        </h1>
                    </div>
                </div>
            </div>
            <div class="row py-4">
                <div class="col-3">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/Team-01.jpg" class="rounded-0 card-img-top" alt="Team-01">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="fw-bold">
                                FABRICIO GUERRA
                            </h5>
                            <p class="card-text">
                                Main Director
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/Team-02.jpg" class="rounded-0 card-img-top" alt="Team-02">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="fw-bold">
                                UMBERTO PAGODA
                            </h5>
                            <p class="card-text">
                                Main Writer
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/Team-03.jpg" class="rounded-0 card-img-top" alt="Team-03">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="fw-bold">
                                GLORIA RICCASSO
                            </h5>
                            <p class="card-text">
                                Main Producer
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/Team-04.jpg" class="rounded-0 card-img-top" alt="Team-04">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="fw-bold">
                                LIO NAPOIN
                            </h5>
                            <p class="card-text">
                                Cameraman
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