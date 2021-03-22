# Person
REPLACE INTO person (id,mail, phone, picture, linkedin, website, github, twitter, bio, city, firstname, lastname, createdAt, updatedAt)
VALUES (1,'jules.laurent@outlook.com','+33625309652','https://placehold.it/500x500','jules.laurent','https://www.juleslaurent.fr','julesaaelio','julesaaelio',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem arcu, accumsan ut mi a, porttitor scelerisque ante. Vestibulum feugiat massa id diam sagittis dignissim.',
        'LYON','jules','laurent',now(),now());


#Resume
REPLACE INTO resume(id,name, title, headline, download, createdAt, updatedAt, PersonId)
VALUES (1,'RESUME 1','TITLE OF RESUME 1','HEADLINE OF RESUME 1','https://placehold.it/500x500',now(),now(),1);

#Experience
REPLACE INTO experience(id, begin_date, end_date, job_label, company, details, link, image, createdAt, updatedAt)
VALUES (1,'2020-01-01','2020-07-01','Développeur informatique','La petite ESN', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem arcu, accumsan ut mi a, porttitor scelerisque ante. Vestibulum feugiat massa id diam sagittis dignissim.',
       'https://google.fr','http://placehold.it/500x500',now(),now()),
       (2,'2020-01-01','2020-01-31','Développeur informatique','La grosse ESN', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem arcu, accumsan ut mi a, porttitor scelerisque ante. Vestibulum feugiat massa id diam sagittis dignissim.',
        'https://google.fr','http://placehold.it/500x500',now(),now());

REPLACE INTO resume_experience(createdAt, updatedAt, ExperienceId, ResumeId) VALUES
(now(),now(), 1,1),(now(),now(),2,1);

#Education
REPLACE INTO education (id,begin_date, end_date, degree, school, place, details, result, link, image, createdAt, updatedAt)
VALUES (1,'2015-01-01','2017-01-01','DIPLOME HYPER COOOL MAIS LONG','Lycée tointoin','Lyon','Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem arcu, accumsan ut mi a, porttitor scelerisque ante. Vestibulum feugiat massa id diam sagittis dignissim',
        'OBTENU','https://www.ynov.com','https://placehold.it/500x500',now(),now()),
       (2,'2016-01-01','2021-01-01','DIPLOME HYPER COOOL MAIS LONG','Lyon Ynov Campus','Lyon','Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem arcu, accumsan ut mi a, porttitor scelerisque ante. Vestibulum feugiat massa id diam sagittis dignissim',
        'ADMIS MENTION TRES BIEN','https://www.ynov.com','https://placehold.it/500x500',now(),now());

REPLACE INTO resume_education(createdAt, updatedAt, EducationId, ResumeId) VALUES
(now(),now(), 1,1),(now(),now(),2,1);

# Skills category
REPLACE INTO skill_category(id, name, description, createdAt, updatedAt) VALUES
(1, 'Soft skills', 'Soft skills are the best',now(),now()),(2, 'Hard skills','Nerd skills',now(),now());


#Skills
REPLACE INTO skill(id, name, description, createdAt, updatedAt, SkillCategoryId) VALUES
(1,'Amazingness','I can be amazing',now(),now(),1),
(2,'Softness','I can be amazing',now(),now(),1),
(3,'Love','I can be amazing',now(),now(),1),
(4,'Problem solving','I can be amazing',now(),now(),1),
(5,'Office','I can use the Office Pack',now(),now(),2),
(6,'Website development','I can develop websites',now(),now(),2),
(7,'Database','I can use all the database tools',now(),now(),2);

REPLACE INTO resume_skill(createdAt, updatedAt, SkillId, ResumeId) VALUES
(now(),now(), 1,1),
(now(),now(), 2,1),
(now(),now(), 3,1),
(now(),now(), 4,1),
(now(),now(), 5,1),
(now(),now(),6,1);

# Realisations
REPLACE INTO realisation(id, title, sample, content, illustration, link, createdAt, updatedAt)
VALUES (1, 'Super site web', 'Lorem ipsum dolor sit amet','Lorem ipsum dolot sit amet', 'http://placehold.it/500x500','http://twittet.com',now(),now());

REPLACE INTO realisation_skill(createdAt, updatedAt, RealisationId, SkillId)
VALUES (now(),now(),1,6);
