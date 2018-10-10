import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDrivers'
})
export class SearchDriversPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    return pipeData.filter(eachItem => {
    	return (
    		eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
    		eachItem['team'].toLowerCase().includes(pipeModifier.toLowerCase())
    	)
    });
  }

}
