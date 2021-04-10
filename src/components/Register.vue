
<template>
  <div>
    <h1>Register</h1>

    <p>Email</p>
    <input
    type="email"
    name= "email"
    v-model="email"
    placeholder="Email">
    <br style="margin:10px;">
    <p>Password</p>
    <input
    type="password"
    name="password"
    v-model="password"
    placeholder="Password">
    <br>
    <br>
    <button @click="register">Sign Up</button>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
      email: 'abc1234',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
