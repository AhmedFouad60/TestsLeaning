var vue=require('vue');

new vue({
   el:"#test",
   data:{
       msg:"ADD YOUR TEXT",
       myname:'YOU NANE Displaying HERE',
       name:'',
       age:'',
       job:'',
       gender:'male',
       persons:[
           {name:"ahmed",age:"23",job:"web developer|androidDev"},
           {name:"sayed",age:"23",job:"web developer|androidDev"},
           {name:"zico",age:"23",job:"web developer|androidDev"},
           {name:"frank castle",age:"23",job:"web developer|androidDev"},
       ]
   },
    methods:{
       addUser:function () {
         var newPerson={
             name:this.name,
             age:this.age,
             job:this.job,
             gender:this.gender
         };
         this.persons.push(newPerson);
          this.name="";
          this.age="";
          this.job="";
       },
        removeUser:function (index) {
            this.persons.splice(index,1);
        }
       
    }
});