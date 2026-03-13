CREATE TABLE IF NOT EXISTS sports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  location TEXT,
  image_url TEXT,
  color TEXT DEFAULT 'green',
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS training_groups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sport_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  age_range TEXT,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  FOREIGN KEY(sport_id) REFERENCES sports(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS training_schedules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  group_id INTEGER NOT NULL,
  day_of_week TEXT NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  location TEXT,
  coach TEXT,
  FOREIGN KEY(group_id) REFERENCES training_groups(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS sport_staff (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sport_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  FOREIGN KEY(sport_id) REFERENCES sports(id) ON DELETE CASCADE
);

ALTER TABLE members ADD COLUMN sport_ids TEXT;
