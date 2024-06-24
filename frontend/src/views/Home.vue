<script setup>

import TTVCard from "@/components/TTVCard.vue";
</script>

<template>
  <div class="w-screen h-screen bg-primary400 col">
    <div class = "w-full h-full col ps-20 pe-20 pt-20">
      <p class="text-4xl font-bold text-secondary400 select-none">TTV Recapitulation</p>
      <div class="w-full h-auto mt-10 flex justify-between">
        <div class="flex w-96 h-50">
          <input type="text" placeholder="Search" class="rounded-xl w-96 h-12 ps-3 pe-3 border-2 border-gray-400">
          <button class="ml-3 bg-primary500 hover:bg-secondary400 p-2 rounded-xl font-bold text-default select-none">
            Search
          </button>
        </div>
        <button class="bg-primary500 hover:bg-secondary400 p-2 ps-10 pe-10 rounded-xl font-bold text-default select-none">ADD TTV +</button>
      </div>
      <div class="w-full h-auto mt-10" >
        <TTVCard nama="Fahrian Afdholi" tekanan_darah="100mm/hg" denyut_nadi="1000m/s" laju_nafas="200m/s" suhu_tubuh="30C" berat_badan="500kg" tinggi_badan="200cm" />
      </div>
    </div>
  </div>
</template>
