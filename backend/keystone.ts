import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/react-dishes';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,
}