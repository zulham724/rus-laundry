import DailyTransaction from 'src/components/DailyTransactionComponent';
// let asd = () =>
//     require('src/components/DailyTransactionComponent')

export default async({
    app,
    router,
    store
}) => {
    // something to do
    app.component('daily-transaction', DailyTransaction)
}