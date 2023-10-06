<template>
    <main>
        <div class="resultatBoks">
            <p>Du bør stemme på {{ resultat }}!</p>
        </div>
        <router-link class="tilbake" to="/">Ta testen på nytt!</router-link>
    </main>
</template>

<script>
export default {
    data() {
        return {
            partier: [
                "MDG",
                "Høyre",
                "Venstre",
                "FRP",
                "KRF",
                "AP",
                "SV",
                "Rødt",
                "SP"
            ],
            resultat: ""
        }
    },
    mounted() {
        let i = Math.floor(Math.random() * 9)
        this.resultat = this.partier[i]
    }
}
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url("stortinget.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}

.resultatBoks {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 12.5rem;
    width: 60rem;
    height: 30rem;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.75);
    font-size: 40px;
}
</style>