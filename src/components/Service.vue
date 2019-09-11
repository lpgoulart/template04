<template>
    <b-row>
        
        <b-col sm="12">
          

            <h2 class="text-center">SERVIÇOS</h2>
            
            <b-row>

              <b-col sm="12" md="3" v-for="service in services" v-bind:key="service.id" style="padding-top: 15px">
                <div class="card" >
                  <img v-bind:src="service.image" class="card-img-top" width="10%" alt="...">
                    <div class="card-body">
                      <h4 class="text-center">
                        {{service.title}}
                      </h4>
                      <p class="card-text">
                        {{service.description}}
                      </p>
                    </div>
                </div>
              </b-col>

            </b-row>
            
          
        </b-col>

      </b-row>
</template>

<script>
export default {
    name: 'Service',
    data() {
        return {
        services: [
            {
                id: 1,
                image: require('../assets/home.jpg'),
                title: 'service 01',
                description: 'Some quick example text to build on the card title and make up the bulk of the card' 
            },
            {
                id: 2,
                image: require('../assets/home.jpg'),
                title: 'service 02',
                description: 'Some quick example text to build on the card title and make up the bulk of the card' 
            },
            {
                id: 3,
                image: require('../assets/home.jpg'),
                title: 'service 03',
                description: 'Some quick example text to build on the card title and make up the bulk of the card' 
            },
            {
                id: 4,
                image: require('../assets/home.jpg'),
                title: 'service 04',
                description: 'Some quick example text to build on the card title and make up the bulk of the card' 
            },
            {
                id: 5,
                image: require('../assets/home.jpg'),
                title: 'service 05',
                description: 'Some quick example text to build on the card title and make up the bulk of the card' 
            },
            {
                id: 6,
                image: require('../assets/home.jpg'),
                title: 'service 06',
                description: 'Some quick example text to build on the card title and make up the bulk of the card' 
            },
            {
                id: 7,
                image: require('../assets/home.jpg'),
                title: 'service 07',
                description: 'Some quick example text to build on the card title and make up the bulk of the card' 
            },
            {
                id: 8,
                image: require('../assets/home.jpg'),
                title: 'service 08',
                description: 'Some quick example text to build on the card title and make up the bulk of the card' 
            }
        ]
        }
    }
}
</script>

<style scoped>

</style>