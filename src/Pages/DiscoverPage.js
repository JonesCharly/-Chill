import React, {Component} from 'react';
import './DiscoverPage.css';
import DiscoverCard from '../Components/DiscoverCard';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';




class DiscoverPage extends Component {

     state = {
       series: [],
       current: 1,
     }
    
     onChange = (page) => {
        console.log(page);
        this.setState({
          current: page,
        });
        this.getSeries(page)
        console.log(page);

      }

    getSeries = (page) => {

    
        console.log(page);
        
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=e6affe583373c38fdedd2d23de0dc58b&language=fr-FR&sort_by=popularity.desc&page='+ page +'&timezone=France%2FPARIS&include_null_first_air_dates=false')
        .then(res => res.json())
        .then(res => console.log(res.results) || this.setState({ series: res.results }))
    }


    componentDidMount() {
        this.getSeries(1)
    }

    render() {
        const {series} = this.state
        return (
            <div>
                <h2>Découvrir</h2>

                <div className="navbar">
                    <input placeholder="recherche"></input>
                    <select>
                        <option>genre</option>
                    </select>
                    <select>
                        <option>type</option>
                    </select>
                </div>

                <h4>Tendances Actuelles</h4>
                <div className="gallery">
                    { series.map(serie => 
                        <DiscoverCard name={serie.name} image={'https://image.tmdb.org/t/p/w200/' + serie.poster_path}/>
                    )}
                </div>

                <Pagination onChange={this.onChange} current={this.state.current} total={5000} />

            </div>
        )
    }
}

export default DiscoverPage ;