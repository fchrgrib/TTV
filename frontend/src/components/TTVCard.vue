<script>
export default {
  props: ['nama','tekanan_darah', 'denyut_nadi', 'laju_nafas', 'suhu_tubuh', 'berat_badan', 'tinggi_badan']
}
</script>

<template>
  <div class="w-full h-40 bg-card rounded-xl col border-gray-400 border-2">
    <div class="w-full h-full p-3 ps-8 flex items-center">
      <div class="w-2/12 h-full border-gray-400 pe-10 border-e-2 flex items-center">

        <p class="text-5xl font-bold text-secondary400 select-none">{{nama}}</p>
      </div>
      <div class="w-2/12 h-full col ps-10 p-2">
        <ul class="text-xl font-medium text-secondary400 select-none">
          <li>tekanan darah</li>
          <li>denyut nadi</li>
          <li>laju nafas</li>
          <li>suhu tubuh</li>
        </ul>
      </div>
      <div class="w-2/12 h-full col ps-16 p-2">
        <ul class="text-xl font-medium text-secondary400 select-none">
          <li> : {{tekanan_darah}}</li>
          <li> : {{denyut_nadi}}</li>
          <li> : {{laju_nafas}}</li>
          <li> : {{suhu_tubuh}}</li>
        </ul>
      </div>
      <div class="w-2/12 h-full col ps-12 p-2">
        <ul class="text-xl font-medium text-secondary400 select-none">
          <li>tinggi badan</li>
          <li>berat badan</li>
        </ul>
      </div>
      <div class="w-2/12 h-full col ps-16 p-2 pe-10 border-e-2 border-gray-400">
        <ul class="text-xl font-medium text-secondary400 select-none">
          <li> : {{tinggi_badan}}</li>
          <li> : {{berat_badan}}</li>
        </ul>
      </div>
      <div class="w-2/12 h-full col p-5 flex flex-col justify-between items-center">
        <button class="bg-orange-300 hover:bg-orange-600 p-2 rounded-xl font-bold text-xl text-default select-none w-full">EDIT</button>
        <button class="bg-red-300 hover:bg-red-600 p-2 rounded-xl font-bold text-xl text-default select-none w-full">DELETE</button>
      </div>
    </div>
  </div>
</template>