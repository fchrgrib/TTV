CREATE TABLE IF NOT EXISTS ttv (
  id INT NOT NULL AUTO_INCREMENT,
  nama VARCHAR(255) NOT NULL,
  tekanan_darah VARCHAR(255) NOT NULL,
  denyut_nadi VARCHAR(255) NOT NULL,
  laju_nafas VARCHAR(255) NOT NULL,
  suhu_tubuh VARCHAR(255) NOT NULL,
  berat_badan VARCHAR(255) NOT NULL,
  tinggi_badan VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
