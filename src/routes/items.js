
// cấu hình itemController

const express = require('express');
const router = express.Router();

const itemController = require('../app/controllers/ItemController');


//newcontroller.index

router.get('/:id/edit', itemController.edit);
router.get('/create', itemController.create);
router.post('/formAction', itemController.formAction);

router.post('/store', itemController.store);
router.patch('/:id/restore', itemController.restore);
router.put('/:id', itemController.update);
router.get('/', itemController.posts);

router.delete('/:id/permanentlyDelete', itemController.permanentlyDelete);
router.delete('/:id', itemController.delete);


router.get('/:loai/show', itemController.showList);
router.get('/:id', itemController.show);

module.exports = router;

