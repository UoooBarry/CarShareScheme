/**************************
 * @AUTHOR YONGQIAN HUANG *
 **************************/


import TaskI from './taskI';


import _Rent from '../repository/rentRepository';

export default class rentDetector implements TaskI {
  period: number;

  constructor(hours: number) {
      this.period = hours * 36000 * 60;
  }

   async task(): Promise<void> {
       //Count for how many tasks run
      let tasks = 0;

      console.log('Now running scheduled rent task...');
       const rents = await _Rent.getReadyRents(); //Get the car that should be start today
      for await(const rent of rents){
          //Make the car unavailable
          await rent.car.update({
              available: false
          })
          tasks ++;
      }
      console.log('Task finished.' + ` ${tasks} rents are ready to go...`);
   }
   
   run(): void {
       setInterval(() => {
           this.task();
       }, this.period);
   }

 }