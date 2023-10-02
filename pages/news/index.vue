<script lang="ts" setup>
import { ArticleBlock } from "~/entities/Article";
</script>

<template>
  <section class="container">
    <h1 class="text-center text-4xl font-bold my-15">Новости и статьи</h1>

    <ArticleBlock v-for="article in 5" :key="article" class="my-4" />
  </section>
</template>
