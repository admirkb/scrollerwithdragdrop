import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-connected-sorter',
  templateUrl: './connected-sorter.component.html',
  styleUrls: ['./connected-sorter.component.scss']
})
export class ConnectedSorterComponent implements OnInit {


  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  todo = Array.from({ length: 10 }).map((_, i) => {
    return {
      test: `Item #${i+10}`,
      imageUrl: `../../../assets/contact-us.png`


    };
  });


  done = Array.from({ length: 5 }).map((_, i) => {
    return {
      test: `Item #${i}`,
      imageUrl: `../../../assets/contact-us.png`


    };
  });

  // items = Array.from({ length: 100000 }).map((_, i) => {
  //   return {
  //     test: `Item #${i}`,
  //     imageUrl: `../../../assets/contact-us.png`


  //   };
  // });

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      console.log("moveItemInArray", this.done)
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      console.log("transferArrayItem", this.done)
    }
  }

  dropHorizontal(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
}
