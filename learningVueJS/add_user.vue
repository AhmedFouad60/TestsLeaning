<template>
    <div>
    <div class="row">
        <div class="col-lg-3">
            <input class="form-control" type="text" placeholder="name" v-model="name">
        </div>

        <div class="col-lg-3">
            <input class="form-control" type="text" placeholder="age" v-model="age">
        </div>
        <div class="col-lg-3">
            <input class="form-control" type="text" placeholder="job" v-model="job">
        </div>
        <div class="col-lg-3">
            <select id="" name="" class="form-control">
                <option value="male"  v-model="gender" selected="selected">male</option>
                <option value="female"  v-model="gender" >female</option>
            </select>
        </div>
    </div>

    <div class="row" style="padding-top: 20px;">
        <div class="col-lg-4">
            <button class="btn btn-success" v-bind:disabled="dis" @click="addUser()">Add user</button>
        </div>


    </div>
    </div>
</template>

<script>
    export default {

        name: "add_user"

    }
</script>
