import { defineStore } from 'pinia'
import axios from 'axios'
import { reactive } from 'vue'
import moment from 'moment'

export const useDataStore = defineStore('dataStore', {
  state: () => {
    return { 
      count: 1,
      newsItems: reactive([]),
      api: 'https://flems.github.io/test/api/news/'
     }
  },
  actions: {
    increment() {
      this.count++
    },
    async fetchData() {
      try {
        const response = await axios.get(this.api + String(this.count));
        this.newsItems = [...this.newsItems, ...response.data.items.map(item => ({
          date: moment.unix(item.date).date(),
          month: moment.unix(item.date).format('MMMM'),
          year: moment.unix(item.date).year(),
          name: item.name,
          image: item.image, 
          link: item.link, 
          previewText: item.previewText,
          type: item.type.value
        }))];
      } catch (error) {
        alert('Error fetching news', error);
      }
    },
  },
})
