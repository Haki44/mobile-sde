import { createStore } from 'vuex'
import boats from "./boats";
import adventures from "./adventures";
import auth from "./auth";
import contact from "./contact";

const store = createStore({
    modules: {
        boats,
        adventures,
        auth,
        contact,
    }
})
export default store