import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movieRating: string;
  movieId: string;
  movie: Movie;
  routeSub: Subscription;
  movieSub: Subscription;
  url: string;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) =>{
      this.movieId = params['id'];
      this.getMovieDetails(this.movieId);
    });
  }

  getMovieDetails(id: string): void{
    this.movieSub = this.httpService
      .getMovieDetails(id)
      .subscribe((movieResp: Movie) =>{
        this.movie = movieResp;
        this.url = this.movie.image;

        setTimeout(() =>{
          this.movieRating = this.movie.rating;
        }, 1000);
      });
  }

}
