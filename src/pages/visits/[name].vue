<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import {
  email as emailValidator,
  required,
  alpha,
  numeric,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";
import VisitCalendar from "~/components/VisitCalendar/VisitCalendar.vue";
import { IServiceType } from "../../enums.d.ts";
import { useServiceForm } from "../../stores/serviceForm";
import { getVisits, putVisit } from "../../utils/requests";

const { visit } = defineProps<{ visit: IServiceType }>();
const { withMessage } = helpers;

let firstName = ref<string>("testF");
let lastName = ref<string>("testL");
let email = ref<string>("test@test.com");
let phoneNumber = ref<string>("123123123");
let errorMessage = ref<string>("");
let isError = ref<boolean>(false);
let isSent = ref<boolean>(false);

const alphaMessage = withMessage(
  "This field should contain only letters",
  alpha
);
const requiredMessage = withMessage("This field is required", required);
const minLengthMessage = (minNumber: number) =>
  withMessage("This field should be at least 3 long", minLength(minNumber));
const maxLengthMessage = (maxNumber: number) =>
  withMessage("The maximum length allowed is 15", maxLength(maxNumber));
const numericMessage = withMessage(
  "This field can contain only numbers",
  numeric
);

const rules = {
  firstName: {
    required: requiredMessage,
    alpha: alphaMessage,
    minLength: minLength(3),
  },
  lastName: {
    required: requiredMessage,
    alpha: alphaMessage,
    minLength: minLengthMessage(3),
  },
  email: { required: requiredMessage, emailValidator },
  phoneNumber: {
    required: requiredMessage,
    numeric: numericMessage,
    minLength: minLengthMessage(9),
    maxLength: maxLengthMessage(13),
  },
};

const v$ = useVuelidate(
  rules,
  { firstName, lastName, email, phoneNumber },
  { $autoDirty: true }
);

const handleSubmit = async (): Promise<void> => {
  const store = useServiceForm();
  const result = await v$.value.$validate();

  if (!result) {
    isError.value = true;
    errorMessage.value = "Invalid form submission. Correct Errors";
    setTimeout(() => (isError.value = false), 5000);
    return;
  }

  const request = await putVisit(
    store.serviceId.toString(),
    visit,
    firstName.value,
    lastName.value,
    email.value,
    phoneNumber.value
  );

  if (request.isSuccessful) {
    isSent.value = true;
    setTimeout(() => (isError.value = false), 5000);
  } else {
    isError.value = true;
    errorMessage.value = request.message;
  }
};

const getVisitType = (value: string) =>
  Object.entries(IServiceType).find(
    ([key]) => key.toLowerCase() === value.toLowerCase()
  )?.[1];
</script>

<template>
  <div class="h-screen bg-myNeutral-100">
    <div class="rounded-3xl flex flex-col justify-center items-center">
      <h1 class="text-center text-3xl py-10">
        {{ getVisitType($route.params.name.toString()) }}
      </h1>

      <h1 class="border-b-2 border-neutral-400">Calendar here</h1>
      <visit-calendar />

      <div class="flex flex-col">
        <h3 class="ml-20 text-2xl my-20">Contact info</h3>
        <h3
          v-if="isError"
          class="bg-red-100 text-red-700 px-3 py-1 rounded-full mx-20 mb-20"
        >{{errorMessage}}</h3>
        <form class="ml-20 grid gap-14 grid-rows-2 grid-cols-2">
          <div class="div-input">
            <input
              :class="v$.firstName.$invalid && firstName.length > 0 && 'error'"
              type="text"
              name="firstName"
              min="2"
              v-model="firstName"
              required
            />
            <label class="right-52" for="firstName">first name</label>
            <error-list
              :is-invalid="v$.firstName.$invalid"
              :errors="v$.firstName.$errors"
            />
          </div>
          <div>
            <input
              :class="v$.lastName.$invalid && lastName.length > 0 && 'error'"
              type="text"
              name="lastName"
              min="2"
              v-model="lastName"
              required
            />
            <label class="right-52" for="lastName">last name</label>
            <error-list
              :is-invalid="v$.lastName.$invalid"
              :errors="v$.lastName.$errors"
            />
          </div>

          <div class="div-input">
            <input
              :class="v$.email.$invalid && email.length > 0 && 'error'"
              type="text"
              name="email"
              min="2"
              v-model="email"
              required
            />
            <label class="right-52" for="email">email</label>
            <error-list
              :is-invalid="v$.email.$invalid"
              :errors="v$.email.$errors"
            />
          </div>

          <div>
            <input
              :class="
                v$.phoneNumber.$invalid && phoneNumber.length > 0 && 'error'
              "
              type="tel"
              name="phone number"
              min="9"
              max="15"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              v-model="phoneNumber"
              required
            />
            <label class="right-52" for="phone number">phone number</label>
            <error-list
              :is-invalid="v$.phoneNumber.$invalid"
              :errors="v$.phoneNumber.$errors"
            />
          </div>
        </form>
        <div class="flex justify-center my-20">
          <button
            class="shadow-sm hover:shadow-none duration-200 shadow-myTeal-200 bg-myTeal-200 text-white px-10 py-1 mt-10 font-bold rounded-full"
            type="submit"
            @click="handleSubmit()"
          >
            Schedule a visit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  @apply bg-myNeutral-100;
}

.div-input {
  @apply hover:first-letter:text-myTeal-300 active:text-myTeal-200 focus:text-myTeal-200;
}

input {
  @apply border-b-neutral-500 caret-myTeal-100 border-b-2 bg-transparent hover:bg-transparent hover:border-b-myTeal-300 active:border-b-myTeal-200 focus:border-b-myTeal-200 w-52 transition-colors duration-500;
  outline: none;
}

label {
  @apply relative text-neutral-500 bottom-6 text-xs hover:text-myTeal-300 active:border-b-myTeal-200 focus:border-b-myTeal-200;
}

.error {
  @apply border-b-red-600 text-red-600 hover:border-b-red-600 active:border-b-red-600 focus:border-b-red-600 caret-red-600;
}
</style>
