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

<template></template>

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
