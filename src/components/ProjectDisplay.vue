<template>
  <div>
    <Table v-if="sizeLarge" border :row-class-name="rowClassName" :columns="lColumns" :data="data"></Table>
    <Table v-if="sizeSmall" border :row-class-name="rowClassName" :columns="sColumns" :data="data"></Table>
  </div>
</template>

<script>
  import expandRow from './project-expand'
  export default {
    data () {
      return {
        sizeLarge: false,
        sizeSmall: true,
        message: 'Jan.012014',
        lColumns: [
          {
            title: 'Project ID',
            key: 'id',
            width: '101px'
          },{
            title: 'Project Name',
            key: 'name',
            width: '130px'
          },{
            title: 'Description',
            key: 'description'
          },{
            title: 'Manager',
            key: 'manager',
            width: '120px'
          },{
            title: 'Launch Date',
            key: 'launchDate',
            width: '120px'
          },{
            title: 'Last Build',
            key: 'build',
            width: '110px',
          },{
            title: 'Code Coverage',
            key: 'coverage',
            width: '140px'
          },{
            title: 'Last Deployment',
            key: 'deployment',
            width: '150px'
          },{
            title: 'Link',
            width: '65px',
            render: (h, params) => {
              return h('span', {
                on: {
                  click: () => {
                    this.GoProject(params);
                  }}
              },'Go');
            }
          },
        ],
        sColumns: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row,
                }
              })
            }
          },{
            title: 'ID',
            key: 'id',
            width: '70px',
          },{
            title: 'Project Name',
            key: 'name',
          },
        ],
        data: [
          {
            id: '0001',
            name: 'Support Portal',
            description: 'aaaa',
            manager: 'Letilvy, Wei',
            launchDate: 'Jan.01 2014',
            build: 'Successful',
            coverage: '97%',
            deployment: 'March.07 2020',
          },{
            id: '0002',
            name: 'ONE Support Launchpad',
            description: 'This is a long long long long long long long long \n long long long long long long long long long long long long long long long long long long long long long long long description',
            manager: 'Jackson, Eve',
            launchDate: 'Nov.19 2017',
            build: 'Failed',
            coverage: '86%',
            deployment: 'March.01 2020',
          },{
            id: '0003',
            name: 'Deployment Monitor Platform',
            description: 'This is a medium medium medium medium medium medium \n description',
            manager: 'Julia, Zhu',
            launchDate: 'Aug.08 2018',
            build: 'Successful',
            coverage: '63%',
            deployment: 'March.03 2020',
          },
        ]
      }
    },
    methods: {
      rowClassName: function (row, index) {
        if(index%2 === 0){
          return 'row-even';
        }else{
          return 'row-odd';
        }
      },
      GetWidth: function() {
        if(document.body.clientWidth <= 1024){
          this.sizeSmall = true;
          this.sizeLarge = false;
        }else{
          this.sizeSmall = false;
          this.sizeLarge = true;
        }
      },
      GoProject: function (params) {
        this.$Message.success('Go '+params.row.name);
      }
    },
    mounted() {
      this.GetWidth();
      addEventListener('resize',this.GetWidth);

    },
    destroyed() {
      removeEventListener('resize',this.GetWidth);
    }
  }

</script>

<style>
  .ivu-table .row-even td{
    background-color: #fff;
  }
  .ivu-table .row-odd td{
    background-color: #eee;
  }
  .ivu-table th{
    background-color: #000;
    color: #fff;
  }



</style>
