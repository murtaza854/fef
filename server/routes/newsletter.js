const router = require('express').Router();
const multer = require('multer');
const newsletterController = require('../controllers').newsletter;
const imageController = require('../controllers').image;
const fs = require('fs');
const nodemailer = require('nodemailer');

const storage = multer.diskStorage({
    // destination: '../client/build/public/newsletterImages',
    destination: '../client/public/newsletterImages',
    // destination: '../build/newsletterImages',
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
});

var upload = multer({ storage: storage });

router.get('/TableData', async (req, res) => {
    const newsletters = await newsletterController.getAll();
    if (!newsletters) res.json({ data: [] });
    else res.json({ data: newsletters });
});

router.get('/download-pdf', async (req, res) => {
    const file = __dirname + '/file.pdf';
    res.download(file);
});

router.get('/get-page', async (req, res) => {
    // read new.html html contents into a variable
    if (req.query.page === 'impact-update') {
        const html = fs.readFileSync('../client/public/newsletter/We are Doing the Best we Can.html', 'utf8');
        res.json({ data: html });
    } else if (req.query.page === 'new-school-kitchen') {
        const html = fs.readFileSync('../client/public/newsletter/New School Kitchen.html', 'utf8');
        res.json({ data: html });
    } else if (req.query.page === 'defeat-classroom-hunger') {
        const html = fs.readFileSync('../client/public/newsletter/Defeat Hunger in the Classroom.html', 'utf8');
        res.json({ data: html });
    } else if (req.query.page === 'school-meal-programme') {
        const html = `<h1 style="text-align: center;"><strong>School Meal Programme</strong></h1><p style="text-align: justify;">According to the National Human Development Report for Pakistan published in 2017 by the UNDP (United Nations Development Programme), Pakistan has the largest population of young people ever recorded in its history. A whopping 64% are under the age of 29, with some 30% between the ages of 15 and 29. For at least the next three decades, Pakistan will continue to be a younger country. This youth bulge, while fraught with challenges, also presents us with a unique opportunity to bring about phenomenal progress in the country. Their ideas and energy can lead the way for social, economic and political progress. However, this opportunity comes with a heightened responsibility of developing this youth to become that powerful force which can bring transformational development to the country. The challenges in capitalizing this opportunity are, conservatively speaking, more than a few, with education and training of the youth sitting at the top.</p>`
        res.json({ data: html });
    } else res.json({ data: '<div></div>' })
});

router.post('/add', async (req, res) => {
    // const newsletters = await newsletterController.getAll();
    // if (!newsletters) res.json({data: []});
    // else res.json({data: newsletters});
    fs.writeFile(`../client/public/newsletter/${req.body.title}.html`, req.body.html, function (err) {
        if (err) {
            res.json({ upload: false })
            return console.log(err);
        }
        res.json({ upload: true })
    });
    // res.json({data: req.body});
});

router.post('/submit-form', async (req, res) => {
    // create reusable transporter object using the default SMTP transport
    // res.json({data:"works"});
    console.log(req.body);
    const { firstName, lastName, email } = req.body;
    let transporter = nodemailer.createTransport({
        host: "mail.fefpakistan.org",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "no-reply@fefpakistan.org", 
            pass: "qfx^S0sUIv;G", 
        },

    });
    console.log(transporter);
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'no-reply@fefpakistan.org', // sender address
        to: "khubaibmaster21@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    console.log(info)
    res.json({ firstName: firstName, lastName: lastName, email: email, body: req.body });
}
)
router.get('/getImages', async (req, res) => {
    const images = await imageController.getAll();
    let lst = {};
    const categories = new Set()
    images.forEach(img => {
        console.log(img.get({ plain: 1 }));
        let img_data = img.get({ plain: 1 });
        let category = img_data["imageCategory"]["name"];
        if (lst[category] == undefined) {
            lst[category] = []
        }
        categories.add(category);
        lst[category].push({ title: img_data["name"], value: `/images/${img_data["name"]}` })
    });
    console.log(lst);
    let newlst = []
    for (const category in lst) {
        newlst.push({ title: category, menu: lst[category] })
    }
    newlst.sort(function (a, b) {
        a["title"] > b["title"]
    })
    // console.log(newlst)
    res.json(newlst);
    // if (!images) res.json({data: []});
    // else res.json({data: images});
});

// router.post('/addimages', upload.single('file'), async (req, res) => {
//     const file = req.file;
//     // if (!file) {http://localhost:3001/api/newsletter/getImages
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
    res.json({ location: `/newsletterImages/${file.originalname}` });
});


module.exports = router;
