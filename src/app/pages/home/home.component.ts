import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ListItemComponent } from '../../components/list-item/list-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ListItemComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  mons = [
    { name: "Pikachu", anime: "Pokémon" },
    { name: "Agumon", anime: "Digimon" },
    { name: "Drago", anime: "Bakugan" },
    { name: "Charmander", anime: "Pokémon" },
    { name: "Gabumon", anime: "Digimon" },
    { name: "Hydranoid", anime: "Bakugan" },
  ];
}
