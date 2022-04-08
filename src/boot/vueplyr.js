import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

export default ({
    app,
    router,
    store
}) => {
    app.use(VuePlyr, {
        plyr: {
            fullscreen: {
                enabled: false
            },
        }
    })
}