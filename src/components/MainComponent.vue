<template>
    <div class="container">
        <div class="row">
            <h2>Try Counter:{{counterTry}}</h2>
            <h2>True Answer Counter: {{ counterAnswer }}</h2>
            <div class="cards-list">
                <div class="row">
                    <div
                        class="cards col-md-3"
                        v-for="(card, index) in newCards"
                        :key="index"
                    >
                        <img
                            class="cards-img"
                            :src="card.img"
                            alt=""
                            @click="changeImg(index); cardClose(); selectedCardCheck();answerCounter(); tryCounter()"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();

const downCard = ref("https://picsum.photos/id/948/300/300");
const selectedLength = ref(0);
const counterAnswer = ref(0);
const counterTry = ref(0);
const cards = ref([
    {
        id: 1,
        title: "181",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/181/500/500",
        selected: false,
    },
    {
        id: 2,
        title: "181",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/181/500/500",
        selected: false,
    },
    {
        id: 3,
        title: "182",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/182/500/500",
        selected: false,
    },
    {
        id: 4,
        title: "182",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/182/500/500",
        selected: false,
    },
    {
        id: 5,
        title: "183",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/183/500/500",
        selected: false,
    },
    {
        id: 6,
        title: "183",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/183/500/500",
        selected: false,
    },
    {
        id: 7,
        title: "184",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/184/500/500",
        selected: false,
    },
    {
        id: 8,
        title: "184",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/184/500/500",
        selected: false,
    },
    {
        id: 9,
        title: "185",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/185/500/500",
        selected: false,
    },
    {
        id: 10,
        title: "185",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/185/500/500",
        selected: false,
    },
    {
        id: 11,
        title: "186",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/186/500/500",
        selected: false,
    },
    {
        id: 12,
        title: "186",
        img: "https://picsum.photos/id/948/500/500",
        img2: "https://picsum.photos/id/186/500/500",
        selected: false,
    },
]);

let cardsArray = [1,2,3,4,5,6,7,8,9,10];
let sortArray = cardsArray.sort(() => Math.random() - 0.5);
console.log(sortArray);

const newCards = cards.value.sort(() => Math.random() - 0.5)

const changeImg = computed((idx) => {
    return (idx) => {
        cards.value[idx].selected = !cards.value[idx].selected;
        if (cards.value[idx].selected === true) {
            cards.value[idx].img = cards.value[idx].img2;
            selectedLength.value++;
            if (selectedLength.value > 2) {
                selectedLength.value = 1;
            }
        } else if (cards.value[idx].selected === false) {
            cards.value[idx].img = downCard.value;
            if (selectedLength.value > 2) {
                selectedLength.value = 1;
            }
        }
        /* store.state.selectedCard = cards.value[idx].title; */
        if(selectedLength.value === 1){
            store.state.selectedCard1 = cards.value[idx].title;
        }else if(selectedLength.value === 2){
            store.state.selectedCard2 = cards.value[idx].title;
        }
        console.log(
            cards.value[idx].selected +
                " - " +
                idx +
                " seLengt: " +
                selectedLength.value +
                "  " +
                cards.value[idx].title
        );
        console.log("Selected-1:"+store.state.selectedCard1 +" Selected-2:"+ store.state.selectedCard2);
    };
});

/* if(selectedLength.value === 1){
            store.state.selectedCard1 = cards.value[idx].title;
        }else if(selectedLength.value === 2){
            store.state.selectedCard2 = cards.value[idx].title;
        } */

/* const selectedCardAdd = computed((idx)=>{
    return (idx)=>{
        if(selectedLength.value === 1){
            store.state.selectedCard1 = cards.value[idx].title;
        }else if (selectedLength.value === 2){
            store.state.selectedCard2 = cards.value[idx].title;
        }
        console.log("select 1:"+store.getters.getSelectedCard1 +"select 2:"+ store.getters.getSelectedCard2)
    }
}) */

const cardClose = computed(() => {
    return () => {
        if (selectedLength.value === 2) {
            setTimeout(() => {
                cards.value.forEach((card, idx) => {
                    cards.value[idx].selected = false;
                    cards.value[idx].img = downCard.value;
                });
                selectedLength.value = 0;
            }, 1000);
        }
    };
});

const selectedCardCheck = computed(() => {
    return () => {
        if (selectedLength.value >= 2) {
            setTimeout(() => {
                alert("You selected 2 cards.");
            }, 450);
        }
    };
});

const answerCounter = computed(()=>{
    return ()=>{
        if(store.state.selectedCard1 === store.state.selectedCard2){
            counterAnswer.value++;
        }
    }
})

const tryCounter = computed(()=>{
    return ()=>{
        if(selectedLength.value === 2){
            counterTry.value++;
        }
        if(counterTry.value === 10){
            alert("You lose!");
        }
    }
}
)



/* const selectImg = computed((idx) => {
    return (idx) => {
        cards.value.forEach((card, idx) => {
            cards.value[idx].title = card.title;
            console.log(card.title);
        });
    };
}); */

const sameCardCheck = computed((idx) => {
    return (idx) => {
        if(selectedLength.value===2){
            if(cards.value[idx].title === "card1"){
                counterAnswer.value++;
            }if(cards.value[idx].title === "card2"){
                counterAnswer.value++;
            }if(cards.value[idx].title === "card3"){
                counterAnswer.value++;
            }if(cards.value[idx].title === "card4"){
                counterAnswer.value++;
            }if(cards.value[idx].title === "card5"){
                counterAnswer.value++;
            }
        }
    };
}); 

/* const allCardClose = computed(() => {
    return () => {
        setTimeout(() => {
            cards.value.forEach((card) => {
                card.selected = false;
                card.img = downCard.value;
            }),
                console.log("All cards closed");
        }, 5000);
    };
}); */
</script>

<style scoped lang="scss">

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
}
.cards-list {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(90, 153, 51);
    border-radius: 10px;
    padding: 30px;
    .cards {
        padding: 10px;
        margin: 10px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rebeccapurple;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
            border: 1px solid #00bcd4;
            box-shadow: 2px 2px 25px rgba(37, 6, 164, 0.874);
            transition: 0.4s;
            transform: scale(1.1);
        }
        .cards-img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            transition: 0.4s;
        }
    }
}
</style>
