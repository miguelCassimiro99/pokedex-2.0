<template lang="pug">
  article.columns
    section#moves-list.column.is-narrow
      div.content
        ul(v-for="move in moves" :key="move.name")
          li.has-text-left
            span.is-size-6.is-capitalized {{ move.name }}
</template>
<script>

export default {
  props: {
    moves: {
      type: Array,
      required: true
    }
  }
}

</script>
<style lang="sass" scoped>
#moves-list
  width: 100%
  display: flex
  overflow-y: auto
  flex-direction: column
  max-height: 50vh
</style>
