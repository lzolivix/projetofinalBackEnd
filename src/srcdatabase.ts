import { Pool } from 'pg';


const connectionString = 'sua_string_de_conexao_do_render_aqui';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, 
  }
});

export default pool;