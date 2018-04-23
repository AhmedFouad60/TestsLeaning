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
       persons:[],
       // dis:true

   },computed:{
        dis:function () {
            if(this.name===''||this.age===''||this.job===''){
                return true;
            }else if ((this.name.length < 5|| this.age.length < 2||this.job.length <5)){
                return true;
            }else {
                return false;
            }
        }
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