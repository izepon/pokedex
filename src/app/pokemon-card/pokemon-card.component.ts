import { Component, Input } from '@angular/core';
import {  getPokemonImage, getPokemonNumber, Pokemon } from 'src/_model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input('pokemon')
  public pokemon!: Pokemon;

  public getPokemonImage = getPokemonImage;
  public getPokemonNumber = getPokemonNumber;
}
