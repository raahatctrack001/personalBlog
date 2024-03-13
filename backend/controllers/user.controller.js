const test = (req, res)=>{
    res.json({message : "controller file is working fine"});
}

export const updateUser = (req, res, next)=>{
    console.log(req.user);
}

export default test;