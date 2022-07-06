require('dotenv').config()
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports  = {
    seed: (req, res) => {
        sequelize.query(`
            DROP TABLE IF EXISTS songs;
            DROP TABLE IF EXISTS artists;

            CREATE TABLE songs (
                song_id SERIAL PRIMARY KEY, 
                name VARCHAR(80),
                artist_name VARCHAR(80),
                favorite BOOLEAN
            );
            
            INSERT INTO songs (name, artist_name, favorite)
            VALUES ('Can I Just Spend My Life With You', 'The Instant Classic', false),
            ('The Bells of Nortre Dame Medley', 'Ringmasters', false),
            ('When I See an Elephant Fly', 'Vocal Spectrum', false);`).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}