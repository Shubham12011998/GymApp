import { Component, Input, OnInit } from '@angular/core';
import { Gym } from 'src/app/model1/gym.model';
import { GymService } from 'src/app/services1/gym.services';

@Component({
  selector: 'app-gym-item',
  templateUrl: './gym-item.component.html',
  styleUrls: ['./gym-item.component.css'],
})
export class GymItemComponent implements OnInit {
  @Input() gym: Gym | undefined;

  constructor(private gymService: GymService) {}

  ngOnInit(): void {}
  onSelect() {
    this.gymService.gymSelected.emit(this.gym);
  }
}
