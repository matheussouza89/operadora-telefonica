import * as homeModel from '../models/homeModels';

export function homeController(req, res) {
    res.render('home/home.ejs',{
        title: "Home"
    })
}