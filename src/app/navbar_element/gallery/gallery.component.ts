import { Component, Input, OnInit } from '@angular/core';
import { Gallary } from 'src/app/model3/gallary.model';
import { GallaryService } from 'src/app/services3/gallary.services';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  @Input() galleryData: Gallary[] = [];
  constructor(private GallaryService: GallaryService) {}

  ngOnInit(): void {
    this.GallaryService.gallaryEvent.subscribe((gallary) => {
      this.GallaryService.addGallaryToList(gallary);
    });
    this.galleryData = this.GallaryService.data;
  }
}
