<template lang="pug">
  b-table(
    :data="isEmpty ? [] : pokemonData"
    :mobile-cards="hasMobileCards"
    :loading="isTableLoading"
  )
    b-table-column#height-column(field="height" label="Height" numeric v-slot="props") {{ props.row.height }}
    b-table-column#weight-column(field="weight" label="Weight" numeric v-slot="props") {{ props.row.weight }}
    b-table-column(field="shape" label="Shape" numeric v-slot="props")
      span.is-capitalized {{ props.row.shape }}
    b-table-column#egg-groups-column(field="egg_groups" label="Egg Group" numeric v-slot="props")
      div.has-text-right.is-hidden-mobile(v-for="group in props.row.egg_groups")
        span.is-capitalized {{ group.name }}
      div.content.is-hidden-desktop
        ul.has-text-right(v-for="group in props.row.egg_groups")
          li.is-capitalized {{ group.name }}
    b-table-column#abilities-column(field="abilities" label="Abilities" numeric v-slot="props")
      div.has-text-right.is-hidden-mobile(v-for="ability in props.row.abilities")
        span.is-capitalized {{ ability.name}}
      div.content.is-hidden-desktop
        ul.has-text-right(v-for="ability in props.row.abilities")
          li.is-capitalized {{ ability.name }}

</template>
<script>

export default {
  props: {
    pokemonData: {
      type: null,
      required: false
    },
    isTableLoading: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data () {
    return {

      isEmpty: false,
      hasMobileCards: true,
      columns: [
        {
          field: 'height',
          label: 'Height'
        },
        {
          field: 'weight',
          label: 'Weight'
        },
        {
          field: 'shape',
          label: 'shape'
        },
        {
          field: 'egg_groups',
          label: 'Egg Groups'
        },
        {
          field: 'abilities',
          label: 'Abilities'
        }
      ]
    }
  }
}

</script>
<style lang="sass">

</style>
