<template>
    <div class="formBoks">
        <h1>{{ sporsmal }}</h1>
        <form ref="morendin">
            <input id="1" type="radio" name="spr" @click="addPoeng1">
            <label for="1">Helt enig</label>
            <input id="2" type="radio" name="spr" @click="addPoeng2">
            <label for="2">Litt enig</label>
            <input id="3" type="radio" name="spr" @click="addPoeng3">
            <label for="3">Litt unig</label>
            <input id="4" type="radio" name="spr" @click="addPoeng4">
            <label for="4">Helt uenig</label>
        </form>
    </div>
    <div class="btnBoks">
        <div class="btn" id="back" @click="prevPage">
            Tilbake
        </div>
        <div class="btn" id="pageNbr">
            {{ pageNumber }}
        </div>
        <div class="btn" id="forward" @click="nextPage">
            Neste
        </div>
    </div>
    <router-link v-show="showing" class="link" to="/resultat">Gå til resultat</router-link>
</template>

<script>
import { stringifyQuery } from 'vue-router';
import sporsmaal from "../Questions.json"

export default {
    data() {
        return {
            myData: sporsmaal,
            sporsmal: '',
            numberThing: 0,
            pageNumber: 1,
            poeng: [],
            showing: false,
        }
    },
    mounted() {
        let hvilkeSporsmal = this.myData[this.numberThing].sporsmal;
        this.sporsmal = hvilkeSporsmal
    },
    methods: {
        addPoeng1() {
            this.poeng[this.numberThing] = "1"
            console.log(this.poeng)
            if (this.pageNumber == 10) {
                this.showing = true
            }
        },
        addPoeng2() {
            this.poeng[this.numberThing] = "2"
            console.log(this.poeng)
            if (this.pageNumber == 10) {
                this.showing = true
            }
        },
        addPoeng3() {
            this.poeng[this.numberThing] = "3"
            console.log(this.poeng)
            if (this.pageNumber == 10) {
                this.showing = true
            }
        },
        addPoeng4() {
            this.poeng[this.numberThing] = "4"
            console.log(this.poeng)
            if (this.pageNumber == 10) {
                this.showing = true
            }
        },
        prevPage() {
            if (this.numberThing == 0) {
                return
            } 
            else {
                let i = this.numberThing -1
                if (this.poeng[i]) {
                    document.getElementById(this.poeng[i]).checked = true
                } 
                this.numberThing -= 1
                let hvilkeSporsmal = this.myData[this.numberThing].sporsmal;
                this.sporsmal = hvilkeSporsmal
                this.pageNumber -= 1
            }
        },
        nextPage() {
            if (!this.poeng[this.numberThing]) {
                return
            } 
            else {
                if (this.numberThing == 9) {
                    return
                } 
                else {
                    let i = this.numberThing +1
                    if (this.poeng[i]) {
                        document.getElementById(this.poeng[i]).checked = true
                        this.numberThing += 1
                        let hvilkeSporsmal = this.myData[this.numberThing].sporsmal;
                        this.sporsmal = hvilkeSporsmal
                    } else {
                        this.numberThing += 1
                        let hvilkeSporsmal = this.myData[this.numberThing].sporsmal;
                        this.sporsmal = hvilkeSporsmal
                    }
                    if (this.poeng[this.pageNumber]) {
                        this.pageNumber += 1
                        return
                    }
                    else {
                        this.$refs.morendin.reset()
                    }
                    this.pageNumber += 1
                }
            }
        }
    }
}
</script>

<style scoped>
.formBoks {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 12.5rem;
    width: 60rem;
    height: 30rem;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.75);
}

.labels {
    display: flex;
    justify-content: space-around;
}

.inputs {
    display: flex;
    justify-content: space-around;
}

.btnBoks {
    display: flex;
    justify-content: center;
    flex-direction: row;
    background: none;
}
.btn {
    display: flex;
    justify-content: center;
    padding: 1rem;
    border-radius: 10px;
    margin: 0.25rem;
    width: 3rem;
    background-color: rgba(255, 255, 255, 0.85);
}

.btn:hover {
    background-color: grey;
    cursor: pointer;
}

.btn#pageNbr:hover {
    background-color: rgba(255, 255, 255, 0.85);
    cursor: auto;
}



.btn#pageNbr {
    width: 1.5rem;
}
</style>