const checkday = (req, res, next) => {
    const date = new Date()
    const day = date.getDay()
    console.log(day)
    day>5? res.status(400).render('error.hbs'):
    next()
}
module.exports=checkday