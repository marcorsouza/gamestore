'use strict'

const Plataform = use('App/Models/Plataform')

class HomeController {
    async home ({view}){

        const plataforms = await Plataform.all();

        return view.render('Home/index', {plataforms : plataforms.toJSON() })
    }
}

module.exports = HomeController
