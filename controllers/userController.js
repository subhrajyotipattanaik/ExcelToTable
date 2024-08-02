var User = require('../models/User');
var csv = require('csvtojson');

const importUser = async(req,res)=>{

    try {

        var userData = [];

        csv()
        .fromFile(req.file.path)
        .then(async(response) => {
            for(var x = 0; x < response.length; x++){
                userData.push({
                Name: response[x].Name,
                email: response[x].email,
                Adress: response[x].Adress,
                });
            }
            await User.insertMany(userData);

            // console.log(response)
        });
        res.send({status:200, success:true, alert:"Running"});
    }
    catch (error) {
        res.send({status:400, success:false, msg:error.message}); 
    }
}
module.exports = {
    importUser
}