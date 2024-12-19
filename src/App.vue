<script setup>
import { onMounted, ref } from "vue";
import DropdownItem from "./components/DropdownItem.vue";
import IconMore from "./components/icons/IconMore.vue";
import IconDvd from "./components/icons/IconDvd.vue";
import IconSun from "./components/icons/IconSun.vue";
import IconMoon from "./components/icons/IconMoon.vue";

// application theme
const sessionTheme = sessionStorage.getItem("theme");
const theme = ref(sessionTheme || "light");
function toggleTheme() {
  if (theme.value == "light") {
    sessionStorage.setItem("theme", "dark");
    return (theme.value = "dark");
  }
  sessionStorage.setItem("theme", "light");
  return (theme.value = "light");
}

onMounted(() => {
  if (!sessionTheme) {
    sessionStorage.setItem("theme", "light");
  }
});
</script>

<template>
  <main
    :class="[
      theme == 'light' ? 'bg-light text-dark' : 'bg-dark text-light ',
      'h-dvh flex flex-col transition-all',
    ]"
  >
    <nav
      :class="[
        theme == 'light' ? 'bg-light' : 'bg-dark-3',
        'w-full py-2.5 flex border-b border-border',
      ]"
    >
      <div class="container mx-auto px-16 flex justify-between items-center">
        <!-- left -->
        <a
          href="/"
          :class="[
            theme == 'light' ? 'hover:text-dark/90' : 'hover:text-light/90',
            'flex items-center space-x-4 text-lg font-medium transition-all group',
          ]"
        >
          <span class="group-hover:rotate-90 transition-all"
            ><IconDvd :size="24" :theme="theme"></IconDvd>
          </span>
          <p class="">DVD Rental Application</p>
        </a>
        <!-- right -->
        <div class="flex items-center space-x-4 text-sm">
          <a
            href=""
            class="rounded cursor-pointer px-1 hover:text-primary transition-all"
            >Docs</a
          >
          <a
            href=""
            class="rounded cursor-pointer px-1 hover:text-primary transition-all"
            >Developer</a
          >
          <DropdownItem :theme="theme" class="group">
            <!-- button -->
            <template #dropdownlabel>
              <p
                :class="[
                  theme == 'light'
                    ? 'group-hover:bg-dark group-hover:text-light'
                    : 'group-hover:bg-dark/50',
                  'flex items-center h-9 rounded cursor-pointer group-hover:bg-dark/50 transition-all px-4 border border-border',
                ]"
              >
                About
              </p>
            </template>
            <!-- slot -->
            <template #dropdowncontent> </template>
          </DropdownItem>
          <div class="flex justify-center">
            <div class="border-r border-border h-6"></div>
          </div>
          <div
            :class="[
              theme == 'light' ? 'bg-dark/30' : 'bg-dark ',
              'flex w-12 rounded-full transition-all p-0.5',
            ]"
            @click="toggleTheme"
          >
            <div
              :class="[
                theme == 'light'
                  ? 'bg-light text-dark'
                  : 'bg-light/20 text-light ms-auto',
                'p-1 rounded-full transition-all',
              ]"
            >
              <IconSun v-if="theme == 'light'" :theme="theme" :size="14" />
              <IconMoon v-if="theme == 'dark'" :theme="theme" :size="14" />
            </div>
          </div>
          <DropdownItem :theme="theme" class="group">
            <!-- button -->
            <template #dropdownlabel>
              <IconMore
                :theme="theme"
                :size="36"
                class="rounded cursor-pointer group-hover:bg-dark/50 transition-all"
              />
            </template>
            <!-- slot -->
            <template #dropdowncontent>
              <div class="px-4 py-2">
                <button class="w-full bg-light/20 rounded px-4 py-2 flex">
                  Login
                </button>
              </div>
              <div class="border-b border-border py-1"></div>
              <div class="px-4 py-2">
                <p>tes</p>
              </div>
            </template>
          </DropdownItem>
        </div>
      </div>
    </nav>
  </main>
</template>

<style scoped></style>
