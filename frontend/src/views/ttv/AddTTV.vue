<script setup>

</script>

<template>
  <div class="w-screen h-screen bg-primary400 flex justify-start items-center pb-24 pt-10">
   <div class="w-[50rem] h-full bg-primary500 rounded-3xl ms-5 mt-5">
     <p class="text-4xl font-bold text-secondary400 select-none ps-10 pt-8">ADD TTV</p>
     <div class="w-full h-auto flex ps-10 pe-10  pt-8 justify-start">
         <div class="w-1/2 h-auto">
           <div class="w-full h-auto mt-5">
             <div class="w-full h-auto col">
               <p class="text-xl font-medium text-secondary400 select-none">Nama</p>
               <input type="text" placeholder="Nama" class="w-full h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl">
             </div>
             <div class="w-full h-auto col mt-5">
               <p class="text-xl font-medium text-secondary400 select-none">Tekanan Darah</p>
               <div class="w-full h-auto flex justify-between items-center">
                 <input type="number" placeholder="Tekanan Darah" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl">
                 <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12 ">mm/hg</p>
              </div>
             </div>
             <div class="w-full h-auto col mt-5">
               <p class="text-xl font-medium text-secondary400 select-none">Denyut Nadi</p>
               <div class="w-full h-auto flex justify-between items-center">
                 <input type="number" placeholder="Denyut Nadi" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl">
                 <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12">kali/menit</p>
              </div>
               </div>
             <div class="w-full h-auto col mt-5">
               <p class="text-xl font-medium text-secondary400 select-none">Laju Nafas</p>
               <div class="w-full h-auto flex justify-between items-center">
                  <input type="number" placeholder="Laju Nafas" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl">
                  <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12">kali/menit</p>
               </div>
             </div>
           </div>
         </div>

         <div class="w-1/2 h-auto ms-20">
          <div class="w-full h-auto col mt-5">
           <p class="text-xl font-medium text-secondary400 select-none">Suhu Tubuh</p>
            <div class="w-full h-auto flex justify-between items-center">
              <input type="number" placeholder="Suhu Tubuh" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl">
              <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12">°C</p>
            </div>
           </div>
          <div class="w-full h-auto col mt-5">
           <p class="text-xl font-medium text-secondary400 select-none">Berat Badan</p>
            <div class="w-full h-auto flex justify-between items-center">
              <input type="number" placeholder="Berat Badan" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl">
              <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12">kg</p>
            </div>
           </div>
          <div class="w-full h-auto col mt-5">
           <p class="text-xl font-medium text-secondary400 select-none">Tinggi Badan</p>
            <div class="w-full h-auto flex justify-between items-center">
              <input type="number" placeholder="Tinggi Badan" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl">
              <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12">cm</p>
            </div>
           </div>
           <div class="w-full justify-end items-end mt-10 ms-5">
             <button class="bg-secondary400 hover:bg-secondary500 ps-32 pe-32 p-2 rounded-xl font-bold text-default select-none mt-5">ADD</button>
           </div>
         </div>
     </div>


   </div>
  </div>
</template>