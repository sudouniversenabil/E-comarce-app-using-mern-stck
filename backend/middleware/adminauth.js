import jwt from 'jsonwebtoken'

const adminauth = async  (req, res, next)=>{
    try {
        const { toke } = req.headers
        if (!toke) {
            return res.json({ succes: false, message: 'not authrijec login agin ' })

        }
        const token_decode = jwt.verify(toke, process.env.jwt_secret)
        if (token_decode !== process.env.admin_email + process.env.admin_pass) {
            return res.json({ succes: false, message: 'not authrijec login agin ' })
        }
        next()
    } catch (error) {
        console.log(error);

        res.json({ someproblem: "admin middlware have soproble" })
    }
}

export default adminauth