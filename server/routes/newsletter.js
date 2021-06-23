const router = require('express').Router();
const multer = require('multer');
const newsletterController = require('../controllers').newsletter;
const imageController = require('../controllers').image;
const fs = require('fs');
const storage = multer.diskStorage({
    destination: '../client/public/newsletterImages',
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
    }
});

var upload = multer({storage: storage});

router.get('/TableData', async (req, res) => {
    const newsletters = await newsletterController.getAll();
    if (!newsletters) res.json({data: []});
    else res.json({data: newsletters});
});

router.post('/add', async (req, res) => {
    console.log(req.body)
    console.log("chocolate, making about page now")
    // const newsletters = await newsletterController.getAll();
    // if (!newsletters) res.json({data: []});
    // else res.json({data: newsletters});
    fs.writeFile(`../client/public/newsletter/${req.body.title}.html`, req.body.html, function(err) {
        if(err) {
            res.json({upload:false})
            return console.log(err);
        }
        console.log("The file was saved!");
        res.json({upload: true})
    });
    // res.json({data: req.body});
});


router.get('/getImages', async (req, res) => {
    const images = await imageController.getAll();
    let lst = {};
    const categories = new Set()
    images.forEach(img => {
        console.log(img.get({plain: 1}));
        let img_data = img.get({plain: 1});
        let category = img_data["imageCategory"]["name"];
        if (lst[category]==undefined) {
            lst[category] = []
        }
        categories.add(category);
        lst[category].push({title : img_data["name"],value:`/images/${img_data["name"]}`})
    });
    console.log(lst);
    let newlst = []
    for (const category in lst) {
        newlst.push({title: category,menu: lst[category]})
    }
    newlst.sort(function(a,b){
        a["title"] > b["title"]
    })
    // console.log(newlst)
    res.json(newlst);
    // if (!images) res.json({data: []});
    // else res.json({data: images});
});

// router.post('/addimages', upload.single('file'), async (req, res) => {
//     const file = req.file;
//     // if (!file) {http://localhost:4000/api/newsletter/getImages
//     // const error = new Error('Please upload a file');
//     // error.httpStatusCode = 400;
//     // return next(error);
//     // } else {
//     //   const fileName = file.originalname;
//     //   const data = await imageController.create(fileName, req.query.category);
//     //   if (!data) res.json({data: []});
//     //   else res.json({data: data});
//     // }
//     res.json({data: 'data'});
// });

router.post('/addimages', upload.single('file'), async (req, res) => {
    const file = req.file;
    console.log(file);
    // if (!file) {
    // const error = new Error('Please upload a file');
    // error.httpStatusCode = 400;
    // return next(error);
    // } else {
    //   const fileName = file.originalname;
    //   const data = await imageController.create(fileName, req.query.category);
    //   if (!data) res.json({data: []});
    //   else res.json({data: data});
    // }IMG_2142.PNG
    res.json({location: `/newsletterImages/${file.originalname}`});
});


module.exports = router;
