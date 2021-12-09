<script setup>
import { ref } from 'vue';

const open = ref(false);
const toggleOpen = (value) => {
  open.value = value ?? !open.value;
};
const submitting = ref(false);
const handleSubmit = () => {
  submitting.value = true;
  setTimeout(() => {
    submitting.value = false;
    open.value = false;
  }, 2000);
};
</script>

<template>
  <main class="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-300 via-cyan-500 to-blue-600">
    <!-- Card -->
    <div
      class="
        p-8
        flex flex-col
        items-center
        space-y-2
        rounded-lg
        bg-white bg-opacity-40
        border border-white border-opacity-60
        shadow-lg
        sm:w-1/2
      "
    >
      <div class="w-56">
        <img
          src="https://s7g10.scene7.com/is/image/hyundaiautoever/IONIQ_5_cutout:16x9?wid=1120&hei=630&fmt=png-alpha&fit=wrap,1"
          alt="ioniq 5"
        />
      </div>
      <div class="text-center text-white text-opacity-90">
        <h2 class="text-2xl font-bold tracking-wider">Hyundai Ioniq5</h2>
        <p class="text-xs uppercase font-semibold tracking-wide">Desde <span class="text-base">35.000€</span></p>
      </div>
      <div class="grid grid-rows-2 gap-2 sm:grid-rows-1 sm:grid-cols-2">
        <a class="btn" href="#">Descubre mas</a>
        <button class="btn" @click="toggleOpen(true)">Avisame</button>
      </div>
    </div>
    <!-- modal -->
    <div v-if="open" class="fixed inset-0 flex items-center justify-center z-10">
      <button @click="toggleOpen(false)" class="fixed inset-0 w-full bg-gray-500 bg-opacity-30"></button>
      <div class="z-20 bg-gray-100 py-4 px-8 rounded-lg shadow-2xl">
        <div class="flex items-center justify-between">
          <h2 class="text-gray-700 text-lg">Contactanos</h2>
          <button
            class="
              p-1
              text-sky-600
              rounded-full
              transtion-colors
              duration-300
              border border-transparent
              hover:bg-sky-100 hover:text-sky-700 hover:rotate-90
              focus:outline-none focus:bg-sky-100 focus:text-sky-700 focus:rotate-90 focus:border-sky-700
            "
            @click="toggleOpen(false)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p class="mt-4 text-gray-700">Envianos tu email para conocer la disponibilidad</p>
        <form @submit.prevent="handleSubmit" class="mt-4 flex gap-2">
          <label for="email" class="sr-only">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="pepe@email.com"
            class="py-1 px-4 rounded border-2 border-sky-300 focus:border-sky-500 focus:outline-none placeholder-gray-500"
          />
          <button
            type="submit"
            class="flex items-center justify-center w-32 bg-sky-500 text-white bg-opacity-75 rounded hover:bg-sky-700 transition-colors"
          >
            <span v-if="submitting">
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            <span v-else>Enviar</span>
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<!-- Hyundai
<img
      src="https://s7g10.scene7.com/is/image/hyundaiautoever/IONIQ_5_cutout:16x9?wid=1120&hei=630&fmt=png-alpha&fit=wrap,1"
      alt="ioniq 5"
    />\

X

<svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

<svg
                class="animate-spin mx-auto h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>

 -->
