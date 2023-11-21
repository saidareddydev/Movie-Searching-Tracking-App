import { LightningElement,api } from 'lwc';

export default class MovieTile extends LightningElement {
    @api movie
    @api selectedMovieId;

    clickhandler(event){
        console.log(this.movie.imdbID);

        // Create Custom Event
        const evt = new CustomEvent("selectmovie",{
            detail : this.movie.imdbID
        });

        // dispatch Event from Child to Parent

        this.dispatchEvent(evt);

    }
    get tileselected(){
        return this.selectedMovieId === this.movie.imdbID
         ? "tile selected"
         : "tile";
    }
}