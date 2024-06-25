<script>
import axios from "axios";

export default {
  data(){
    return {
      ttv: {
        nama: "",
        tekanan_darah: "",
        denyut_nadi: "",
        laju_nafas: "",
        suhu_tubuh: "",
        berat_badan: "",
        tinggi_badan: ""
      },
      url: `http://localhost:8080/ttv`
    }
  },
  mounted() {
    axios.get(`${this.url}?find_by=id&value=${this.$route.params.id}`)
        .then((res) => {
          const data = res.data.data[0]
          this.ttv.nama = data.nama
          this.ttv.tekanan_darah = data.tekanan_darah.split(" ")[0]
          this.ttv.denyut_nadi = data.denyut_nadi.split(" ")[0]
          this.ttv.laju_nafas = data.laju_nafas.split(" ")[0]
          this.ttv.suhu_tubuh = data.suhu_tubuh.split(" ")[0]
          this.ttv.berat_badan = data.berat_badan.split(" ")[0]
          this.ttv.tinggi_badan = data.tinggi_badan.split(" ")[0]
        })
        .catch((err) => {
          console.log(err)
        })
  },
  methods:{
    handleUpdate(){
      if (this.ttv.nama === "" || this.ttv.tekanan_darah === "" || this.ttv.denyut_nadi === "" || this.ttv.laju_nafas === "" || this.ttv.suhu_tubuh === "" || this.ttv.berat_badan === "" || this.ttv.tinggi_badan === "") {
        alert("Please fill all the fields")
        return
      }
      if (this.ttv.tekanan_darah < 0 || this.ttv.denyut_nadi < 0 || this.ttv.laju_nafas < 0 || this.ttv.suhu_tubuh < 0 || this.ttv.berat_badan < 0 || this.ttv.tinggi_badan < 0) {
        alert("Please fill all the fields with positive number")
        return
      }

      axios.put(`${this.url}/${this.$route.params.id}`,{
        nama: this.ttv.nama,
        tekanan_darah: `${this.ttv.tekanan_darah} mm/hg`,
        denyut_nadi: `${this.ttv.denyut_nadi} kali/menit`,
        laju_nafas: `${this.ttv.laju_nafas} kali/menit`,
        suhu_tubuh: `${this.ttv.suhu_tubuh} °C`,
        berat_badan: `${this.ttv.berat_badan} kg`,
        tinggi_badan: `${this.ttv.tinggi_badan} cm`
      })
          .then((res) => {
            console.log(res)
            this.$router.replace('/')
          })
          .catch((err) => {
            console.log(err)
            alert("Failed to update TTV")
          })
    }
  }
}

</script>

<template>
  <div class="w-screen h-screen bg-primary400 flex justify-start items-center pb-24 pt-10">
    <div class="w-[50rem] h-full bg-primary500 rounded-3xl ms-5 mt-5">
      <p class="text-4xl font-bold text-secondary400 select-none ps-10 pt-8">EDIT TTV</p>
      <div class="w-full h-auto flex ps-10 pe-10  pt-8 justify-start">
        <div class="w-1/2 h-auto">
          <div class="w-full h-auto mt-5">
            <div class="w-full h-auto col">
              <p class="text-xl font-medium text-secondary400 select-none">Nama</p>
              <input type="text" placeholder="Nama" class="w-full h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl" v-model="ttv.nama">
            </div>
            <div class="w-full h-auto col mt-5">
              <p class="text-xl font-medium text-secondary400 select-none">Tekanan Darah</p>
              <div class="w-full h-auto flex justify-between items-center">
                <input type="number" placeholder="Tekanan Darah" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl" v-model="ttv.tekanan_darah">
                <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12 ">mm/hg</p>
              </div>
            </div>
            <div class="w-full h-auto col mt-5">
              <p class="text-xl font-medium text-secondary400 select-none">Denyut Nadi</p>
              <div class="w-full h-auto flex justify-between items-center">
                <input type="number" placeholder="Denyut Nadi" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl" v-model="ttv.denyut_nadi">
                <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12">kali/menit</p>
              </div>
            </div>
            <div class="w-full h-auto col mt-5">
              <p class="text-xl font-medium text-secondary400 select-none">Laju Nafas</p>
              <div class="w-full h-auto flex justify-between items-center">
                <input type="number" placeholder="Laju Nafas" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl" v-model="ttv.laju_nafas">
                <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12">kali/menit</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/2 h-auto ms-20">
          <div class="w-full h-auto col mt-5">
            <p class="text-xl font-medium text-secondary400 select-none">Suhu Tubuh</p>
            <div class="w-full h-auto flex justify-between items-center">
              <input type="number" placeholder="Suhu Tubuh" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl" v-model="ttv.suhu_tubuh">
              <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12">°C</p>
            </div>
          </div>
          <div class="w-full h-auto col mt-5">
            <p class="text-xl font-medium text-secondary400 select-none">Berat Badan</p>
            <div class="w-full h-auto flex justify-between items-center">
              <input type="number" placeholder="Berat Badan" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl" v-model="ttv.berat_badan">
              <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12">kg</p>
            </div>
          </div>
          <div class="w-full h-auto col mt-5">
            <p class="text-xl font-medium text-secondary400 select-none">Tinggi Badan</p>
            <div class="w-full h-auto flex justify-between items-center">
              <input type="number" placeholder="Tinggi Badan" class="w-10/12 h-12 ps-3 pe-3 border-2 border-gray-400 rounded-xl" v-model="ttv.tinggi_badan">
              <p class="text-xl font-medium text-secondary400 select-none ms-2 w-2/12">cm</p>
            </div>
          </div>
          <div class="w-full justify-end items-end mt-10 ms-5">
            <button class="bg-secondary400 hover:bg-secondary500 ps-32 pe-32 p-2 rounded-xl font-bold text-default select-none mt-5" @click="handleUpdate">SAVE</button>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>