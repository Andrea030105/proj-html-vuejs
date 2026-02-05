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
                            Latest News
                        </p>
                        <h1 class="fw-bold fs-2">
                            Articles Updated Daily
                        </h1>
                    </div>
                </div>
            </div>
            <div class="row py-4">
                <div class="col-4">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/blog06.jpg" class="rounded-0 card-img-top" alt="blog06">
                        </div>
                        <div class="card-body px-0">
                            <p class="card-text">
                                November 06 , 2021 By Admin
                            </p>
                            <h5 class="fw-bold">
                                RECAP YOUR LATEST COMPANY EVENT
                            </h5>
                            <p class="card-text">
                                Suspendisse dictum dictum tempor. lJt non faucibus arcu, id elementum est. Suspendisse
                                sed
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/blog01.jpg" class="rounded-0 card-img-top" alt="blog01">
                        </div>
                        <div class="card-body px-0">
                            <p class="card-text">
                                May 27 , 2022 By Admin
                            </p>
                            <h5 class="fw-bold">
                                HOW TO EDIT A FILM SCORE TO SERVE
                            </h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card border-0 rounded-0">
                        <div class="overflow-hidden">
                            <img src="../../assets/blog02.jpg" class="rounded-0 card-img-top" alt="blog02">
                        </div>
                        <div class="card-body px-0">
                            <p class="card-text">
                                May 07 , 2022 By Admin
                            </p>
                            <h5 class="fw-bold">
                                ARE YOU READY TO MAKE IT AWESOME
                            </h5>
                            <p class="card-text">
                                Design is our playground. While we create an awesome experience, we like having fun. No
                                animals
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