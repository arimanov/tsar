import { Express } from 'express';

export default (app: Express) => {
    app.get('/', (req, res) => {
        res.send('Application started');
    });
}


// get task list
// get task by id
// get task schedule list by task id
// get schedule by id
