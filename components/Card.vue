<template lang="pug">
  div.column
    div.card
      header.card-header
        p.card-header-title.has-text-grey-darker {{ poke_id }}. {{ title }}
      a.has-text-grey-darker {{ url }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    },
    poke_id: {
      type: String,
      required: false
    }
  }
}
</script>
