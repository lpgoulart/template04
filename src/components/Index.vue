<template>
  <div>
    <b-container fluid class="jumbo">
      
      <navbar />
      
      <b-container>
        <b-row style="padding-top: 120px">
          
          <b-col sm="12" md="8" class="text-center">
            <h1>
              Precisa de pintura <i class="fas fa-paint-roller arrow"></i>
            </h1>

            <h4>
              Entre em contato conosco
            </h4>
            <router-link to="/contato" class="btn btn-primary" style="padding: 5px 75px">
              CONTATO
            </router-link>
          </b-col>

          <b-col sm="12" md="4" class="text-center">
            
          </b-col>

        </b-row>
      </b-container>
    </b-container>


    <b-container class="service-box service">
      
      <router-view/>

    </b-container>

    <Footer />

  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'

export default {
  name: 'Index',
  components: {
    Navbar,
    Footer
  }

}
</script>

<style scoped>

.jumbo {
  min-height: 500px;
  background-image: url(../assets/home.jpg);
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}

.service {
  /* background-color: rgba(123, 253, 132, .5); */
  border-radius: 10px;
  min-height: 200px;
  padding: 32px;

  animation-name: navigation;
  animation-duration:60s;
  animation-iteration-count: infinite;
}

.card-text {
  font-size: 14px;
  text-align: justify;
  line-height: 1rem;
}


@keyframes navigation {
    0% {
      background-color: lightgreen;
    }
    20% {
      background-color: lightcoral;
    }
    40% {
      background-color: lightskyblue;
    }
    60% {
      background-color: lightsalmon;
    }
    80% {
      background-color: lightpink;
    }
    100% {
      background-color: lightgreen;
    }
}

.service-box {
  position: initial; 
  top: 0;
  padding-top: 32px
}

.arrow {
        position: relative;
        font-size: 40px;
        animation-name: arrow-down, arrow-down2;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes arrow-down {
        0% {
            top: -5px;
        }
        50% {
            top: 15px;
        }
        100% {
            top: -5px;
        }
    }
    @keyframes arrow-down2 {
        0% {
            transform:scaleY(1);
        }
        50% {
            transform:scaleY(.8);
        }
        100% {
            transform:scaleY(1);
        }
    }

@media (min-width: 576px) { 
  .service-box {
    position: relative; 
    top: -100px;
  }
}
</style>
