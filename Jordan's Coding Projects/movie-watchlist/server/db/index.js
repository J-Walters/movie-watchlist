const Sequelize = require('sequelize')

const dbConnection = new Sequelize(
    'postgres://jordanwalters@localhost:5432/moviewatchlist'
)

module.exports = dbConnection

/*
    Movie model
        -title (not null)
        -imdbLink (null)
        -watched (boolean, default false)
    Genre model
        -name (not null)

    Many-to-Many movies and genres
    belongsToMany

*/

const Movie = dbConnection.define('movie', {
    title: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imdbLink: {
        type: Sequelize.DataTypes.STRING(1000),
        allowNull: true,
        validate: {
            isURL: true
        }
    },
    watched: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

const Genre = dbConnection.define('genre', {
    name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
    }
})

Movie.belongsToMany(Genre, {through: 'movies_genres'})
Genre.belongsToMany(Movie, {through: 'movies_genres'})


















// const test = async () => {
//     try {
//         await dbConnection.authenticate();
//         console.log('authenticate worked')
//     } catch (e) {
//         console.error(e)
//     }
    
// };

// test();

