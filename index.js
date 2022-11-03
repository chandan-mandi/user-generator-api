const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5006;
const usersRoutes = require('./routes/v1/users.routes')

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/v1/user", usersRoutes);

app.all('*', (req, res) => {
    res.send("No Route Found!");
});

app.listen(port, () => {
    console.log('This app listening on port: ', port);
});

// UNHANDLE REJECTION ERROR HANDLER
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    })
});