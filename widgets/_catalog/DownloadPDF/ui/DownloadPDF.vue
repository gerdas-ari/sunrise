<template>
  <section class="container">
    <div class="text-center">
      <h2 class="text-4xl font-bold">Доставим авто в ваш город</h2>

      <p class="text-gray mt-4">
        Стоимость доставки зависит от типа транспортного средства и города
        доставки
      </p>
    </div>

    <div class="b flex justify-between p-10 mt-15">
      <div class="relative">
        <p class="text-3xl font-bold">
          Скачайте PDF-файл чтобы ознакомиться с тарифами и сроками доставки в
          ваш город
        </p>

        <button
          class="btn-red-filled gap-4 text-xl items-center absolute bottom-0 left-0"
        >
          <NuxtIcon name="download" class="text-2xl" />
          <span>Ознакомиться с тарифами</span>
        </button>
      </div>

      <div class="basis-1/2 flex justify-center">
        <NuxtImg src="/images/pdf.png" />
      </div>
    </div>
  </section>
</template>
