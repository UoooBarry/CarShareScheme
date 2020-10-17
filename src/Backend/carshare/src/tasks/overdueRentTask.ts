/**************************
 * @AUTHOR YONGQIAN HUANG *
 **************************/

import TaskI from './taskI';
import _Bill from '../repository/billRepository';
import _Rent from '../repository/rentRepository';
import { BillType } from '../models/bill';
import { RentStatus } from '../models/rent';
import Message from '../helpers/messageHelper';

export default class overdueRentTask implements TaskI {
  period: number;

  constructor(hours: number) {
    this.period = hours * 36000 * 60;
  }

  async task(): Promise<void> {
    //Count for how many tasks run
    let tasks = 0;

    console.log('Now detecting overdue fee...');
    const rents = await _Rent.getOverdue();
    for await (const rent of rents) {
      await rent.update({ status: RentStatus.Overdue });
      await _Bill.create({
        user_id: rent.user_id,
        type: BillType.OverdueFee,
        fee: rent.car.price * 1.1, //10% extra fee
        rent_id: rent.id
      })

      //Send message to user only in production environment
      if (process.env.NODE_ENV == 'production') {
        const text: string = `Your rent ${rent.id} is now overdue, please go to the overdue panel of our app to pay for your overdue fee. Return your renting car as soon as possible, Thanks for you cooperation.`;
        Message.sendMessage(rent.user.contact_number, text);
      }

      tasks++;
    }
    console.log('Detecting task finished.' + ` ${tasks} detected...`);
  }

  run(): void {
    setInterval(() => {
      this.task();
    }, this.period);
  }

}