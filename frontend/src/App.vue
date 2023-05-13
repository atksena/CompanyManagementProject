<template>
  <v-app>
    <main>
      <v-container>
            <v-app-bar
      color="black"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-title>Company Management</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="openCompanyLogin">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
      </v-container>
    </main>


    <v-content>
      <router-view></router-view>
    </v-content>

    <v-dialog v-model="showCompanyLogin" max-width="600">
      <CompanyLogin />
    </v-dialog>
  </v-app>
</template>


<script>
import CompanyLogin from "@/components/CompanyLogin.vue";

export default {
  components: { CompanyLogin },
  name: "App",
  comments: {},
  methods: {
    openCompanyLogin() {
      this.showCompanyLogin = true;
    },
  },
  data: () => ({
    showCompanyLogin: false,
  }),
};
</script>