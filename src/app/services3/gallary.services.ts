import { EventEmitter, Injectable } from '@angular/core';
import { Gallary } from '../model3/gallary.model';
@Injectable({
  providedIn: 'root',
})
export class GallaryService {
  data: Gallary[] = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '2',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '3',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '4',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '5',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '6',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '7',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '8',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '9',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '10',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '11',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '12',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '13',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1596357395217-80de13130e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      imageAlt: '14',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      imageAlt: '15',
    },
  ];
  gallarySelected = new EventEmitter<Gallary>();
  getGallary() {
    return this.data;
  }
  galleryData: Gallary[] = [];
  // recipeEvent = new EventEmitter<Gallary>();
  gallaryEvent = new EventEmitter<Gallary>();
  // addRecipeToList(gallary: Gallary): void {
  //   this.galleryData.push(gallary);
  // }
  addGallaryToList(gallary: Gallary): void {
    this.galleryData.push(gallary);
  }
}
