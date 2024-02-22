const Express=require("express");
const App=Express();

const port=5000;

App.get("/",(req,res)=>{
    res.send("<h1>It's a me MARIO</h1>")
});

App.listen(port,()=>{
    console.log(`app is runnig ${port}`)
})

module.exports = {
    App
}