<template>
    <b-container>
        <b-row align-v="center" align-h="center" style="min-height: 150px">
            <b-col cols="12" class="text-center">
                <h2 >
                    Preencha o formulário de contato abaixo
                </h2>
                <i class="fas fa-arrow-down arrow"></i>
                <!-- <i class="fas fa-paint-roller arrow"></i> -->
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
    .arrow {
        position: relative;
        font-size: 40px;
        animation-name: arrow-down;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes arrow-down {
        0% {
            top: 0px;
        }
        50% {
            top: 15px;
        }
        100% {
            top: 0px;
        }
    }

</style>