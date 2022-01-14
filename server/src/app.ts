import express from 'express';
import dotenv from 'dotenv'
import Scheduler from "./core/Scheduler";
import initRoutes from "./core/routes";

dotenv.config();

const app = express();
initRoutes(app);

const port:number = parseInt(process.env.APP_PORT);

const scheduler = new Scheduler();
const jobs = scheduler.init();

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
});

