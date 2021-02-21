<template>
    <svg :class="svgClass" class="svg-icon" aria-hidden="true">
      <use :xlink:href="`#${iconName}`" />
    </svg>
</template>

<script>
const iconIds = import.meta.globEager('/src/assets/icons/*.svg')

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return iconIds[`/src/assets/icons/${this.name}.svg`].default
    },
    svgClass () {
      return this.className || ''
    },
  }
}
</script>

<style scoped>
.svg-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: #fff;
  stroke: #fff;
}
</style>
