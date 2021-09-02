<template>
  <div class="content">
    {{data}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {
    
  },
  data() {
    return {
      data: {

      }
    };
  },
  mounted () {
      axios
        .get('http://localhost:8000/')
        .then(response => this.data = response)
  }
};
</script>
