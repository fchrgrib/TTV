<script>
import TTVCard from "@/components/TTVCard.vue";
import {router} from "@/routes/index.js";
import axios from "axios";

export default {
  components: {
    TTVCard
  },
  data(){
    return {
      ttvs:[],
      url: "http://localhost:8080/ttv",
      search: ""
    }
  },
  methods:{
    handleSearch() {
      if (this.search === "") {
        return
      }
      axios.get(`${this.url}?find_by=name&value=${this.search}`)
          .then((res) => {
            this.ttvs = res.data.data
          })
          .catch((err) => {
            console.log(err)
          })
    }
  },
  mounted() {
    axios.get(this.url)
        .then((res)=>{
          this.ttvs = res.data.data
        })
        .catch((err)=>{
          console.log(err)
        })
  }
}

</script>

<template>
  <div class="w-screen min-h-screen bg-primary400 col">
    <div class = "w-full h-full col ps-20 pe-20 pt-20">
      <p class="text-4xl font-bold text-secondary400 select-none">TTV Recapitulation</p>
      <div class="w-full h-auto mt-10 flex justify-between">
        <div class="flex w-96 h-50">
          <input type="text" placeholder="Search" class="rounded-xl w-96 h-12 ps-3 pe-3 border-2 border-gray-400" v-model="search">
          <button class="ml-3 bg-primary500 hover:bg-secondary400 p-2 rounded-xl font-bold text-default select-none" @click="handleSearch">
            Search
          </button>
        </div>
        <button class="bg-primary500 hover:bg-secondary400 p-2 ps-10 pe-10 rounded-xl font-bold text-default select-none" @click="$router.push('/ttv')">ADD TTV +</button>
      </div>
      <div class="w-full h-auto mt-10" v-for="ttv in ttvs">
        <div key="ttv.id">
        <TTVCard :nama="ttv.nama" :tekanan_darah="ttv.tekanan_darah" :denyut_nadi="ttv.denyut_nadi" :laju_nafas="ttv.laju_nafas" :suhu_tubuh="ttv.suhu_tubuh" :berat_badan="ttv.berat_badan" :tinggi_badan="ttv.tinggi_badan"/>
        </div>
      </div>
    </div>
  </div>
</template>
