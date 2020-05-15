const mysql = require('mysql2/promise');

const connectionConfig = require('../../database.json').development;

delete (connectionConfig.driver);

const pool = mysql.createPool(connectionConfig);

async function query(q, params = []) {
    let rows;
    try {
        // checking numbers on oversizing
        params.forEach((param) => {
            const num = Number(param);
            if (!isNaN(num) && !Number.isSafeInteger(num)) {
                console.log(`[Error] Oversized or float param ${param}`);
                console.log(`Query: ${q}, params: ${params}`);
                throw new Error('Oversize, reject!');
            }
        });
        [rows] = await pool.query(q, params);
        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = query;
