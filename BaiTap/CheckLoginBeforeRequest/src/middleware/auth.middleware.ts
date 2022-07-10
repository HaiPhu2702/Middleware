
import {AppDataSource} from "../data-source"
 import {User} from "../entity/User"

const userRepo = AppDataSource.getRepository(User)

export class MiddlewareAuth {

    static async checkLogin(req, res, next) {

        //neu co session cookie vao admin luon

        const IdSessions = await





        //neu chua co check name-password +tao session +cookie
        const userNameForm = req.body.name;
        const userPassForm = req.body.password;

        const findUser = await userRepo.findOneBy({name: userNameForm})
        if (!findUser) {
            return res.render('auth/login', {err: "user does not exist"})
        } else {
            if (findUser.password !== userPassForm) {
                return res.render('auth/login', {err: "password does not exist"})
            }
        }

        next()

    }
}

