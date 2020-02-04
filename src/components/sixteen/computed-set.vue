<template>
  <div>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <input type="text" v-model="fullName">
    <p>firstName: {{firstName}}</p>
    <p>lastName: {{lastName}}</p>
    <p>fullName: {{fullName}}</p>
    <button @click="setFullName">设置 FullName</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
    }
  },
  methods: {
    setFullName () {
      this.fullName = 'Aresn Liang'
    }
  },
  computed: {
    fullName: {
      get () {
        return `${this.firstName} ${this.lastName}`;
      },
      set (val) {
        console.log(val);
        const names = val.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
}
</script>
