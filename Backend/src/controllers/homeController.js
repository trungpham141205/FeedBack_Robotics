const connection = require('../config/database');

const getHomePage = (req, res) => {
    let users = [];
    
    connection.query(
        'SELECT * FROM Feedback f',
        function (error, results, fields){
            users = results;
            console.log(">>>results= ", results);
            // console.log(">>> check users", users);
            res.send(JSON.stringify(users));
        }
    )
};

module.exports = {
    getHomePage,
}