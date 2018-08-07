module.exports = (req,res,next) => {
    console.log('tested');
    if(req.user && req.user.role === 'ADMIN') {
        next();
    }else {
        res.status(401).send();
    }
};