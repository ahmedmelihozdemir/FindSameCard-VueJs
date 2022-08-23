<template>
    <div class="container">
        <div class="row">
            <div class="cards-list">
                <div class="col-sm-3">
                    <img
                        class="cards"
                        :src="card.img"
                        alt="card"
                        v-for="(card, idx) in cards"
                        :key="idx"
                        @click="
                            changeImg(idx);
                            cardClose();
                            selectedCardCheck();
                        "
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, } from "vue";

const downCard = ref("https://picsum.photos/id/180/100/100");
const selectedLength = ref(0);
const cards = ref([
    {
        id: 1,
        title: "card1",
        img: "https://picsum.photos/id/180/100/100",
        img2: "https://picsum.photos/id/181/100/100",
        selected: false,
    },
    {
        id: 2,
        title: "card1",
        img: "https://picsum.photos/id/180/100/100",
        img2: "https://picsum.photos/id/181/100/100",
        selected: false,
    },
    {
        id: 3,
        title: "card2",
        img: "https://picsum.photos/id/180/100/100",
        img2: "https://picsum.photos/id/182/100/100",
        selected: false,
    },
    {
        id: 4,
        title: "card2",
        img: "https://picsum.photos/id/180/100/100",
        img2: "https://picsum.photos/id/182/100/100",
        selected: false,
    },
    {
        id: 5,
        title: "card3",
        img: "https://picsum.photos/id/180/100/100",
        img2: "https://picsum.photos/id/183/100/100",
        selected: false,
    },
    {
        id: 6,
        title: "card3",
        img: "https://picsum.photos/id/180/100/100",
        img2: "https://picsum.photos/id/183/100/100",
        selected: false,
    },
    {
        id: 7,
        title: "card4",
        img: "https://picsum.photos/id/180/100/100",
        img2: "https://picsum.photos/id/184/100/100",
        selected: false,
    },
    {
        id: 8,
        title: "card4",
        img: "https://picsum.photos/id/180/100/100",
        img2: "https://picsum.photos/id/184/100/100",
        selected: false,
    },
    {
        id: 9,
        title: "card5",
        img: "https://picsum.photos/id/180/100/100",
        img2: "https://picsum.photos/id/185/100/100",
        selected: false,
    },
    {
        id: 10,
        title: "card5",
        img: "https://picsum.photos/id/180/100/100",
        img2: "https://picsum.photos/id/185/100/100",
        selected: false,
    },
]);

const changeImg = computed((idx) => {
    return (idx) => {
        cards.value[idx].selected = !cards.value[idx].selected;
        if (cards.value[idx].selected === true) {
            cards.value[idx].img = cards.value[idx].img2;
            selectedLength.value++;
            if(selectedLength.value > 2) {
                selectedLength.value = 1;
            }
        } else if (cards.value[idx].selected === false) {
            cards.value[idx].img = downCard.value;
            if(selectedLength.value >2) {
                selectedLength.value = 1;
            }
        }
        console.log(cards.value[idx].selected + " - " + idx + " len: " + selectedLength.value);

    };
});

const cardClose = computed(() => {
    return () => {
        if(/* cards.value[idx].selected===true && */selectedLength.value === 2) {
            setTimeout(() => {
                cards.value.forEach((card, idx) => {
                    cards.value[idx].selected = false;
                    cards.value[idx].img = downCard.value;
                });
                selectedLength.value = 0;
            }, 3000);
        }
    };
});  

const selectedCardCheck = computed(()=>{
    return ()=>{
        if(selectedLength.value >= 2){
            setTimeout(()=>{
                alert("You selected 2 cards.");
            },500)
        }
    }
})




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
    border: 2px solid rebeccapurple; 
    border-radius: 10px;
    .cards {
        margin: 10px 10px;
        width: 100px;
        height: 100px;
        border: 1px solid rebeccapurple;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
            border: 1px solid #00bcd4;
            box-shadow: 2px 2px 25px rgba(37, 6, 164, 0.874);
            transition: 0.4s;
            transform: scale(1.1);
        }
    }
}
</style>
