const sql = require("mssql");
const config = require("./dbconfig")

async function connect_test() {
try{
    let m_pool = await sql.connect(config);
    console.log("sql server connected..");
}catch(error){
    console.log("sql server error :" +sql.PreparedStatementError)
}
}

async function getdata_readpost(){
    try{
        let m_pool = await sql.connect(config);
        console.log("sql server connected..");
        let res = await m_pool.request().query("exec postTBL_select");
        console.log('getdata_readpost 완료')
        return res
        
    }catch(error){
        console.log("sql server error :" + error)
    }
}

module.exports = {
    connect_test: connect_test,
    getdata_readpost: getdata_readpost

};