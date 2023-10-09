<script lang="ts" setup>
const isDropdownOpened = ref(false);
</script>

<template>
  <section>
    <ul
      class="flex gap-5 justify-center items-center border-y b-dark p-4 font-bold"
    >
      <Dropdown
        :is-drop-opened="isDropdownOpened"
        @close="isDropdownOpened = false"
        @open="isDropdownOpened = true"
      >
        <template #wrap>
          <li>
            <div
              href="#"
              class="hover:text-red transition flex items-center gap-1 cursor-pointer"
            >
              Авто из Японии

              <NuxtIcon name="arrow-right-smooth" class="rotate-90" />
            </div>
          </li>
        </template>

        <template #drop>
          <NuxtLink
            class="p-1 cursor-pointer hover:text-red transition"
            :to="'/catalog/japan/full-duty'"
            >Под полную пошлину</NuxtLink
          >
          <NuxtLink
            class="p-1 cursor-pointer hover:text-red transition"
            :to="'/catalog/japan/constructor'"
            >Конструкторы</NuxtLink
          >
          <NuxtLink
            class="p-1 cursor-pointer hover:text-red transition"
            :to="'/catalog/japan/broken-auto'"
            >Битые авто</NuxtLink
          >
        </template>
      </Dropdown>
      <li>
        <NuxtLink to="/catalog/korea" class="hover:text-red transition"
          >Авто из Кореи</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/catalog/china" class="hover:text-red transition"
          >Авто из Китая</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/catalog/motorcycle" class="hover:text-red transition"
          >Мотоциклы</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/catalog/commercial" class="hover:text-red transition"
          >Коммерческие</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/catalog/aviable" class="hover:text-red transition"
          >Авто в наличии</NuxtLink
        >
      </li>
    </ul>
  </section>
</template>
