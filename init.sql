create schema api;

------------------------------------------------------------
-- Table: ARTICLE
------------------------------------------------------------
CREATE TABLE api.ARTICLE(
	ART_ID          SERIAL NOT NULL ,
	ART_TITRE       VARCHAR (255) NOT NULL ,
	ART_THUMBNAIL   VARCHAR (255) NOT NULL ,
	ART_CONTENU     VARCHAR (2000)  NOT NULL ,
	ART_DATE        DATE  NOT NULL  ,
	CONSTRAINT ARTICLE_PK PRIMARY KEY (ART_ID)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: EVENEMENT
------------------------------------------------------------
CREATE TABLE api.EVENEMENT(
	EVE_ID            SERIAL NOT NULL ,
	EVE_DESCRIPTION   VARCHAR (255) NOT NULL ,
	EVE_DATE          DATE  NOT NULL  ,
	CONSTRAINT EVENEMENT_PK PRIMARY KEY (EVE_ID)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: GALLERIE
------------------------------------------------------------
CREATE TABLE api.GALLERIE(
	GAL_ID    SERIAL NOT NULL ,
	GAL_NOM   VARCHAR (255) NOT NULL  ,
	CONSTRAINT GALLERIE_PK PRIMARY KEY (GAL_ID)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: IMAGE
------------------------------------------------------------
CREATE TABLE api.IMAGE(
	IMA_ID            SERIAL NOT NULL ,
	IMA_DESCRIPTION   VARCHAR (255) NOT NULL ,
	GAL_ID            INT  NOT NULL  ,
	CONSTRAINT IMAGE_PK PRIMARY KEY (IMA_ID)

	,CONSTRAINT IMAGE_GALLERIE_FK FOREIGN KEY (GAL_ID) REFERENCES api.GALLERIE(GAL_ID)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: ADMIN
------------------------------------------------------------
CREATE TABLE api.ADMIN(
	ADM_ID         SERIAL NOT NULL ,
	ADM_LOGIN      VARCHAR (255) NOT NULL ,
	ADM_PASSWORD   VARCHAR (255) NOT NULL ,
	ADM_ROLE       VARCHAR (50) NOT NULL  ,
	CONSTRAINT ADMIN_PK PRIMARY KEY (ADM_ID)
)WITHOUT OIDS;

-- AUTHENTICATOR

create role authenticator noinherit login password 'mysecretpassword';

-- ANONYMOUS USERS

create role web_anon nologin;

grant usage on schema api to web_anon;

grant select on api.ARTICLE to web_anon;
grant select on api.EVENEMENT to web_anon;
grant select on api.GALLERIE to web_anon;
grant select on api.IMAGE to web_anon;

grant web_anon to authenticator;

-- ADMINISTATORS

create role administrator nologin;

grant usage on schema api to administrator;

grant ALL on api.ARTICLE to administrator;
grant ALL on api.EVENEMENT to administrator;
grant ALL on api.GALLERIE to administrator;
grant ALL on api.IMAGE to administrator;
grant ALL on api.ADMIN to administrator;

GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA api TO administrator;

grant administrator to authenticator;