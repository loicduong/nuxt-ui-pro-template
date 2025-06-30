// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: Infinity
      },
      multiline: {
        max: 1
      }
    }]
  }
})
