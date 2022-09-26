<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";

interface Props {
  heading: string;
  type: string;
  minLength?: number;
  maxLength?: number;
  isReverse?: boolean;
  rules: any;
}

const { heading, type, minLength, maxLength, isReverse, rules } = withDefaults(
  defineProps<Props>(),
  {
    minLength: 3,
    maxLength: 64,
    isReverse: false,
  }
);
const input = ref<string>("hgfd");

const v$ = useVuelidate(rules, { input });
</script>

<template>
  <div>
    <label v-if="!isReverse" class="right-52" for="input">{{ heading }}</label>
    <input
      :class="v$.$invalid && input.length > 0 && 'error'"
      :type="type"
      :name="heading"
      :min="minLength"
      :max="maxLength"
      required
      v-model="input"
    />
    <label v-if="isReverse" class="right-52" for="input">{{ heading }}</label>
    <span v-if="v$.$error">
      <li v-for="error in v$.$errors">{{ error }}</li>
    </span>
  </div>
</template>

<style scoped>
input {
  @apply border-b-neutral-500 caret-myTeal-100 border-b-2 bg-transparent hover:bg-transparent  hover:border-b-myTeal-300  active:border-b-myTeal-200  focus:border-b-myTeal-200 w-52 transition-colors duration-500;
  outline: none;
}

label {
  @apply relative text-neutral-500 bottom-6 text-xs hover:text-myTeal-300  active:border-b-myTeal-200  focus:border-b-myTeal-200;
}

.error {
  @apply border-b-red-600 text-red-600 hover:border-b-red-600 active:border-b-red-600 focus:border-b-red-600 caret-red-600;
}
</style>
