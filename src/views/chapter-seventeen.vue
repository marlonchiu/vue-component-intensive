<template>
  <div class="chapter-seventeen">
    <h2 style="color: red;">17.拓展：Vue.js 面试、常见问题答疑</h2>
    <hr>
    <class-component />
    <classes-component />
    <event-modifier />
  </div>
</template>

<script>
  import ClassComponent from '../components/seventeen/class-component'
  import ClassesComponent from '../components/seventeen/classes-component'
  import EventModifier from '../components/seventeen/event-modifier'
  export default {
    name: 'chapterSeventeen',
    data() {
      return {

      }
    },
    mounted() {
    },
    methods: {

    },
    components: {
      ClassComponent,
      ClassesComponent,
      EventModifier
    }
  }
</script>
