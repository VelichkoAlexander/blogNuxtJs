<template>
  <div class="control">
    <label>
      <slot/>
    </label>
    <textarea type="text"
              :value="value"
              @input="$emit('input', $event.target.value)"
    >
    </textarea>
  </div>
</template>

<script>
  export default {
    name: "Textarea",
    props: {
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
