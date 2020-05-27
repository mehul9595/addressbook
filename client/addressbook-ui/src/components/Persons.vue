<template>
  <div class="persons-list">
    <div>{{todoName}}</div>
    <ul>
      <li v-for="person of personsList" :key="person.id">
        <div>
          {{firstName}} 
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"

const baseApiURL = "http://localhost:4000/api"

export default {
  name: "Persons",
  props: {
    // todoName: String
  },
  data() {
    return {
      personsList: [],
      todoName:''
    };
  }, 
  async created (){
    // this.todoName ="this is loaded on startup";
    const response = await axios.get(baseApiURL+ '/persons', { headers: {"Access-Control-Allow-Origin": "*" }});

    this.personsList = response;
  }
};
</script>