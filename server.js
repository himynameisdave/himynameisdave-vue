const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
app.use('/', express.static(path.resolve(process.cwd(), './dist')));
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`); // eslint-disable-line no-console
});
