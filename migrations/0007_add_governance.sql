CREATE TABLE IF NOT EXISTS governance_bodies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  body_name TEXT NOT NULL,
  mandate_start INTEGER NOT NULL,
  mandate_end INTEGER NOT NULL,
  is_current INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS governance_members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  body_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  FOREIGN KEY(body_id) REFERENCES governance_bodies(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS board_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  year_start INTEGER NOT NULL,
  year_end INTEGER,
  president TEXT NOT NULL,
  notes TEXT,
  sort_order INTEGER DEFAULT 0
);
