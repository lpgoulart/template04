<template>
    <b-container>
        <b-row align-v="center" align-h="center" style="min-height: 150px">
            <b-col cols="12" class="text-center">
                <h2>Trabalhos</h2>
                <br>
                <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    img-width="1024"
                    img-height="480"
                >
                    <b-carousel-slide
                        v-bind:img-src="img01"
                        img-width="10%"
                    ></b-carousel-slide>

                    <b-carousel-slide
                        v-bind:img-src="img02"
                    ></b-carousel-slide>

                    <b-carousel-slide
                        v-bind:img-src="img03"
                    ></b-carousel-slide>

                    <b-carousel-slide
                        v-bind:img-src="img04"
                    ></b-carousel-slide>
                    
                    <b-carousel-slide
                        v-bind:img-src="img05"
                    ></b-carousel-slide>
                </b-carousel>

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'Trabalhos',
    data() {
        return {
            img01: require('../assets/01.jpg'),
            img02: require('../assets/02.jpg'),
            img03: require('../assets/03.jpg'),
            img04: require('../assets/home.jpg'),
            img05: require('../assets/05.jpg')
        }
    }
}
</script>

<style scoped>
    

</style>