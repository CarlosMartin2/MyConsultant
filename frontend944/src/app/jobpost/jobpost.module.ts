import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {Routes, RouterModule} from "@angular/router"
import { GradeService } from "app/tutor/services/grade.service";
import { JobpostComponent } from "./jobpost.component";
import { TutorGradeComponent } from "app/tutor/components";
import { TutorService } from "app/tutor/services/tutor.service";
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Post Job',
      urls: [{ title: 'Post Job', url: '/starter'}, {title: 'Undefined'}]
    },
    component: JobpostComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    data: {
      title: 'Started',
      urls: [{ title: 'Started', url: '/jobposter' }, { title: 'Post Job' }]
    },
    component: JobpostComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    JobpostComponent,
    TutorGradeComponent,
  ],
  providers: [
    TutorGradeComponent,
    GradeService,
    TutorService
  ],
  exports: [TutorGradeComponent]
})

export class PostjobModule {}
