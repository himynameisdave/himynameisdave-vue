const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();
app.use('/', express.static('./dist'));
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`); // eslint-disable-line no-console
});
