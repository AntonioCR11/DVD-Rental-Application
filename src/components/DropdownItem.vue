<script setup>
import { ref } from "vue";

defineProps({
  theme: String,
});

const isDropdownVisible = ref(false);
const isAnimating = ref(false);

function openDropdown() {
  if (!isAnimating.value) {
    isDropdownVisible.value = true;
  }
}
function closeDropdown() {
  isDropdownVisible.value = false;
}
function transitionStart() {
  isAnimating.value = true;
}
function transitionEnd() {
  isAnimating.value = false;
}
</script>

<template>
  <div
    class="relative flex"
    @mouseenter="openDropdown"
    @mouseleave="closeDropdown"
  >
    <!-- button -->
    <slot name="dropdownlabel"></slot>
    <!-- dropdown -->
    <Transition
      name="fade"
      @enter="transitionStart"
      @leave="transitionStart"
      @after-enter="transitionEnd"
      @after-leave="transitionEnd"
    >
      <div v-if="isDropdownVisible" class="absolute top-full right-0 z-50 w-52">
        <div
          :class="[
            theme == 'light' ? 'bg-light' : 'bg-dark text-light',
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
  transition: opacity 0.3s ease-in-out, top 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  top: 50%;
}
</style>
