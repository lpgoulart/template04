<template>
    <b-container>
        <b-row align-v="center" align-h="center" style="min-height: 150px">
            <b-col cols="12" class="text-center">
                <h2>Bem Vindo</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus fuga adipisci doloremque dolore cumque. Commodi quasi laudantium ea dolor iste repellat, asperiores eos eligendi similique dolorum adipisci facilis aut?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque quaerat tenetur fugiat voluptas sequi, similique debitis illo animi in.
                </p>
            </b-col>
        </b-row>

        <b-row align-h="center" align-v="center" class="padding">
            <b-col sm="12" md="4">
                <div class="card" >
                  <img src="../assets/home.jpg" class="card-img-top" width="10%" alt="...">
                    <div class="card-body">
                      <h4 class="text-center">
                        SERVIÇOS
                      </h4>
                      <p class="card-text">
                        <router-link to="/servicos" class="btn btn-block btn-dark">
                            LER MAIS
                        </router-link>
                      </p>
                    </div>
                </div>
            </b-col>
            <b-col sm="12" md="4">
                <div class="card" >
                  <img src="../assets/home.jpg" class="card-img-top" width="10%" alt="...">
                    <div class="card-body">
                      <h4 class="text-center">
                        TRABALHOS
                      </h4>
                      <p class="card-text">
                        <router-link to="/trabalhos" class="btn btn-block btn-dark">
                            LER MAIS
                        </router-link>
                      </p>
                    </div>
                </div>
            </b-col>
        </b-row>

        <b-row align-h="center" align-v="center" class="padding">
            <b-col sm="12">
                <h2>Lorem</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, numquam distinctio quis repellat minus eos odio culpa perspiciatis impedit exercitationem doloribus commodi architecto voluptatum, cupiditate, voluptate mollitia voluptates rem incidunt.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam rem impedit dignissimos. Possimus eum dicta quia, officiis atque omnis voluptas sed sapiente, ipsa, tempore reprehenderit nostrum reiciendis nesciunt laudantium excepturi! Vitae, ea quasi explicabo impedit necessitatibus vel delectus ipsam dolore est error ducimus, architecto laborum nam doloremque pariatur, itaque sit.
                </p>
            </b-col>
        </b-row>


    </b-container>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style scoped>
    

</style>