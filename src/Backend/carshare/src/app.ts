/************************************************************************
*           @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020            *
*         @UPDATED: YONGQIAN HUANG, 23/07/2020, INIT CREATION          *
*              YONGQIAN HUANG, 24/07/2020, SEED DATABASE               *
*              YONGQIAN HUANG, 26/07/2020, SYNC DATABASE               *
* YONGQIAN HUANG, 03/08/2020, MAKE AUTO MIGRATION AND SEED TO DATABASE *
* Yongqian Huang,11/08/2020, Use cors                                  *
*Yongqian Huang, Updated at 03/09/2020 Migrate to typescript           *
************************************************************************/

import createError from 'http-errors';
import express,{Application, Request, Response, NextFunction} from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import carsRouter from './routes/cars';
import customerRouter from './routes/customers';
import locationRouter from './routes/locations';
import orderRouter from './routes/orders';
import licenseRouter from './routes/licenses';
import cors from 'cors';
import CleanBillTask from './tasks/cleanBillTask';
import OverdueRentTask from './tasks/overdueRentTask';

// Database
import db from './config/db';
import seed from './data/seed';

const app:Application = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(cors());

app.use('/api/cars', carsRouter);
app.use('/api/customers', customerRouter);
app.use('/api/locations', locationRouter);
app.use('/api/orders', orderRouter);
app.use('/api/licenses', licenseRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// catch database connection
db.authenticate()
  .then(() =>{ 
    console.log('Database connected...');
    db.sync()
      .then(() => {
        seed.up().then(() => {
          console.log('Database seeded.');
        });    
      });
  })
  .catch((err: any) => console.log(`DB err: ${err}`))


//Tasks
const cleanBill: CleanBillTask = new CleanBillTask(24);
const overdueDetect: OverdueRentTask = new OverdueRentTask(24);
cleanBill.run();
overdueDetect.run();

// error handler
app.use( (err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // render the error page
  res.json(err);
});

app.listen(3000, () => console.log('Server in running on port 3000...'));

export default app;