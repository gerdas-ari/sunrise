<script lang="ts" setup>
import aviableLinks from "../config/aviableLinks";
</script>

<template>
  <section class="flex container border-b">
    <section class="border-r pt-10 basis-1/4">
      <p class="text-xl font-bold">Связаться с нами</p>
      <p class="text-3xl font-bold mt-4">8 (800) 234-23-50</p>
      <p class="mt-3 text-gray">Владивосток, Пушкинская, 109, оф. 209</p>
      <p class="mt-3 text-gray">sunrise@mail.ru</p>
    </section>

    <section class="flex justify-around basis-3/4 py-10">
      <template v-for="link in aviableLinks">
        <div>
          <p class="font-bold text-xl">{{ link.title }}</p>

          <ul class="mt-4">
            <li v-for="sublink in link.sublinks" class="text-gray mt-2">
              <a href="#">{{ sublink.title }}</a>
            </li>
          </ul>
        </div>
      </template>
    </section>
  </section>
</template>
