<template>
    <b-container>
        <b-row align-v="center" align-h="center" style="min-height: 150px">
            <b-col cols="12" class="text-center" align-h="center">
                <h2>Sobre nós</h2>
            </b-col>

            <b-col sm="12" md="4">
                <p class="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime voluptas quisquam consequuntur. <strong>Modi doloribus</strong> magnam possimus fuga praesentium voluptates nostrum a aut velit eaque magni consequuntur deserunt amet repudiandae assumenda voluptatem natus sapiente perferendis corporis excepturi deleniti, rerum libero quasi ab. Nesciunt perferendis velit amet mollitia eaque possimus doloribus quos, tempora minus ad, voluptates quis <strong>laborum magnam error!</strong> Debitis mollitia est ea quam excepturi fuga natus repellendus necessitatibus delectus. <strong>Molestias totam accusamus</strong> blanditiis eius natus similique, possimus expedita ullam dicta maiores eos qui non doloribus excepturi sapiente corrupti officiis vero ex error est temporibus magni fugiat. <i>Dolores, voluptate aperiam!</i>
                </p>

                <p class="text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi modi natus inventore, autem vero unde dolor voluptas doloribus at sed!
                </p>

            </b-col>

            <b-col sm="12" md="4">
                <b-card
                    tag="article"
                    class="mb-2 text-center"
                    style="border: none; background-color: transparent"
                    >
                    <div style="padding-bottom: 10px">
                        <img class="users" src="../assets/user.png" alt="user" width="70%">
                    </div>
                    <b-card-text>
                        <h4>
                            Lorem
                        </h4>
                        <p>
                            CEO da pinturaLorem
                        </p>
                    </b-card-text>

                </b-card>

                <b-card
                    tag="article"
                    class="mb-2 text-center"
                    style="border: none; background-color: transparent"
                    >
                    <div style="padding-bottom: 10px">
                        <img class="users" src="../assets/user.png" alt="user" width="70%">
                    </div>
                    <b-card-text>
                        <h4>
                            Lorem
                        </h4>
                        <p>
                            CEO da pinturaLorem
                        </p>
                    </b-card-text>

                </b-card>
            </b-col>
            

        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'Sobre'
}
</script>

<style scoped>

    .users:hover {
        animation-name: userframe;
        animation-duration: 1s;
        animation-iteration-count: 2;
    }
    
    @keyframes userframe {
        0% {
            transform: rotate(0deg);
        }
        35% {
            transform: rotate(10deg);    
        }
        70% {
            transform: rotate(-10deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

</style>