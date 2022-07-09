const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT ||3000
const handlebars = require('express-handlebars');
const path = require('path');

// 
const methodOverride = require('method-Override')




//HTTP logger
app.use(morgan('combined'))

// lấy file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

//template engine
app.engine('hbs',handlebars.engine({
    extname : '.hbs',
    helpers : {
        // các function sử dụng
        // hàm sum dùng tính tổng 2 số 
        sum: (a,b) => (a+b),

    }
  }));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources','views'));



// post cần có
app.use(express.urlencoded({
  extended: true
})); 
app.use(express.json()); 


// thư viện update database
app.use(methodOverride('_method'))


    // khởi tạo tuyến đường
const route = require('./routes');
const { homedir } = require('os');
route(app);
// home, search, contact các file chung để vào file site


// app.get('/', (req, res) => {
//   res.render('home');
// })
// GET lấy dữ liệu đính lên url
// app.get('/search', (req, res) => {
//   // console.log(req.query.q);
//   res.render('search');
// })

// POST lấy dữ liệu nhưng không đính lên url
// app.post('/search', (req, res) => {
//   console.log(req.body.gender);
//   res.send('');
// })

// app.get('/news', (req, res) => {
//   // console.log(req.query.q);
//   res.render('news');
// })


const db = require('./config/db')
db.connect();
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})