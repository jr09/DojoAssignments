import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
  pure: false
})
export class OrderbyPipe implements PipeTransform {

  transform(arr: Array<any>): any {
    console.log('im here3');
    return arr.sort(compare);
  }

}

function compare(a,b){
  if(a.upvotes > b.upvotes){
    return -1;
  }
  if(a.upvotes < b.upvotes){
    return 1;
  }
  return 0;
}