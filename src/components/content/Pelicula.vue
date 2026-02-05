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
                            Pelicula Studio
                        </p>
                        <h1 class="fw-bold fs-2">
                            This is what we do
                        </h1>
                    </div>
                </div>
            </div>
            <div class="row pt-4">
                <div class="col-4">
                    <div class="card text-center border-0 d-flex align-items-center">
                        <div class="img-container mb-3">
                            <img src="../../assets/image (14).svg" alt="Cam">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Arrey of Equipment</h5>
                            <p class="card-text">Lorem ipsum dolor amet, consectetur adipiscing. Pellentesque ultricies
                                justo tellus.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card text-center border-0 d-flex align-items-center">
                        <div class="img-container mb-3">
                            <img src="../../assets/image (16).svg" alt="Glass">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">New Technologies</h5>
                            <p class="card-text">Lorem ipsum dolor amet, consectetur adipiscing. Pellentesque ultricies
                                justo tellus.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card text-center border-0 d-flex align-items-center">
                        <div class="img-container mb-3">
                            <img src="../../assets/image (18).svg" alt="Mask">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Versitile Actors</h5>
                            <p class="card-text">Lorem ipsum dolor amet, consectetur adipiscing. Pellentesque ultricies
                                justo tellus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-4">
                <div class="col-4">
                    <div class="card text-center border-0 d-flex align-items-center">
                        <div class="img-container mb-3">
                            <img src="../../assets/image (15).svg" alt="Cam">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Top Directors</h5>
                            <p class="card-text">Lorem ipsum dolor amet, consectetur adipiscing. Pellentesque ultricies
                                justo tellus.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card text-center border-0 d-flex align-items-center">
                        <div class="img-container mb-3">
                            <img src="../../assets/image (17).svg" alt="Glass">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Minute Editing</h5>
                            <p class="card-text">Lorem ipsum dolor amet, consectetur adipiscing. Pellentesque ultricies
                                justo tellus.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card text-center border-0 d-flex align-items-center">
                        <div class="img-container mb-3">
                            <img src="../../assets/image (19).svg" alt="Mask">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Versitile Actors</h5>
                            <p class="card-text">Lorem ipsum dolor amet, consectetur adipiscing. Pellentesque ultricies
                                justo tellus.
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
        translate: 0;
    }

    100% {
        translate: 0 -10px;
    }

}

.card {

    &:hover {
        img {
            animation: myAnimation .5s;
        }
    }

    .img-container {
        min-height: 80px;

        img {
            width: 20%;
        }
    }

    .card-body {

        .card-title {
            font-weight: bold;
            text-transform: uppercase;
            font-size: .8rem;
        }

        .card-text {
            color: $grayCl;
            font-size: 0.9rem;
        }
    }
}
</style>