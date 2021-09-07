<template>

  <div class="app">
  <b-container>
  <b-row class="justify-content-md-center" cols="10">
  <b-col style="margin-top:25vh:" cols="6">
  <h1>User Login</h1>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
    >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="password" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="secondary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>

    </b-form>
    </b-col>
    </b-row>
    </b-container>
    <!-- <addblog> -->
    
   
  </div>
 
</template>

<script>


import details from './details.json'


  export default {
      name:'Login',
components:{
},
     
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
      show:true,
      con:false
     
      }
    },
     
    methods: {
      onSubmit(event) {    


      this.$router.push({path: '/addBlog'});
      
          console.log("details")
        event.preventDefault()

          console.log("details",details,this.form)
          let flag=false;
        details.forEach((detail)=>{
          if(this.form.email==detail.username&& this.form.password==detail.password)
          flag=true    
              
       
        });
        if(flag){alert(" login successful")
        }
        else { alert("please login again")  
      
       } },
             
       



      
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
