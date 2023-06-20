--test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE,
--email VARCHAR(100) olan bir tablo oluşturalım.

CREATE TABLE employee (
	id SERIAL,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
);


--Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.

insert into employee (id, name, birthday, email) values (1, 'Tallie', '1966-04-25', 'tschruyer0@163.com');
insert into employee (id, name, birthday, email) values (2, 'Patrice', '1923-05-31', 'ppurnell1@google.com.au');
insert into employee (id, name, birthday, email) values (3, 'Merrile', '1940-11-17', 'mamsberger2@google.ca');
insert into employee (id, name, birthday, email) values (4, 'Celinda', null, 'ccoppeard3@bloglines.com');
insert into employee (id, name, birthday, email) values (5, 'Beitris', '1971-06-26', 'bbranwhite4@home.pl');
insert into employee (id, name, birthday, email) values (6, 'Titos', '1928-02-06', 'trushford5@princeton.edu');
insert into employee (id, name, birthday, email) values (7, 'Homere', '1927-02-27', 'hsnead6@google.com.br');
insert into employee (id, name, birthday, email) values (8, 'Stephie', '1922-01-25', 'sklees7@upenn.edu');
insert into employee (id, name, birthday, email) values (9, 'Dukie', null, 'dscutchings8@gravatar.com');
insert into employee (id, name, birthday, email) values (10, 'Cleve', '1984-01-02', 'cechalier9@nyu.edu');
insert into employee (id, name, birthday, email) values (11, 'Alick', null, 'amcmeanmaa@buzzfeed.com');
insert into employee (id, name, birthday, email) values (12, 'Maegan', '1960-07-28', 'mdumkeb@reddit.com');
insert into employee (id, name, birthday, email) values (13, 'Ibby', '1947-01-02', null);
insert into employee (id, name, birthday, email) values (14, 'Dayle', null, 'ddowntond@is.gd');
insert into employee (id, name, birthday, email) values (15, 'Yorke', '1957-01-13', 'ymisselbrooke@mac.com');
insert into employee (id, name, birthday, email) values (16, 'Horatia', '1922-03-14', 'hspriggingf@theglobeandmail.com');
insert into employee (id, name, birthday, email) values (17, 'Elka', '1925-12-03', 'ehendrikseng@economist.com');
insert into employee (id, name, birthday, email) values (18, 'Nicolea', null, 'ngockelenh@google.ca');
insert into employee (id, name, birthday, email) values (19, 'Dean', '1946-09-14', 'dsquiresi@ox.ac.uk');
insert into employee (id, name, birthday, email) values (20, 'Bibby', null, 'bbellingerj@go.com');
insert into employee (id, name, birthday, email) values (21, 'Fernandina', null, 'fwilmorek@stumbleupon.com');
insert into employee (id, name, birthday, email) values (22, 'Barnie', null, 'bhassonl@etsy.com');
insert into employee (id, name, birthday, email) values (23, 'Heinrik', '1930-02-23', 'hbagottm@odnoklassniki.ru');
insert into employee (id, name, birthday, email) values (24, 'Karalee', '1974-03-21', 'kmosdelln@friendfeed.com');
insert into employee (id, name, birthday, email) values (25, 'Welby', null, 'wfranklingo@myspace.com');
insert into employee (id, name, birthday, email) values (26, 'Allin', null, 'ayop@ox.ac.uk');
insert into employee (id, name, birthday, email) values (27, 'Daune', '1942-07-21', 'drubanenkoq@about.me');
insert into employee (id, name, birthday, email) values (28, 'Dynah', null, 'dburwinr@nifty.com');
insert into employee (id, name, birthday, email) values (29, 'Mitchael', '1959-10-21', 'mcadles@patch.com');
insert into employee (id, name, birthday, email) values (30, 'Gretchen', '1985-06-16', 'gluckint@twitter.com');
insert into employee (id, name, birthday, email) values (31, 'Bucky', '1958-05-29', 'bvizardu@columbia.edu');
insert into employee (id, name, birthday, email) values (32, 'Austin', null, 'awytchardv@1688.com');
insert into employee (id, name, birthday, email) values (33, 'Conan', null, 'cocorranew@netlog.com');
insert into employee (id, name, birthday, email) values (34, 'Bogart', null, null);
insert into employee (id, name, birthday, email) values (35, 'Brooks', '1970-04-18', 'btuminelliy@taobao.com');
insert into employee (id, name, birthday, email) values (36, 'Zarah', null, null);
insert into employee (id, name, birthday, email) values (37, 'Debera', null, 'dshiels10@noaa.gov');
insert into employee (id, name, birthday, email) values (38, 'Gale', '1978-07-27', 'gkilgrove11@geocities.jp');
insert into employee (id, name, birthday, email) values (39, 'Grant', '1939-12-22', 'gdomleo12@facebook.com');
insert into employee (id, name, birthday, email) values (40, 'Barret', '1959-02-14', 'bmorshead13@blogtalkradio.com');
insert into employee (id, name, birthday, email) values (41, 'Jenn', '1967-10-08', 'jhasley14@ibm.com');
insert into employee (id, name, birthday, email) values (42, 'Olympie', '1923-07-02', 'oarnot15@indiatimes.com');
insert into employee (id, name, birthday, email) values (43, 'Allyn', null, 'akellog16@epa.gov');
insert into employee (id, name, birthday, email) values (44, 'Matias', '1941-08-12', 'mjobson17@elegantthemes.com');
insert into employee (id, name, birthday, email) values (45, 'Arte', '1985-09-07', 'aiannini18@hp.com');
insert into employee (id, name, birthday, email) values (46, 'Janela', '1927-12-07', 'jreimers19@booking.com');
insert into employee (id, name, birthday, email) values (47, 'Carmelle', null, 'csendall1a@slashdot.org');
insert into employee (id, name, birthday, email) values (48, 'Leonora', '1971-11-04', 'lharrowsmith1b@weebly.com');
insert into employee (id, name, birthday, email) values (49, 'Patsy', null, 'pmacphaden1c@state.tx.us');
insert into employee (id, name, birthday, email) values (50, 'Isadore', '1968-08-02', 'ithaim1d@ask.com');


--Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.

UPDATE employee
SET name = 'mehmet',
	birthday = '1998-08-28',
	email = 'eminbuyuksar@gmail.com'
WHERE name ILIKE 'm%';	


--Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

DELETE FROM employee
WHERE name = 'mehmet'
RETURNING *;