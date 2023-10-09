<script lang="ts" setup>
import { DeliveryInfo } from "~/widgets/_catalog/DeliveryInfo";
import { DownLoadPDF } from "~/widgets/_catalog/DownloadPDF";
</script>

<template>
  <section class="relative h-150 w-full overflow-hidden">
    <div class="container pt-10 md:w-1/2">
      <h1 class="text-4xl font-bold">
        Доставка авто из Японии, Кореи и Китая в любой город РФ
      </h1>
      <p class="mt-4">
        Вы можете забрать свой автомобиль с нашей стоянки во Владивостоке, или
        мы организуем доставку в ваш город: на автовозе или по железной дороге в
        вагонах закрытого типа, морем, на камчатку и сахалин
      </p>

      <div class="md:flex gap-2 py-10 px-4 md:px-0 text-nowrap xl:mt-70">
        <button class="btn-red-filled px-15 w-full my2 md:w-80">
          Рассчитать стоимость
        </button>
        <button class="btn-red-outline px-15 w-full my2 md:w-80">
          Написать в WhatsApp
        </button>
      </div>

      <NuxtPicture
        src="/images/frames/delivery.png"
        class="absolute right-0 bottom-0 -z-10"
        alt="Доставка авто"
      />
    </div>
  </section>

  <DownLoadPDF class="mt-50" />
</template>
