<script setup>
import Card from './components/Card.vue'
import { onMounted, reactive, watch } from 'vue';
import { useDataStore } from './DataStore'

const store = useDataStore();
let items = reactive([]);

onMounted(() => {
  store.fetchData();
})

const downloadMore = () => {
  store.increment();
  store.fetchData();
}

watch(
  () => store.newsItems,
  (newItems) => {
    if (newItems.length > 0) {
      Object.assign(items, newItems);
    }
  }
);

</script>

<template>
  <!-- Заголовочная часть с логотипом -->

  <header>
    <div class="wrapper">
      <img alt="logo" class="logo" src="./assets/logo.svg" />
    </div>
  </header>

  <!-- Заголовочная часть с названием -->

  <section class="title">
    <div class="wrapper">
      <h1 class="title__content">Новости</h1>
    </div>
  </section>

  <!-- Карточки -->
  <div class="wrapper">
    <section class="cards__section">
      <Card v-for="item in items"
      :date="item.date" 
      :month="item.month" 
      :year="item.year" 
      :name="item.name" 
      :image="item.image" 
      :link="item.link" 
      :preview="item.previewText" 
      :type="item.type" />
    </section>
  </div>

  <!-- Загрузить больше -->

  <div class="wrapper">
    <button @click="downloadMore" class="load__more">Загрузить ещё</button>
  </div>

  <!-- Футер -->
  <footer>
    <div class="wrapper">
      <div class="footer__content">
        <img alt="logo" class="logo" src="./assets/logo.svg" />
        <p class="footer-text">© alpha, 2023</p>
      </div>
    </div>
  </footer>

</template>

<style scoped>
.wrapper {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-left: 100px;
  margin-right: 100px;
  grid-gap: 48px;
}

header {
  height: 123px;
  grid-column: 1/12;
  display: flex;
  background-color: #fff;
  align-items: center;
  position: relative;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
  z-index: 2;
}

header::after {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  z-index: 1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
}

.title {
  min-height: 320px;
  display: flex;
  align-items: end;
  background-image: url('./assets/header_bg.jpg');
  background-size: no-repeat;
  background-position: center;
  background-size: contain;
}

.cards__section {
  margin-top: 64px;
  grid-column: 1/13;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;
}

.load__more {
  height: 56px;
  grid-column: 6/8;
  margin: 72px 0 72px 0;
}

footer {
  display: flex;
  align-items: center;
  height: 200px;
  background-color: var(--footer-background);
}
</style>
