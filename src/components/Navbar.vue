<template>
    <div id="navbar">
        <b-navbar toggleable="lg" class="navbar" style="padding-top: 0; padding-bottom: 0; margin-top: 0"  fixed="top"> 
            <div class="container text-center">

                <b-navbar-brand href="#/" style="padding: 0">
                    <img src="../assets/logo.png" class="img-fluid" width="70" height="70" alt="logo">
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav class="navbar-drop">

                <b-navbar-nav class="ml-auto" style="background-color: rgba(255,255,255,1);box-shadow:2px 2px 5px black">

                    <b-nav-item href="#/" class="navbar-item">HOME</b-nav-item>               
                    
                    <b-nav-item href="#/servicos" class="navbar-item">SERVIÇOS</b-nav-item>

                    <b-nav-item href="#/trabalhos" class="navbar-item">TRABALHOS</b-nav-item>
                    
                    <b-nav-item href="#/sobre" class="navbar-item">SOBRE</b-nav-item>

                    <b-nav-item href="#/contato" class="navbar-item">CONTATO</b-nav-item>
                    

                </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>

.navbar-drop *:hover{
    color: aliceblue!important;
}

.navbar-item {
    background-color: transparent!important;
    transition: .5s;

}
.navbar-item:hover {
    background-color: #2c3e50!important;
    color: white!important;
    transition: .5s;
}   

</style>