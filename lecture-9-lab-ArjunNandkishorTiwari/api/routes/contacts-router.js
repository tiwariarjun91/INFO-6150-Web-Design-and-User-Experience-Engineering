import express from 'express';

import * as contactsController from './../controleers/contacts-controller.js';


const router = express.Route();

router.route('/contacts')
    .post(contactsController.post)
    .get(contactsController.index);

router.route('/contacts/:id')
    .get(contactsController.get)
    .put(contactsController.update)
    .delete(contactsController.remove);

export default router;