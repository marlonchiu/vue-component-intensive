const code =
  `<template>
    <div>
      <input v-model="message">
      {{ message }}
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          message: ''
        }
      }
    }
  </script>
  <style>
   input {
     font-size: 28px;
     border: 1px solid red;
   }
  </style>

  `

export default code
