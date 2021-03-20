import {DistinctSetsRepsPipe} from './distinct-sets-reps.pipe';
import {PersonalRecord} from '../../../app.models';

describe('DistinctSetsRepsPipe', () => {
  const pipe = new DistinctSetsRepsPipe();

  it('should transform personal records to distinct sets and reps', () => {
    const personalRecordsMock: PersonalRecord[] = [
      {
        id: 1,
        exercise: 'exercise1',
        records: {
          '3x12': 50,
          '5x5': 75
        }
      },
      {
        id: 1,
        exercise: 'exercise2',
        records: {
          '3x12': 50
        }
      }
    ];

    expect(pipe.transform(personalRecordsMock)).toEqual(['3x12', '5x5']);
  });
});
