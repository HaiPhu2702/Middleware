
export class AuthController {

    static  home(req, res, next) {
        res.render('home',{body:"hello 2"});
        next();
    }

    static  showLogin(req, res, next) {
        res.render('auth/login');
        next();
    }

    static  showAmin(req, res, next) {
        res.render('auth/admin');
        next();
    }

}