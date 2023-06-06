import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchnote',
})
export class SearchnotePipe implements PipeTransform {
  transform(value: any[], param: string) {
    if (!param) {
      return value;
    } else {
      return value.filter((item) => {
        return item.title.toLocaleLowerCase().includes(param);
      });
    }
  }
}
