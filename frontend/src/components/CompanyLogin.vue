<template>
  <v-card>
    <v-card-text class="mt-12"  style="display: flex; flex-direction: column;">
      <v-spacer></v-spacer>
      <h1 class="mx-2" color="dark">
        Login
      </h1>
      <v-form>
        <v-text-field
            name="username"
            prepend-icon="mdi-domain"
            type="text"
            color="teal accent-3"
            v-model="username"
        />
        <v-text-field
            name="Password"
            prepend-icon="mdi-lock"
            type="password"
            color="teal accent-3"
            v-model="password" required
        />
        <v-card-actions
        >
          <v-spacer></v-spacer>
          <v-btn class="mx-2" color="black" outlined @click="loginAndClose"
          >Login
          </v-btn
          >
        </v-card-actions
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: "CompanyLogin",
  data() {
    return {
      username: '',
        password: '',
        error: null,
      }
  },
  methods: {
async login() {
  fetch('api/auth/login/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: this.username,
      password: this.password,
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      this.$router.push('/CompanyList');
    } else {
      this.error = data.message;
    }
  })
  .catch(error => {
    console.log(error);
  })
},
    loginAndClose() {
      this.login();
      this.$emit('close');
    },
  }
}
</script>
