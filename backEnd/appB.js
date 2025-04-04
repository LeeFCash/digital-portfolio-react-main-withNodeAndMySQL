const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const fs = require('fs');
const ini = require('ini');
const path = require('path');

const myCnfPath = path.join(process.env.HOME, '.my.cnf');
const config = ini.parse(fs.readFileSync(myCnfPath, 'utf-8'));

// Middleware
const app = express();
app.use(cors());

// MySQL connection
const dbConfig = {
  host: config.client.host || 'localhost',
  user: config.client.user,
  password: config.client.password || '',
  database: 'pInfo',
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// API endpoint to fetch data
app.get('/data', (req, res) => {
  const query = `
    SELECT 
      LeeCashInfo.id, 
      first_name, 
      last_name, 
      date_of_birth, 
      education, 
      GROUP_CONCAT(DISTINCT lee_cash_skills ORDER BY lee_cash_skills ASC) AS lee_cash_skills,
      GROUP_CONCAT(DISTINCT link_to_blog ORDER BY blog_id ASC) AS link_to_blog,
      GROUP_CONCAT(DISTINCT CONCAT(blog_id, ': ', link_to_blog) ORDER BY blog_id ASC) AS blogs 
    FROM 
      LeeCashInfo 
    LEFT JOIN 
      LeeCashSkillsInfo ON LeeCashInfo.id = LeeCashSkillsInfo.id 
    LEFT JOIN 
      LeeCashBlogInfo ON LeeCashInfo.id = LeeCashBlogInfo.id 
    GROUP BY 
      LeeCashInfo.id, first_name, last_name, date_of_birth, education;
  `;
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(3308, () => {
  console.log(`Server running on http://localhost:3307`);
});
