<template>
    <div>
        <b-container fluid id="footer">
            <b-container>

                <b-row align-h="center" class="padding text-center">

                    <b-col sm="12" md="4" lg="4" class="text-left">
                        <h2>
                            <i class="fas fa-envelope"></i>
                            CONTATO
                        </h2>
                        <br>

                        <p>
                            <i>
                                Telefone:
                            </i>
                            <br>
                            (84) 9 1234-5678
                        </p>
                        <p>
                            <i>
                                Email:
                            </i>
                            <br>
                            email@email.com
                        </p>
                    </b-col>

                    <b-col sm="12" md="5" lg="5">
                        <b-form action="https://formspree.io/leonardo@roffor.com.br" method="POST" v-if="show" style="padding: 0;">
                            <b-row>
                                <b-col sm="12">
                                    
                                    <b-form-group>
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Nome"
                                    ></b-form-input>
                                    </b-form-group>

                                </b-col>
                                
                                <b-col sm="12">
                                    
                                    <b-form-group>
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        name="_replyto"
                                        type="email"
                                        required
                                        placeholder="Email"
                                    ></b-form-input>
                                    </b-form-group>

                                </b-col>

                                <b-col sm="12">
                                    
                                    <b-form-group>
                                    <b-form-textarea
                                        id="textarea"
                                        v-model="form.message"
                                        placeholder="Conte sobre suas ideias"
                                        rows="3"
                                        no-resize
                                    ></b-form-textarea>
                                    </b-form-group>

                                </b-col>

                            </b-row>
                            
                            <b-button class="btn-block" type="submit" variant="primary">Submit</b-button>
                        </b-form>
                    </b-col>

                    <b-col sm="12" md="3" lg="3">
                        <div style="border-left: 1px solid white">
                            <ul id="social-icons" class="text-left">
                                <li>
                                    <p>
                                        Nos siga no facebook
                                    </p>
                                    <a href="#" style="display: inline">
                                        <i class="fab fa-facebook-square"></i>
                                    </a>
                                    <h5 style="display: inline">
                                        /pinturasLorem
                                    </h5>
                                </li>
                                
                                <li>
                                    <p>
                                        Estamos no instagram
                                    </p>
                                    <a href="#" style="display: inline">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <h5 style="display: inline">
                                        /pinturasLorem
                                    </h5>
                                </li>
                            </ul>
                        </div>
                    </b-col>


                </b-row>

                <hr style="background-color: white">

                <b-row>
                    <b-col sm="12" md="6" class="text-left" style="padding: 15px 20px 15px 20px">
                        <p> 
                            Copyright &copy; 2019 pinturasLorem, All rights reserved
                        </p>
                    </b-col>
                    <b-col sm="12" md="6" class="text-right" style="padding: 15px 20px 15px 20px">
                        <p> 
                            Desenvolvido por <a style="color:cyan" target="_blank" href="https://lpgoulart.netlify.com">Lpgoulart</a>
                        </p>
                    </b-col>
                </b-row>
                </b-container>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
    return {
            form: {
                email: '',
                name: '',
                message: ''
            },
            show: true,
        }
    }
}
</script>

<style scoped>
    #social-icons {
        text-decoration: none;
        list-style-type: none;
    }
    #social-icons a i{
        font-size: 40px;
    }
    #social-icons p {
        margin-bottom: 0;
    }
    #social-icons li {
        padding-bottom: 10px;
    }
    .padding {
        padding-top: 0;
    }
    #footer * {
    color: rgba(255, 255, 255, 1);
    }
    #footer i {
        color: white;
    }
    #categoria li {
        padding: 10px 0 10px 0;
    }
    #footer a {
        color:honeydew;
    }
    #footer a:hover {
        color:white;
    }
</style>