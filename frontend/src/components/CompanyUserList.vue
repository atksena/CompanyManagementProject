<template>
  <div>
     <v-main>
        <v-container>
          <v-card-title>Users</v-card-title>

        </v-container>
     </v-main><v-spacer></v-spacer>
          <v-row class="mb-4" v-for="(user, index) in users">
              <v-card>
                <v-card-text class="text--primary">
                  <div>
                    <b>User Name :</b> {{ user.name }}&nbsp;&nbsp;<b>User Email : </b> {{ user.email }}&nbsp;&nbsp; <b>User Phone :</b>  {{ user.phone }}
                    <v-btn
                        @click="deleteUser(index)"
                        class="mx-2" color="black" outlined
                    ><v-icon>mdi-delete-empty</v-icon></v-btn>
                    <v-btn @click="editUser(index)"
                            class="mx-2" color="black" outlined>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
          </v-row>
    <v-card>
      <v-dialog
      v-model="showCompanyUser"
      width="1000"
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <CompanyUser v-if="showCompanyUser"
                   :currentUser="currentUser" :index="editedIndex" :company-index="companyIndex"
                   @close="closeCompanyUser()"
      ></CompanyUser>
    </v-dialog>
    <div class="text-center-mt-3">
      <v-btn class="mx-2" color="black" outlined  @click="openCompanyUser()"
        >Add User</v-btn
      >
    </div>
    </v-card>
  </div>
</template>
<script>

import CompanyUser from "@/components/CompanyUser.vue";

export default {
  components: { CompanyUser },
  name: "CompanyUserList",
  props: {
    companyIndex: Number,
  },
  data() {
    return {
      showCompanyUser: false,
      currentUser: null,
      editedIndex:null,
      users:[],
    };
  },
  methods: {
    getCurrentUsers () {
      return this.users = JSON.parse(localStorage.getItem("companies"))[this.companyIndex].users || [];
    },
    openCompanyUser() {
      this.showCompanyUser = true;
      this.users = this.getCurrentUsers()
    },
    deleteUser(index) {
      let company_storage = JSON.parse(localStorage.getItem("companies"))
      delete company_storage[this.companyIndex].users;
      localStorage.setItem("companies", JSON.stringify(company_storage));
      this.getCurrentUsers()
    },
    editUser(index){
      this.editedIndex = index
      this.currentUser = this.users[index]
      this.showCompanyUser = true;
    },
    closeCompanyUser() {
      this.users = this.getCurrentUsers()
      this.showCompanyUser = false;
      this.currentUser = null
      this.editedIndex = null
       this.getCurrentUsers()
    },
  },
   mounted() {
    this.getCurrentUsers()
  },
};
</script>
