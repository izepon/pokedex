import { Component, Input } from '@angular/core';
import {  catchPokemon, checkCatch, getPokemonImage, getPokemonNumber, Pokemon } from 'src/_model/Pokemon';

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
  public catchPokemon = catchPokemon;
  public checkCatch = checkCatch;
}

