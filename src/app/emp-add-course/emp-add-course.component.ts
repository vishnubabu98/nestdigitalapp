import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-add-course',
  templateUrl: './emp-add-course.component.html',
  styleUrls: ['./emp-add-course.component.css']
})
export class EmpAddCourseComponent {

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""
  readValues = ()=>

  {
  
    let data : any= {"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
  
    console.log(data)
}
}
