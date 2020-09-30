const checktime = (req, res, next) => {
    const date = new Date()
    const hours = date.getHours()
    // (hours<9 && hours>17) ? 
    // res.status(400).send('The service is available between 9-am and 17-pm'):
    console.log(hours)
    if (hours < 9 || hours > 17)
        return res.status(400).render('error2.hbs')
    next()
}

module.exports=checktime
