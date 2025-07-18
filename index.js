const express = require('express');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/admin_routes');
const userRoutes = require('./routes/user_routes');

dotenv.config();

const app = express();
app.use(express.json());



 app.use('/admin', adminRoutes);
 app.use('/user', userRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
