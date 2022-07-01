import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradeService } from 'app/tutor/services/grade.service';
import { TutorService } from 'app/tutor/services/tutor.service';
import { ICategory } from "../categories/interface";

declare var $: any;
@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {

  public grades: any = [];
  public timeout: any;
  public searchFields: any = {};
  public categories: ICategory[] = [];
  constructor(
    private gradeService: GradeService,
    private tutorService: TutorService,
    private route: ActivatedRoute,
    )
    {

    }

  ngOnInit(): void {
    this.categories = this.route.snapshot.data['categories'];
    this.gradeService
      .search({
        take: 100,
        sort: 'ordering',
        sortType: 'asc'
      })
      .then(resp => {
        this.grades = resp.data.items;
      });
  }




}
