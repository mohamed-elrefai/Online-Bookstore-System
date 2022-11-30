import { Application } from 'express';

export default (app: Application) => {
    app.get('/', (_req, res) => {
        res.status(200).json({ code: 200, statuse: 'OK', message: {
            "Url Link": "https://3vnrwyrw06.execute-api.us-east-1.amazonaws.com/dev/",
            "authentications": {
                "Register": "/api/register",
                "Login": "/api/login"
            }
        }})
    })
}