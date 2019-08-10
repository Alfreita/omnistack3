const Dev = require("../model/dev");

module.exports={
    async store(req,res){
        const {user} = req.headers;
        const {devid} = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devid);

        if(!targetDev)
           return res.status(400).json({error:'Dev not exists'});
        
        loggedDev.dislikes.push(targetDev._id);
        await loggedDev.save();
        
        return res.json({ok:true});
    }
}