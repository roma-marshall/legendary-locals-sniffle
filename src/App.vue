<script setup>
import Logo from './assets/img/logo.svg'

</script>

<template>
  <div class="flex justify-between min-h-screen font-sans">
    <div class="w-1/2 bg-cover">
      <div class="w-2/2">
        <div class="flex flex-col px-24 pt-10">
          <Logo />
          <div class="pt-20 pb-6">
            <h1 class="text-3xl font-bold tracking-wide leading-loose">
              hello @username
            </h1>
            <span>
              Login below via username & password
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
