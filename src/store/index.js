import { createStore } from 'vuex'
import boats from "./boats";
import adventures from "./adventures";
import auth from "./auth";
import contact from "./contact";
import messages from "./messages";
import images from "./images";
import skippers from "./skippers";

const store = createStore({
    modules: {
        boats,
        adventures,
        auth,
        contact,
        messages,
        images,
        skippers,
    }
})
export default store