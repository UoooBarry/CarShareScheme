/**************************
 * @AUTHOR YONGQIAN HUANG *
 **************************/

import TaskI from './taskI';
import _Bill from '../repository/billRepository';
import _Rent from '../repository/rentRepository';

export default class cleanBillTask implements TaskI{
    period: number;

    constructor(hours: number) {
        this.period = hours * 36000;
    }

     async task(): Promise<void> {
         //Count for how many tasks run
        let tasks = 0;

        console.log('Now running clean outdated bill task...');
        const bills =  await _Bill.getAll();
        const today = new Date();
        for await(const bill of bills){
            if(bill.createdAt < today && bill.isPaid == false){
                //Activate the car
                await bill.rent.car.update({
                    available: true
                })
                //Destroy the bill and rent
                await bill.rent.destroy();
                await bill.destroy();
                tasks ++;
            }
        }
        console.log('Cleaning task finished.' + ` ${tasks} cleaned...`);
     }
     
     run(): void {
         setInterval(() => {
             this.task();
         }, this.period);
     }

}