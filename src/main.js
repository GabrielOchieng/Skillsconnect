import { createPinia } from "pinia";
import { createApp } from "vue";
import piniaPluginPersistedState from "pinia-plugin-persistedState";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.use(createPinia().use(piniaPluginPersistedState)).mount("#app");
