import { Component } from '@angular/core';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss']
})
export class PicComponent {
  edit:boolean = false;

  changeEditState(){
    this.edit = true;
  }

  editTitle(){
    this.edit = false;
  }
}
