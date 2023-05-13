<template>
  <v-card>
    <v-card-text class="mt-12">
      <h1 class="mx-2" color="dark">
        Create Company
      </h1>
      <v-form>
        <v-text-field
          label="Company Name"
          name="company"
          prepend-icon="mdi-domain"
          type="text"
          color="teal accent-3"
          v-model="company.name"
        />
        <v-text-field
          label="Email"
          name="Email"
          prepend-icon="mdi-email-multiple"
          type="text"
          color="teal accent-3"
          v-model="company.email"
        />
        <v-text-field
          label="Address"
          name="address"
          prepend-icon="mdi-map-marker"
          type="area"
          color="teal accent-3"
          v-model="company.address"
        />
        <v-text-field
          label="Phone"
          name="phone"
          prepend-icon="mdi-phone"
          type="number"
          placeholder="(555) 555-5555"
          color="teal accent-3"
          v-model="company.phone"
        />
        <v-card-actions
          ><v-spacer></v-spacer>
          <v-btn class="mx-2" color="black" outlined  @click="close()"
            ><v-icon left>mdi-close</v-icon>Close</v-btn
          >
          <v-btn class="mx-2" color="black" outlined  @click="save()"
            ><v-icon left>mdi-check</v-icon>Save</v-btn
          ></v-card-actions
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "CompanyForm",
  props: {
    currentCompany: Object,
    index: Number,
    source: String,
  },
  data: () => ({
    company: {
      name: null,
      address: null,
      email: null,
      phone: null,
      users: [],
    },
    companies: [],
  }),
  methods: {
    resetCompany() {
      this.company = {
        name: null,
        address: null,
        email: null,
        phone: null,
      };
    },
    save() {
      if (this.index !== null) {
        this.companies[this.index] = this.company
      } else {
        this.companies.push(this.company);
      }
      this.resetCompany();
      console.log(this.companies);

      localStorage.setItem("companies", JSON.stringify(this.companies));
      this.close();
    },
    close() {
      this.$emit("close");
    },
  },
    created() {
      if (localStorage.getItem("companies") !== null) {
        this.companies = JSON.parse(localStorage.getItem("companies"));
      }
      if (this.currentCompany) {
        this.company = { ...this.currentCompany };
      }
    },
};
</script>
