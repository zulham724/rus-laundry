import VueHtmlToPaper from 'src/plugins/VueHtmlToPaper'
// import VueHtmlToPaper from 'vue-html-to-paper';

export default ({
    app,
    router,
    store
}) => {
    // something to do
    app.use(VueHtmlToPaper)
}