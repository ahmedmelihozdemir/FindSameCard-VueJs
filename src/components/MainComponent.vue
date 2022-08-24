<template>
    <div class="container">
        <div class="counter row">
            <h4 class="header">Find Same Card</h4>
            <h6 class="try-counter col-md-3">Try Counter:{{ counterTry }}</h6>
            <h6 class="answer-counter col-md-4">
                True Answer Counter: {{ counterAnswer }}
            </h6>
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
                            @click="
                                changeImg(index);
                                cardClose();
                                selectedCardCheck();
                                answerCounter();
                                tryCounter();
                                trueAnswer();
                            "
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

const downCard = ref("https://picsum.photos/id/948/1000/1000");
const selectedLength = ref(0);
const counterAnswer = ref(0);
const counterTry = ref(0);
const cards = ref([
    {
        id: 1,
        title: "181",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/181/1000/1000",
        selected: false,
    },
    {
        id: 2,
        title: "181",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/181/1000/1000",
        selected: false,
    },
    {
        id: 3,
        title: "182",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/182/1000/1000",
        selected: false,
    },
    {
        id: 4,
        title: "182",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/182/1000/1000",
        selected: false,
    },
    {
        id: 5,
        title: "183",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/183/1000/1000",
        selected: false,
    },
    {
        id: 6,
        title: "183",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/183/1000/1000",
        selected: false,
    },
    {
        id: 7,
        title: "184",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/184/1000/1000",
        selected: false,
    },
    {
        id: 8,
        title: "184",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/184/1000/1000",
        selected: false,
    },
    {
        id: 9,
        title: "185",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/185/1000/1000",
        selected: false,
    },
    {
        id: 10,
        title: "185",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/185/1000/1000",
        selected: false,
    },
    {
        id: 11,
        title: "186",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/186/1000/1000",
        selected: false,
    },
    {
        id: 12,
        title: "186",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/186/1000/1000",
        selected: false,
    },
    {
        id: 13,
        title: "187",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/187/1000/1000",
        selected: false,
    },
    {
        id: 14,
        title: "187",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/187/1000/1000",
        selected: false,
    },
    {
        id: 15,
        title: "188",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/188/1000/1000",
        selected: false,
    },
    {
        id: 16,
        title: "188",
        img: "https://picsum.photos/id/948/1000/1000",
        img2: "https://picsum.photos/id/188/1000/1000",
        selected: false,
    },
]);

let cardsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sortArray = cardsArray.sort(() => Math.random() - 0.5);
console.log(sortArray);

const newCards = cards.value.sort(() => Math.random() - 0.5);

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
        if (selectedLength.value === 1) {
            store.state.selectedCard1 = cards.value[idx].title;
        } else if (selectedLength.value === 2) {
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
        console.log(
            "Selected-1:" +
                store.state.selectedCard1 +
                " Selected-2:" +
                store.state.selectedCard2
        );
    };
});

const cardClose = computed(() => {
    return () => {
        if (selectedLength.value === 2) {
            setTimeout(() => {
                cards.value.forEach((card, idx) => {
                    cards.value[idx].selected = false;
                    cards.value[idx].img = downCard.value;
                });
                selectedLength.value = 0;
            }, 2000);
        }
    };
});

const selectedCardCheck = computed(() => {
    return () => {
        if (selectedLength.value >= 2) {
            setTimeout(() => {
                alert("You selected 2 cards.");
            }, 300);
        }
    };
});

const answerCounter = computed(() => {
    return () => {
        if (store.state.selectedCard1 === store.state.selectedCard2) {
            counterAnswer.value++;
        }
    };
});

const tryCounter = computed(() => {
    return () => {
        if (
            selectedLength.value === 2 &&
            store.state.selectedCard1 !== store.state.selectedCard2
        ) {
            counterTry.value++;
        }
        if (counterTry.value === 10) {
            alert("You lose!");
            counterTry.value = 0;
            counterAnswer.value = 0;
        }
    };
});

const trueAnswer = computed(() => {
    return () => {
        if (selectedLength.value === 2) {
            store.state.selectedCard1 = null;
            store.state.selectedCard2 = null;
        }
    };
});
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 5px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    font-weight: bolder;
    color: #00bcd4;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
}
.cards-list {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    .cards {
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
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
            width: 75%;
            height: 75%;
            border-radius: 5px;
            transition: 0.4s;
        }
    }
}
.counter {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    color: #1b39e0d9;
    .try-counter {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        padding: 10px;
        font-weight: bolder;
    }
    .answer-counter {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        padding: 10px;
        font-weight: bolder;
    }
}
</style>
