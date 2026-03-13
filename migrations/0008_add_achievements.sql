CREATE TABLE IF NOT EXISTS achievements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sport_id INTEGER,
  title TEXT NOT NULL,
  description TEXT,
  year INTEGER,
  category TEXT,
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(sport_id) REFERENCES sports(id) ON DELETE SET NULL
);
