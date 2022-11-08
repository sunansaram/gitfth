const express = require('express');
const app = express();
const bodyParser =  require('body-parser')
const sql = require('./dboperation')


app.use(express.json())

const loginRouter = require("./api/login");
const { request } = require('express');

const port = 3000;

app.listen(port, ()=>{
    console.log(`BackEnd 서버가 실행됩니다. http://localhost:${port}`)
});


app.use(bodyParser.json())

// app.use("/api/login", loginRouter);


app.post("/api/login", async (req, res) => {
    try{
        let pool = await sql.connect(config);
        const id = req.body.id
        const password = req.body.password
              
        const m_query = "exec userTBL_check '"+ id +"', '"+ password +"'"
 
   
    }catch(err){
        res.status(500);                        // 에러 발생시 Response 상태를 서버에러인 500에러로 세팅
        res.send(err.message);                  // 에러 발생시 Response에 서버에러 내용 포함 전달
    }


})


app.get("/api/readpost", async (req, res) => {
    try{
        sql.getdata_readpost().then((result)=> {
            res.json(result);
        })
            
 
    }catch(err){
        res.status(500);                        // 에러 발생시 Response 상태를 서버에러인 500에러로 세팅
        res.send(err.message);                  // 에러 발생시 Response에 서버에러 내용 포함 전달
    }


})
app.post("/api/users/add", async (req, res) => {

    // 구조분해를 통해 id 와 name을 추출
    console.log(req.body)

    //filter라는 함수는 자바스크립트에서 배열 함수이다. 필터링을 할때 많이 사용된다 필터링한 데이터를 새로운 배열로 반환한다.

    res.json({ok: true})
})


app.get('/test',(req,res) =>{
    res.send('Hello World!');
});


