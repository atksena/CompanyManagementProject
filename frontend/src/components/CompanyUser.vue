<template>
  <v-card>
    <v-card-text class="mt-12">
      <h1 class="mx-2" color="dark" >
        Company User
      </h1>
      <v-form>
          <v-text-field
            label="User Name"
            name="companyUser"
            prepend-icon="mdi-account"
            type="text"
            color="teal accent-3"
            v-model="user.name"
          />
          <v-text-field
            label="Email"
            name="Email"
            prepend-icon="mdi-email-multiple"
            type="email"
            color="teal accent-3"
            v-model="user.email"
          />
          <v-text-field
            label="Phone"
            name="phone"
            prepend-icon="mdi-phone"
            color="teal accent-3"
            type="number"
            v-model="user.phone"
          />
          <v-text-field
            label="Password"
            name="pass"
            prepend-icon="mdi-lock"
            type="password"
            color="teal accent-3"
            v-model="user.pass"
          />
      </v-form>
            <div class="text-center mt-4">
        <v-btn class="mx-2" color="black" outlined @click="save()">
          Save
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>

export default {
  name: "CompanyUser",
    props: {
    companyIndex: Number,
    currentUser: Object,
    index: Number,
    source: String,
  },
  data: () => ({
    user: {
      name: null,
      email: null,
      phone: null,
      pass: null
    },
    users:[]
  }),
  methods: {
    resetUser() {
      this.user = {
        name: null,
        email: null,
        phone: null,
        pass: null,
      };
    },
    save() {
      let company_storage = JSON.parse(localStorage.getItem('companies'));
      if(this.index !== null){
        this.users[this.index] = this.user
      }else{
        this.users.push(this.user);
      }
      company_storage[this.companyIndex].users = this.users;
      localStorage.setItem("companies", JSON.stringify(company_storage));
      this.resetUser();
      this.close();
    },
    close() {
      this.$emit("close");
    },
  },
    created() {
    if (localStorage.getItem("users") !== null) {
      this.users = JSON.parse(localStorage.getItem("users"));
    }
    if (this.currentUser) {
      this.user = { ...this.currentUser };
    }
  },
};
</script>
