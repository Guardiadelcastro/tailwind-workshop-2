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
  }, 2000);
};
</script>

<template>
  <main class="min-h-screen bg-blue-500 flex items-center justify-center bg-gradient-to-br from-sky-300 via-cyan-500 to-blue-600">
    <div class="bg-white bg-opacity-30 p-5 border border-white border-opacity-10 rounded-lg shadow-lg">
      <div>
        <img
          class="h-44"
          src="https://s7g10.scene7.com/is/image/hyundaiautoever/IONIQ_5_cutout:16x9?wid=1120&hei=630&fmt=png-alpha&fit=wrap,1"
          alt="ioniq 5"
        />
      </div>
      <div class="flex flex-col items-center">
        <h2 class="text-3xl font-extrabold text-white text-opacity-70 tracking-wide">Ioniq 5</h2>
        <p class="mt-2 text-white text-opacity-80 text-sm">Desde 34.000€</p>
      </div>
      <div class="mt-4 grid grid-cols-2 items-end gap-2">
        <a
          class="
            block
            text-center
            border border-white border-opacity-70
            bg-white bg-opacity-10
            text-white
            px-2
            py-1
            rounded-lg
            shadow
            hover:bg-opacity-40
          "
          href="#"
          >Descubre más</a
        >
        <button
          class="
            border border-white border-opacity-70
            bg-white bg-opacity-10
            text-white
            px-2
            py-1
            rounded-lg
            shadow
            hover:bg-opacity-40
            transition-colors
            duration-200
          "
          @click="toggleOpen()"
        >
          Avisame
        </button>
      </div>
    </div>
  </main>

  <div v-if="open" class="fixed inset-0 z-10 overflow-y-auto">
    <button class="fixed inset-0 bg-black opacity-75 w-full" @click="toggleOpen(false)"></button>
    <div class="fixed inset-0 grid place-content-center">
      <div class="bg-white max-w-sm px-4 py-3 rounded-lg bg-opacity-90 shadow-lg">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-blue-900">Prueba en carretera</h2>
          <button
            class="text-blue-900 rounded-full p-1 transition-all duration-200 ease-in-out hover:bg-blue-100 hover:rotate-90"
            @click="toggleOpen(false)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p class="mt-4 text-gray-700">Envianos tu email y te contactaremos para que puedas probar el nuevo Hyundai Ionic5 en carretera</p>
        <form class="mt-4 flex" @submit.prevent="handleSubmit" autocomplete="off">
          <label for="email" class="sr-only">email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            autocomplete="off"
            class="h-8 px-3 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-opacity-50"
          />
          <button type="submit" class="bg-blue-500 text-white px-2 rounded-lg h-8 w-16 text-center">
            <span class="flex items-center justify-center" v-if="submitting">
              <svg class="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            <span v-else> Enviar</span>
          </button>
        </form>
      </div>
    </div>
  </div>
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
