<template>
  <div class="flex flex-wrap w-full">
      <div class="w-full text-center text-3xl my-4">
          <h1 class="w-full bg-gradient-to-r from-blue-700 to-pink-500 text-white px-4 py-2 rounded">Markdown</h1>
      </div>
      <section class="flex m-auto w-10/12 h-screen">
          <article class="w-1/2 border">
          <textarea class="w-full h-full" :value="text" @input="update"></textarea>
          </article>
          <article class="w-1/2 border bg-gradient-to-r bg-gray-300" v-html="markedText"></article>
      </section>
  </div>
</template>

<script>
import {marked} from "marked";
import debounce from "../utilities/mixins/debounce";
export default {
    // beforeCreate(){
    //     console.log("beforeCreate");
    // },
    // created(){
    //     console.log("Created");
    // },
    // beforeMount(){
    //     console.log("beforeMount");
    // },
    // mounted(){
    //     console.log("mounted");
    // },
    // beforeUnmount(){
    //     console.log("beforeUnmount");
    // },
    // unmounted(){
    //     console.log("unmounted");
    // },
    mixins: [debounce],
    data(){
        return{
            text: "",
        }
    },
    computed:{
        markedText(){
            return marked(this.text);
        }
    },
    methods:{
        update(e){
            clearTimeout(this.timeout);
            const debouncetime = () => (this.text = e.target.value);
            this.debounce(debouncetime, 500);
        },
    },
}
</script>

<style>

</style>