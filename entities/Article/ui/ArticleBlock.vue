<template>
  <article class="flex w-full">
    <div class="b w-full p-7 relative">
      <p class="text-gray mb-5">18 июля</p>

      <h2 class="text-3xl font-bold">
        Эта новость состоит из определенных символов
      </h2>

      <p class="mt-4 text-gray">
        К слову, символы эти из русского алфавита. Красивые, не правда ли?
      </p>

      <div
        class="flex justify-center items-center absolute bottom-0 left-0 w-full p-5"
      >
        <button class="btn-red-filled w-[90%]">
          Читать полностью
          <NuxtIcon name="arrow-right" />
        </button>
      </div>
    </div>

    <img src="/images/news.png" alt="" class="h-120" />
  </article>
</template>
