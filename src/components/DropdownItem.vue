<script setup>
import { ref } from "vue";

defineProps({
  theme: String,
});

const isDropdownVisible = ref(false);
function toggleDropdown() {
  return (isDropdownVisible.value = !isDropdownVisible.value);
}
</script>

<template>
  <div
    class="relative flex"
    @mouseenter="toggleDropdown"
    @mouseleave="toggleDropdown"
  >
    <slot name="dropdownlabel"></slot>

    <Transition name="fade">
      <div v-if="isDropdownVisible" class="absolute top-full right-0 z-50 w-52">
        <div
          :class="[
            theme == 'light'
              ? 'bg-light'
              : 'bg-dark text-light',
            'border border-border rounded py-2',
          ]"
        >
          <slot name="dropdowncontent"></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
