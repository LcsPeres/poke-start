import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/models/app-state.service';

@Component({
  selector: 'stats-modal',
  templateUrl: './stats-modal.component.html',
  styleUrls: ['./stats-modal.component.scss']
})
export class StatsModalComponent implements OnInit {

  constructor(
    public appState: AppStateService
  ) { }

  ngOnInit() { }

}
