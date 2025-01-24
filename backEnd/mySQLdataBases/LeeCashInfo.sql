DROP DATABASE IF EXISTS pInfo;
CREATE DATABASE pInfo;
USE pInfo;
CREATE TABLE LeeCashInfo (
id INT PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
date_of_birth DATE,
education VARCHAR(50)
);
CREATE TABLE LeeCashSkillsInfo (
id INT,
lee_cash_skills VARCHAR(50),
FOREIGN KEY (id) REFERENCES LeeCashInfo(id) ON DELETE CASCADE
);
CREATE TABLE LeeCashBlogInfo (
id INT,
blog_id VARCHAR(50),
link_to_blog VARCHAR(255),
FOREIGN KEY (id) REFERENCES LeeCashInfo(id) ON DELETE CASCADE
);
INSERT INTO LeeCashInfo VALUES(
1,
"Lee",
" Cash",
"2004-07-26",
"High school Diploma"
);
INSERT INTO LeeCashBlogInfo (id, blog_id, link_to_blog) VALUES
(1, 'blog8', 'https://youtu.be/gG2aYsNgx88?si=PaKMnsNRQQ3qHG8f'),
(1, 'blog7', 'https://youtu.be/H8eIcx-YAtE?si=BrL7t0uukwtAA6PR'),
(1, 'blog6', 'https://youtu.be/L2SW84Q7L2I?si=4H3hfV1qTwPzlEmi'),
(1, 'blog5', 'https://youtu.be/s7Ih4r3CFsE?si=4pxEeuve15IUIEXJ'),
(1, 'blog4', 'https://youtu.be/ryfU13Vkmls?si=NZ-43wWE_-l__Buk'),
(1, 'blog3', 'https://youtu.be/_WRFMGZHrGs?si=pbDky5_15M7e_-zZ'),
(1, 'blog2', 'https://youtu.be/bSdCY3ay8Qk?si=qaWul1NhYZoThcEC'),
(1, 'blog1', 'https://youtu.be/r-h2IPPMpBo?si=ve_G_GOLVm1CXINw');
INSERT INTO LeeCashSkillsInfo (id, lee_cash_skills) VALUES
(1, 'HTML'),
(1, 'JavaScript'),
(1, 'CSS'),
(1, 'React'),
(1, 'MySQL'),
(1, 'node js(express)');
/*SELECT 
    LeeCashInfo.id,
    first_name,
    last_name,
    date_of_birth,
    education,
    GROUP_CONCAT(DISTINCT lee_cash_skills ORDER BY lee_cash_skills ASC) AS lee_cash_skills,
    GROUP_CONCAT(DISTINCT CONCAT(blog_id, ': ', link_to_blog) ORDER BY blog_id ASC) AS blogs
FROM 
    LeeCashInfo
LEFT JOIN 
    LeeCashSkillsInfo ON LeeCashInfo.id = LeeCashSkillsInfo.id
LEFT JOIN 
    LeeCashBlogInfo ON LeeCashInfo.id = LeeCashBlogInfo.id
GROUP BY
    LeeCashInfo.id, first_name, last_name, date_of_birth, education;*/

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

-- SELECT LeeCashInfo.id, first_name, last_name, date_of_birth, education, GROUP_CONCAT(DISTINCT lee_cash_skills ORDER BY lee_cash_skills ASC) AS lee_cash_skills, GROUP_CONCAT(DISTINCT CONCAT(blog_id, ': ', link_to_blog) ORDER BY blog_id ASC) AS blogs FROM LeeCashInfo LEFT JOIN LeeCashSkillsInfo ON LeeCashInfo.id = LeeCashSkillsInfo.id LEFT JOIN LeeCashBlogInfo ON LeeCashInfo.id = LeeCashBlogInfo.id GROUP BY LeeCashInfo.id, first_name, last_name, date_of_birth, education;

-- SELECT first_name FROM LeeCashInfo;
-- SELECT LeeCashInfo.id, first_name, last_name, date_of_birth, education, lee_cash_skills FROM LeeCashInfo JOIN LeeCashSkillsInfo ON LeeCashInfo.id = LeeCashSkillsInfo.id;
-- SELECT LeeCashInfo.id, first_name, last_name, date_of_birth, education, lee_cash_skills, blog_id, link_to_blog FROM LeeCashInfo JOIN LeeCashSkillsInfo ON LeeCashInfo.id = LeeCashSkillsInfo.id JOIN LeeCashBlogInfo ON LeeCashInfo.id = LeeCashBlogInfo.id;