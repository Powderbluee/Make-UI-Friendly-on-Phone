<template>
  <div class="expand">
    <p><strong>Description: </strong>{{row.description}}</p>
    <p><strong>Manager: </strong>{{row.manager}}</p>
    <p><strong>Launch Date: </strong>{{row.launchDate}}</p>
    <p><strong>Last Build: </strong>{{row.build}}</p>
    <p><strong>Last Deployment: </strong>{{row.deployment}}</p>
    <p><strong>Link: </strong><span class="link" @click="GoProject(row)">Go</span></p>
  </div>
</template>

<script>
  export default {
    name: "project-expand",
    props: {
      row: '',
    },
    data(){
      return{

      }
    },
    methods:{
      GoProject: function (params) {
        this.$Message.success('Go '+params.name);
      }
    }
  }
</script>

<style scoped>
  .expand{
    margin: 0;
  }

</style>
