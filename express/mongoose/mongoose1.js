const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/example', { useNewUrlParser: true });

mongoose.connect(uri, opts).then(() => { console.log("Yay") }, (err) => { console.log("Boo!"); });
