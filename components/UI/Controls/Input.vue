<template>
  <div class="control">
    <label>
      <slot/>
    </label>
    <input type="text"
           v-bind="$attrs"
           :value="value"
           :type="type"
           @input="$emit('input', $event.target.value)"

    >
  </div>
</template>

<script>
  export default {
    name: "Input",
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    }
  }
</script>

<style scoped>

</style>
