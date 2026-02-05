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
                        <img src="../../assets/Parallax-02.jpg" alt="Parallax-02">
                        <div class="text">
                            <div>
                                <i class="fa-solid fa-quote-left"></i>
                                <p>
                                    Curabitur bibendum ex ut sapien blandit viverra. Nunc lobortis mi dui, id Etiam
                                    tempor sit amet metus in bibendum. Nunc eros risus, pellentesque a augue
                                    Pellentesque fringilla egei mi eu mollis. Mauris commodo.
                                </p>
                                <div class="profile-container">
                                    <img src="../../assets/01.jpg" alt="Jhon Doe">
                                    <div class="profile-text">
                                        <p class="text-uppercase">
                                            Jhon Doe
                                        </p>
                                        <p>
                                            Designer
                                        </p>
                                    </div>
                                </div>
                                <i class="fa-solid fa-ellipsis"></i>
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
    height: 400px;
    position: relative;
    text-align: center;
    color: $whiteCl;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        i {
            margin: 1.5rem 0;
            font-size: 2.5rem;
        }

        p {
            font-size: .9rem
        }

        .profile-container {
            @include fullFlexCenter;

            img {
                border-radius: 50%;
                width: 50px;
                height: 50px;
            }

            .profile-text {
                flex-direction: column;
                margin-left: 1rem;

                p {
                    margin: 0;
                    font-size: .5rem;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>