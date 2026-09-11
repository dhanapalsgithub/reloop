import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'reloop',      // உங்கள் டேட்டாபேஸ் பெயர்
  password: 'dhana@123',   // உங்கள் போஸ்ட்கிரீஸ் பாஸ்வேர்ட்
  port: 5432,
});

export default pool;