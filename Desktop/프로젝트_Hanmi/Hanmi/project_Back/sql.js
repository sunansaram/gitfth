const sql = require('mssql');
const config = require('./dbconfig');

const pool = new sql.connect(config, function(err){
    if(err){
        console.log('MSSQL 연결 실패')
        return console.error('error : ', err);
    }
    console.log('MSSQL 연결 완료')
})
module.exports = pool;