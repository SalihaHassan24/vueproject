<template>
<div class="m-auto">
    <div class="text-2xl my-2 text-center">
        <h1 class="w-full bg-gradient-to-r from-blue-700 to-pink-500 text-white px-4 py-2 rounded">Calendar</h1>
    </div>
    <section class="mx-2 flex justify-between">
        <h2 class="font-bold">{{currentMonthName}}</h2>
        <h2 class="font-bold">{{currentYear}}</h2>
    </section>
    <section class="flex my-2">
        <p class="text-center" style="width: 14.28%" v-for="day in days" :key="day">{{day}}</p>
    </section>
    <section class="flex flex-wrap">
        <p class="text-center" style="width: 14.28%" v-for="num in startDay()" :key="num"></p>
        <p class="text-center" 
        style="width: 14.28%" 
        v-for="num in daysInMonths()" 
        :key="num" 
        :class="currentDateClass(num)">
            {{num}}
        </p>
    </section>
    <section class="flex justify-between my-4">
        <button class="px-2 border rounded bg-gradient-to-r from-blue-700 to-pink-500" @click="prev()">Prev</button>
        <button class="px-2 border rounded bg-gradient-to-r from-blue-700 to-pink-500" @click="next()">Next</button>
    </section>
</div>
</template>

<script>
export default {
    data(){
        return{
            currentDate: new Date().getUTCDate(),
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        };
    },
    methods: {
        daysInMonths(){
            return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        },
        startDay(){
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        },
        next(){
            if(this.currentMonth == 11){
                this.currentMonth = 0;
                this.currentYear++;
            }
            else{
                this.currentMonth++;
            }
        },
        prev(){
            if(this.currentMonth == 0){
                this.currentMonth = 11;
                this.currentYear--;
            }
            else{
                this.currentMonth--;
            }
        },
        currentDateClass(num){
            console.log()
            const calendarFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
            const currentFullDate = new Date().toDateString();
            return calendarFullDate == currentFullDate ? "bg-gradient-to-r from-blue-700 to-pink-500 rounded" : "";
        }
    }, 
    computed: {
        currentMonthName(){
            return new Date(this.currentYear, this.currentMonth).toLocaleString("default", {month: "long"});
        }
    }
}
</script>

<style>

</style>