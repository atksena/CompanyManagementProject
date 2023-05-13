<template>
  <div>
    <v-dialog
      v-model="showCompanyForm"
      width="1000"
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <company-form v-if="showCompanyForm"
        :currentCompany="currentCompany" :index="editedIndex"
        @close="closeCompanyForm()"
      ></company-form>
    </v-dialog>
    <v-spacer></v-spacer>
    <v-dialog
      v-model="showCompanyUserList"
      width="1000"
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <CompanyUserList v-if="showCompanyUserList" :company-index="editedIndex"

      ></CompanyUserList>
    </v-dialog>
    <v-app
      ><v-main
        ><v-container>
          <div class="text-center-mt-3">
      <v-btn class="mx-2" color="black" dark outlined  @click="openCompanyForm()"
        >Add Company</v-btn
      >
    </div>
      <v-spacer></v-spacer>
          <v-row class="mb-4">
            <v-col
              sm="6"
              md="4"
              lg="3"
              xl="2"
              v-for="(company, index) in companies"
              :key="index"
            >
              <v-card>
                <v-card-text class="text--primary"
                  >
                  <div>{{ index }}</div>
                  <div>{{ company.name }}</div>
                  {{ company.address }}
                  <div>{{ company.email }}</div>
                  <div>{{ company.phone }}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    @click="deleteCompany(index)"
                    class="mx-2" color="black" outlined
                    ><v-icon>mdi-delete-empty</v-icon></v-btn
                  >
                  <v-btn
                    @click="editCompany(index)"
                    class="mx-2" color="black" outlined
                    ><v-icon>mdi-pencil</v-icon></v-btn
                  >
                  <v-btn
                    @click="openCompanyUserList(index)"
                    class="mx-2" color="black" outlined
                    ><v-icon>mdi-account</v-icon></v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container></v-main
      ></v-app
    >
  </div>
</template>
<script>
import CompanyForm from "../components/CompanyForm";
import CompanyUserList from "../components/CompanyUserList";
export default {
  name:"CompanyList",
  components: { CompanyForm, CompanyUserList },
  data() {
    return {
      showCompanyUserList:false,
      showCompanyForm: false,
      currentCompany: null,
      editedIndex:null,
      companies:[],
    };
  },
  methods: {
    openCompanyForm() {
      this.showCompanyForm = true;
      this.companies = JSON.parse(localStorage.getItem("companies")) || [];
    },
    closeCompanyForm() {
      this.showCompanyForm = false;
      this.companies = JSON.parse(localStorage.getItem("companies")) || [];
      this.currentCompany = null
      this.editedIndex = null
    },
    deleteCompany(index) {
      this.companies.splice(index, 1);
      localStorage.setItem("companies", JSON.stringify(this.companies));


    },
    editCompany(index) {
      this.editedIndex = index
      this.currentCompany = this.companies[index]
      this.showCompanyForm = true;
    },
    openCompanyUserList(index){
      this.editedIndex = index
      this.showCompanyUserList=true;
    },
    closeCompanyUserList() {
      this.showCompanyForm = false;
    },
  },
  created() {
    this.companies = JSON.parse(localStorage.getItem("companies")) || [];
  },
};
</script>
