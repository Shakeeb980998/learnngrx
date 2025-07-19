import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../Material.Module';
import { Store } from '@ngrx/store';
import { getspinerstate } from '../../shared/store/Global/app.selecter';

@Component({
  selector: 'app-loadingspiner',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './loadingspiner.component.html',
  styleUrls: ['./loadingspiner.component.css']
})
export class LoadingspinerComponent implements OnInit {
  
  isload = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getspinerstate).subscribe(res => {
      this.isload = res;
    });
  }
}
