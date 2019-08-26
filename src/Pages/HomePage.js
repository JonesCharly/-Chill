import React, {Component} from 'react';
import './HomePage.css';

class HomePage extends Component {

    render() {
        return (
            <div className="homepage">
                <header>
                    <h2>Welcome Everybody!</h2>
                    <p>&Chill est un outil parfait pour organiser vos watching de séries, 
                        que se soit savoir ou vous en êtes dans une saison à vos listes personnalisées...
                        Vous ne serai plus jamais perdu ! Bonus venez découvrir notre outil 'Random', 
                        fini les heures perdues à chercher quoi regarder ! 
                    </p>
                </header>
            </div>
        )
    }
}

export default HomePage ;