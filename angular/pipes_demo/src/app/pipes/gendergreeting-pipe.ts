import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gendergreeting'
})
export class GendergreetingPipe implements PipeTransform {

  transform(values: string, gender:string):string{
    if(gender == 'male'){
      return 'mr. ' + values;
    }

    else{
      return 'mrs. '+values;
    }
  }


}
