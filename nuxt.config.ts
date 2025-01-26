export default defineNuxtConfig({
  modules: ['nuxt-monaco-editor', '@nuxt/ui'],

  imports: {
    presets: [
      {
        from: 'vue-shell',
        imports: ['v-shell']
      }
    ]
  },

  compatibilityDate: '2025-01-26'
})