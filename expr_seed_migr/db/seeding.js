const fs = require('fs')
const pool = require('../queries')

const seedQuery = async () => {
    let readQuery = ""
    try{
        readQuery = fs.readFileSync('db/seeding.sql',{ encoding : 'UTF-8'})
        await pool.query(readQuery)
        console.log('Seeding completed!')
    }catch(error){
        console.log('Error happened when seeding!.', error)
    } finally {
        process.exit();
    }
}

seedQuery()