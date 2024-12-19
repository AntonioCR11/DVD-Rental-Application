<script setup>
defineProps({
  theme: String,
  size: Number,
});
</script>

<template>
  <svg
    :height="size"
    :width="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" />
    <circle
      cx="7"
      cy="12"
      r="0.5"
      :class="[theme == 'light' ? 'stroke-dark' : 'stroke-light', '']"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="0.5"
      :class="[theme == 'light' ? 'stroke-dark' : 'stroke-light', '']"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="17"
      cy="12"
      r="0.5"
      :class="[theme == 'light' ? 'stroke-dark' : 'stroke-light', '']"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
