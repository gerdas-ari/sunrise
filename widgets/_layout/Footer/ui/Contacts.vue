<script lang="ts" setup>
import aviableLinks from "../config/aviableLinks";
</script>

<template>
  <section class="lg:flex container border-b b-dark">
    <section
      class="lg:border-r b-b lg:b-b-none pb-5 lg:pb-0 b-dark pt-10 basis-3/4"
    >
      <p class="text-xl font-bold">Связаться с нами</p>
      <p class="text-3xl font-bold mt-4">8 (800) 234-23-50</p>
      <p class="mt-3 text-gray">Владивосток, Пушкинская, 109, оф. 209</p>
      <p class="mt-3 text-gray">sunrise@mail.ru</p>
    </section>

    <section
      class="md:grid grid-cols-3 lg:flex gap-20 px-4 lg:px-10 lg:basis-3/4 py-10"
    >
      <template v-for="link in aviableLinks">
        <div>
          <p class="font-bold text-xl my-10 md:my-0 text-nowrap">
            {{ link.title }}
          </p>

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
