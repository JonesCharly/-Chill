import React, {Component} from 'react';

class Callpi extends Component {

    state = {
        series: [],
      }
    
      getCharacter = () => {
        
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=e6affe583373c38fdedd2d23de0dc58b&language=fr-FR&sort_by=popularity.desc&page=1&timezone=France%2FPARIS&include_null_first_air_dates=false')
        .then(res => res.json())
        .then(res => console.log(res.results) || this.setState({ series: res.results }))
      }
    
    
      componentDidMount() {
        this.getCharacter()
      }


    render() {
        const {series} = this.state
        return (
            <div>
                <div>

                    <p>{series.map(serie =>
                        <p key={serie.id}>{serie.name}</p> )}</p>

                </div>
                    
            </div>
        )
    }
}

export default Callpi;