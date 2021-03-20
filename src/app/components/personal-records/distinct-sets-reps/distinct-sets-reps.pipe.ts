import {Pipe, PipeTransform} from '@angular/core';
import {PersonalRecord} from '../../../app.models';

@Pipe({
  name: 'distinctSetsReps'
})
export class DistinctSetsRepsPipe implements PipeTransform {

  transform(personalRecords: PersonalRecord[]): string[] {
    return [...new Set([].concat(...personalRecords.map(item => Object.keys(item.records))))];
  }
}
