class userController {
    async registration (req,res){

    }

    async login (req,res){
        
    }

    async check (req,res){
        const query = req.query
        res.json(query)
    }
}

module.exports = new userController()