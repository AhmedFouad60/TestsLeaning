<template>
    <div class="row">
        <div class="col-lg-12">
            <h1>{{msg}}</h1>
            <h2 class="text-uppercase">users .</h2>

            <!--table to show users-->
            <table class="table table-hover ">
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Job</td>
                    <td>Gender</td>
                    <td>Remove</td>

                </tr>

                <tr v-for="(person,index) in persons">
                    <td>
                        {{ index+1}}
                    </td>
                    <td>{{person.name}}</td>
                    <td>{{person.age}}</td>
                    <td>{{person.job}}</td>
                    <td>
                      <span  v-if="person.gender=='male'">
                          <span class="badge badge-primary">{{person.gender}}</span>
                      </span>
                        <span  v-else>
                          <span class="badge badge-danger">{{person.gender}}</span>
                      </span>

                    </td>
                    <td>
                        <button @click="removeUser(index)" class="btn-danger">X</button>

                    </td>

                </tr>



            </table>

        </div>
    </div>

</template>

<script>
    export default {
        props:['persons','name','age'],                     //data that will be sent from the parent to this child
        data(){
            return{

            }
        }
,
        name: "show_users"
    }
</script>
