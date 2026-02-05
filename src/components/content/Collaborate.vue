<script>
export default {

}
</script>
<template>
    <section class="p-5">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="text">
                        <div class="title">
                            <p>
                                COLLABORATE


                            </p>
                            <h3>
                                WANT TO WORK WITH US?
                                LEAVE US A MESSAGE!
                            </h3>
                        </div>
                        <p>
                            Duis sit amet congue ipsum. Nulla maximus My venenatis posuere. T0 The Mauris ut tempus
                            Suspendisse porta tincidunt lectus non of me pellentesque. At A Sed blandit at diam sit amet
                            Orci varius natoque penatibus et dis dis parturient montes. My Car nascetur ridiculus Sed
                            feugiat lacus in erat egestas. quis eleifend lacus imperdiet.
                        </p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="input-area">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control me-2" placeholder="Your Name">

                            <input type="text" class="form-control" placeholder="Your Email">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control me-2" placeholder="Mobile Number">

                            <input type="text" class="form-control" placeholder="Your Pincode">
                        </div>

                        <div class="input-group">
                            <textarea class="form-control" placeholder="Enter Your Message"></textarea>
                        </div>
                        <button>
                            Submit Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../../style/patrial/variables' as *;

.text {

    .title {

        p,
        h3 {
            color: $blackCl;
            font-weight: bold;
        }

        h3 {
            font-size: 2.5rem;
            margin: 2rem 0;
        }
    }

    p {
        color: $grayCl;
        font-size: .9rem;
    }
}

.input-area {

    input,
    textarea {
        background-color: $lightGrayCl;
        border-radius: 0;
        border: none;

        &::placeholder {
            color: $grayCl;
        }
    }

    textarea {
        height: 200px;
    }

    button {
        width: 100%;
        background-color: $blackCl;
        border: none;
        margin: 2rem 0;
        padding: 10px;
        color: $whiteCl;
        text-transform: uppercase;
        font-weight: bold;
    }
}
</style>