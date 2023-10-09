<template>
  <article class="md:flex w-full">
    <div class="b w-full p-7 relative">
      <p class="text-gray mb-5">18 июля</p>

      <h2 class="text-3xl font-bold">
        Эта новость состоит из определенных символов
      </h2>

      <p class="mt-4 text-gray">
        К слову, символы эти из русского алфавита. Красивые, не правда ли?
      </p>

      <div class="flex justify-center items-center mt-10 md:mt-70 w-full">
        <NuxtLink class="btn-red-filled w-[90%] gap-4" :to="`/news/1`">
          Читать полностью
          <NuxtIcon name="arrow-right" />
        </NuxtLink>
      </div>
    </div>

    <img src="/images/news.png" alt="" class="md:w-1/2 object-cover" />
  </article>
</template>
