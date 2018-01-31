SET NAMES UTF8;
DROP DATABASE IF EXISTS jd;
CREATE DATABASE jd CHARSET=UTF8;
USE jd;

#轮播--图
CREATE TABLE jd_nav(
  nid TINYINT PRIMARY KEY AUTO_INCREMENT,
  nimg VARCHAR(64)
);
INSERT INTO jd_nav VALUES(1,"img/timg1.jpg");
INSERT INTO jd_nav VALUES(2,"img/timg2.jpg");
INSERT INTO jd_nav VALUES(3,"img/timg3.jpg");
INSERT INTO jd_nav VALUES(4,"img/timg1.jpg");

#热门推荐--图
CREATE TABLE jd_hot(
  hid TINYINT PRIMARY KEY AUTO_INCREMENT,
  himg VARCHAR(64),
  hcity  VARCHAR(32),
  htittle  VARCHAR(64)
);
INSERT INTO jd_hot VALUES(1,"img/x1.jpg","青岛","昨夜西风凋碧树");
INSERT INTO jd_hot VALUES(2,"img/xz2.jpg","杭州","不知天上宫阙在西杭");
INSERT INTO jd_hot VALUES(3,"img/x (2).jpg","海南","沙滩十年踪迹十年心");
INSERT INTO jd_hot VALUES(4,"img/x3.jpg","北京","敢问天高吼九州");
INSERT INTO jd_hot VALUES(5,"img/xz3.jpg","长沙","山水有风天上来");
INSERT INTO jd_hot VALUES(6,"img/xz4.jpg","云南","又到旧时明月旧时情");

#酒店查询
CREATE TABLE jd_room(
  rid TINYINT PRIMARY KEY AUTO_INCREMENT,
  class VARCHAR(16),
  city  VARCHAR(16),
  position VARCHAR(16),
  rimg VARCHAR(64),
  intr VARCHAR(32),
  title VARCHAR(32),
  price VARCHAR(16)
);
INSERT INTO jd_room VALUES(1,"single","青岛","景区","img/timg5.jpg","空气清新，环境优雅","北京景区舒适型￥188起","158");
INSERT INTO jd_room VALUES(2,"single","海南","机场","img/timg6.jpg","特色文化，喜不胜收","海南机场舒适型￥1000起","1218");
INSERT INTO jd_room VALUES(3,"single","云南","行政区","img/timg7.jpg","清河流水，川流不息","云南行政区舒适型￥288起","238");
INSERT INTO jd_room VALUES(4,"single","杭州","景区","img/timg8.jpg","别有洞天，非凡间","杭州景区舒适型￥380起","386");
INSERT INTO jd_room VALUES(5,"single","云南","行政区","img/timg9.jpg","身未动，心已远","云南舒适型行政区￥280起","388");
INSERT INTO jd_room VALUES(6,"single","杭州","高铁站","img/timg10.jpg","梦想，就在前方","杭州高铁站舒适型￥280起","288");
INSERT INTO jd_room VALUES(7,"single","北京","行政区","img/timg11.jpg","白日依山尽","北京舒适型行政区￥480起","498");
INSERT INTO jd_room VALUES(8,"single","海南","商业中心","img/timg12.jpg","沂水一方","海南商业中心舒适型￥500起","568");
INSERT INTO jd_room VALUES(9,"single","长沙","商业中心","img/timg13.jpg","碧水东流至此回","长沙商业中心舒适型￥400起","588");
INSERT INTO jd_room VALUES(10,"single","云南","景区","img/timg14.jpg","柳暗花明又一村","云南景区舒适型￥600起","660");
INSERT INTO jd_room VALUES(11,"single","北京","行政区","img/timg15.jpg","春风花草香","北京行政区舒适型￥700起","778");
INSERT INTO jd_room VALUES(12,"single","云南","机场","img/timg16.jpg","江青月近人","云南机场舒适型￥700起","708");
INSERT INTO jd_room VALUES(13,"single","杭州","高铁站","img/timg17.jpg","花重锦官城","杭州高铁站舒适型￥900起","980");
INSERT INTO jd_room VALUES(15,"single","海南","商业中心","img/timg18.jpg","新雨晚秋","海南商业中心舒适型￥188起","188");
INSERT INTO jd_room VALUES(16,"single","北京","机场","img/timg19.jpg","展翅高飞一万里","北京机场舒适型￥288起","288");
INSERT INTO jd_room VALUES(17,"single","杭州","商业中心","img/timg20.jpg","闹中取静，回味无穷","杭州商业中心舒适型￥280起","288");
INSERT INTO jd_room VALUES(18,"single","海南","景区","img/timg21.jpg","万里江山万里城","海南景区舒适型￥188起","188");
INSERT INTO jd_room VALUES(19,"single","云南","商业中心","img/timg22.jpg","问此何处，是为九点","北京商业中心高端型￥8000起","9999");
INSERT INTO jd_room VALUES(20,"single","杭州","景区","img/timg23.jpg","西风凋碧树","杭州景区品位型￥5000起","6666");
INSERT INTO jd_room VALUES(21,"single","北京","商业中心","img/timg24.jpg","坐北朝南，坐看风云","北京商业中心豪华型￥50000起","58000");


#会员注册
CREATE TABLE jd_member(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(16),
  upwd VARCHAR(64),
  phnone VARCHAR(11),
  eamile VARCHAR(32),
  headerimg VARCHAR(32),
  money INT
);
INSERT INTO jd_member VALUES(1,"小冬瓜","123456","18569557795","555@qq.com","img/201612151014039016.jpg",100000);
INSERT INTO jd_member VALUES(2,"小西瓜","123456","18569557795","555@qq.com","img/201612151014039016.jpg",100000);
INSERT INTO jd_member VALUES(3,"小南瓜","123456","18569557795","555@qq.com","img/201612151014039016.jpg",100000);
INSERT INTO jd_member VALUES(4,"小北瓜","123456","18569557795","555@qq.com","img/201612151014039016.jpg",100000);