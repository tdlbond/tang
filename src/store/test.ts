import { defineStore } from 'pinia'

export const useTest = defineStore('test', {
  state: () => ({
    name: 'tom'
  }),
  getters: {
    helloName: (state) => `hello ${state.name}`
  },
  actions: {
    setName(name: string) {
      this.name = name
    }
  }
})
