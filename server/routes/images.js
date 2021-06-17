const router = require('express').Router();
const multer = require('multer');
const path = require("path");
const imageController = require('../controllers').image;

const storage = multer.diskStorage({
  destination: '../client/public/images',
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  }
});
  
var upload = multer({storage: storage});

router.get('/getByIds', async (req, res) => {
  let id = '';
  if ('id' in req.query) id = req.query.id;
  const images = await imageController.getAllByIds(id);
  if (!images) res.json({data: []});
  else res.json({data: images});
});

router.get('/TableData', async (req, res) => {
  const images = await imageController.getAll();
  if (!images) res.json({data: []});
  else res.json({data: images});
});

router.post('/add', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) {
  const error = new Error('Please upload a file');
  error.httpStatusCode = 400;
  return next(error);
  } else {
    const fileName = file.originalname;
    const data = await imageController.create(fileName, req.query.category);
    if (!data) res.json({data: []});
    else res.json({data: data});
  }
});

module.exports = router;
