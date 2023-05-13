import Vue from "vue";
import VueRouter from "vue-router";
import CompanyList from "../views/CompanyList.vue";
import process from "../../.eslintrc";

Vue.use(VueRouter);

const routes = [
  {
    path: "/companyList", component: CompanyList },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

