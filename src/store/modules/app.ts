import { defineStore } from "pinia";

export const useAppstore = defineStore({
    id: 'app-store',
    state: () => ({
        test: '仓库测试值',
    }),

    getters: {
        getTest(): string {
            return this.test
        }
    },
    actions: {
        changeVal() {
            this.test = '改变值：14'
        }       
    }
})