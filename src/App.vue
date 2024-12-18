<script setup>
import { ref } from "vue";
import DropdownItem from "./components/DropdownItem.vue";
import IconMore from "./components/icons/IconMore.vue";

const theme = ref("dark");
function toggleTheme() {
  if (theme.value == "light") return (theme.value = "dark");
  return (theme.value = "light");
}

const page = ref("home");
function setPage(page) {
  return (page.value = page);
}
</script>

<template>
  <main
    :class="[
      theme == 'light' ? 'bg-light text-dark' : 'bg-dark-2 text-light ',
      'h-dvh flex flex-col transition-all',
    ]"
  >
    <nav
      :class="[
        theme == 'light' ? 'bg-light-2' : 'bg-dark-3',
        'w-full py-4 flex border-b border-border',
      ]"
    >
      <div class="container mx-auto px-4 flex justify-between items-center">
        <!-- left -->
        <a href="/" :class="[theme == 'light' ? 'hover:text-dark/80' : 'hover:text-light/80' ,'text-lg font-medium transition-all']">DVD Rental Application</a>
        <!-- right -->
        <div class="flex items-center space-x-4">
          <a href="" class="hover:text-primary transition-all">Docs</a>
          <a href="" class="hover:text-primary transition-all">Developer</a>
          <div class="flex flex-1 w-full justify-center items-center">
            <DropdownItem :theme="theme">
              <!-- button -->
              <template #dropdownlabel
                ><IconMore :theme="theme"></IconMore
              ></template>
              <!-- slot -->
              <template #dropdowncontent>
                  <div class="flex justify-between px-4 py-2">
                    <p class="cursor-default">Apperance :</p>
                    <button
                      @click="toggleTheme"
                      :class="[
                        theme == 'light'
                          ? 'border-light hover:bg-light hover:text-dark'
                          : 'border-dark hover:bg-dark hover:text-light',
                        'border rounded-sm px-4 transition-all duration-300',
                      ]"
                    >
                      {{ theme }}
                    </button>
                  </div>
                  <div class="border-b border-border"></div>
                  <div class="px-4 py-2">
                    <p>tes</p>
                  </div>
              </template>
            </DropdownItem>
          </div>
        </div>
      </div>
    </nav>
  </main>
</template>

<style scoped></style>
