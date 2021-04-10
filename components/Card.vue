<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey-darker">
          {{ title }}
        </p>
      </header>
      <a class="has-text-grey-darker">
        {{ url }}
      </a>
      <a class="has-text-grey-darker">
        {{ poke_id }}
      </a>
    </div>
  </div>
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
