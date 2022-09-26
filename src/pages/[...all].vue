<script setup lang="ts">
const { t } = useI18n()

</script>

<template>
  <div class="bg-red-600 flex justify-center mx-5 text-neutral-400">
    404
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
