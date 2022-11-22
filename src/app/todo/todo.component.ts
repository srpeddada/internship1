import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ServiceService } from '../shared/service.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo = [];
  done = [];
  constructor(public service: ServiceService ) { }

  ngOnInit(): void {
    this.service.getlist().subscribe(res => {
      console.log(res)
      for (let i in res) {
        console.log(res[i])
        if (res[i].status == "new") {
          this.todo.push(res[i].name)
        }
        else {
           this.done.push(res[i].name)
        }
      }
    })

    const abc = "abc"
    const def = 123
    const efg = abc + def
    console.log(abc + def)
    console.log(efg)
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    var data = {
      name: form.value.task
    }
    this.service.postListData(data).subscribe(res => {
      console.log(res[0])
      location.reload()
    })
  }

  

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(this.todo, this.done, "new")
    }

     console.log(this.todo, this.done, "final")
      var data = {
        todolist: this.todo,
        donelist: this.done

      }
      this.service.updateList(data).subscribe(res => {
        console.log(res)
      })
  }

  deleteOnClick(name) {
    console.log(name)
   var data = {
      name: name
    }
    this.service.deleteItem(data).subscribe(res => {
      console.log(res)
      location.reload()
    })
  }

}
