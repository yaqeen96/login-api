<template>
  <div class="login">
    <div class="container">
      <div class="login-wrapper border border-light">
        <form class="form-signin" @submit.prevent="login">
          <h2 class="form-signin-heading">Login :)</h2>

          <label for="inputEmail" class="sr-only">Email address</label>

          <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        
          <label for="inputPassword" class="sr-only">Password</label>

          <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
          <div class="alert alert-danger" v-if="error">{{ error }}</div>
        </form>
      </div>
    </div> 
  
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    login () {
      // console.log(this.email)
      // console.log(this.password)
      this.$https.post('https://reqres.in/api/login', { email: this.email, password: this.password })
      .then(request => this.loginSuccessful(request))
      .catch(() => this.loginFailed())
    },
    loginSuccessful (req) {
      if (!req.data.token) {
        this.loginFailed()
        return
      }
      localStorage.token = req.data.token
      this.error = false
      // this.$router.replace(this.$route.query.redirect || 'https://reqres.in/api/login')
      console.log("Finally done ");
    },
    loginFailed () {
    this.error = 'Login failed!'
    delete localStorage.token
    }
  }
 }
</script>
<style lang="css">

.login-wrapper {
  background: #ddd;
  width: 70%;
  margin: 5% auto;
  box-shadow: 2px 2px 2px #cac6c6
}
.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin-heading{
  margin-bottom: 20px;
  text-align: center
}
.form-control{
  margin-bottom: 10px
}
.btn{
   background-image: linear-gradient(to right, rgba(176,0,0,0), rgb(0, 255, 255));
   border: none;
   cursor: pointer;
}
</style>