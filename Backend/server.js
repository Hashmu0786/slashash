const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());


// Define routes
// app.use('/search', require('./routes/search'));
app.use('/favorites', require('./routes/favorites'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
