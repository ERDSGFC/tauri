import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: '',
      open_time: 0,
      use_time: 0,
    }
  }

})