import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface Episode {
  id: number;
  name: string;
}

@Component({
  selector: 'app-listaepisodios',
  templateUrl: './listaepisodios.component.html',
  styleUrls: ['./listaepisodios.component.css']
})
export class ListaepisodiosComponent implements OnInit {
  episodes: Episode[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes(): void {
    const apiUrl = 'https://rickandmortyapi.com/api/episode';

    this.http.get(apiUrl).subscribe((data: any) => {
      // Filtrar episodios con ID impar
      this.episodes = data.results.filter((episode: Episode) => episode.id % 2 !== 0);
    });
  }
}
