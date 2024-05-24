<script setup>

defineProps({
  date: Number,
  month: String,
  year: Number,
  name: String,
  image: String,
  link: String,
  preview: String,
  type: String
})
</script>

<template>
  <section class="card">
    <img v-if="image" class="card__image" v-bind:src="image" alt="some_content">
    <div v-else class="filler"></div>
    <div class="card__wrapper">
      <div class="date__info">
        <div class="day">{{ date }}</div>
        <div class="month__year">{{ month }} {{ year }}</div>
      </div>
    </div>
      <div class="content">
        <div class="card__wrapper">
          <a v-bind:href="link" class="card__title">{{ name }}</a>
        </div>
        <div class="card__wrapper" style="flex: 1 0 auto">
          <p class="card__text">{{ preview }}</p>
        </div>
        <div class="card__wrapper">
          <div class="tag">
            <p class="tag__text">{{ type }}</p>
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped>

.card__wrapper {
  margin: 0 32px 0 32px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 16px;
}

.filler{
  height: 40px;
}

.card {
  width: 100%;
  max-width: 536px;
  background-color: #fff;
  border-radius: 8px;
  outline: 1px solid var(--border-color);
  outline-offset:-2px;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
}

.card__image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  position: relative;
  z-index: 1;
  border-radius: 8px 8px 0 0;
}

.content {
  display: flex;
  flex-direction: column;
  flex:1 0 auto;
}

.date__info {
  grid-column: 1/3;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.day{
  font-size: 40px;
  font-weight: 400;
  color: var(--date-gray);
}

.month__year {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 18px;
  color: var(--date-gray);
}

.card__title {
  grid-column: 1/13;
}

.card__text{
  grid-column: 1/13;
}

.tag{
  background-color: var(--type-background);
  border-radius: 360px;
  grid-column: 1/4;
  min-height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.tag__text{
  margin: 0;
  color: var(--type-font);
  font-size: 12px;
  text-align: center;
}

</style>
