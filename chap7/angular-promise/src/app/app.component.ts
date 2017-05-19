import { Component } from '@angular/core';
import { IMDBAPIService } from './services/imdbapi.service';
import { Movie, MovieFields } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-promises works!';
  private movies: Movie[] = [];
  private error: boolean = false;
  private finished: boolean = false;

  constructor(private IMDBAPI: IMDBAPIService) {

    this.IMDBAPI.fecthOneById(1).then(
      value => {
        this.movies.push(value);
        console.log("Component", value)
      },
      error => this.error = true
    );

    this.IMDBAPI.fetchByField(MovieFields.release_year, 2015).then(
      value => {
        this.movies = value;
        console.log("Component", value)
      },
      error => this.error = true
    )

    this.IMDBAPI.byField(MovieFields.release_year, 2015)
      .or(MovieFields.release_year, 2014)
      .or(MovieFields.phase, "Phase Two")
      .fetch()
      .then(
      value => {
        this.movies = value;
        console.log("Component", value)
      },
      error => this.error = true
      );

  }
}
