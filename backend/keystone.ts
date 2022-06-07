
// import 'dotenv';
import dotenv from 'dotenv'
dotenv.config();

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/react-dishes';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,
    // secret: process.env.COOKIE_SECRET
}