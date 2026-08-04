/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — meno odosielateľa
  - `email` (text, not null) — e-mail odosielateľa
  - `service` (text, not null) — typ služby (IT podpora / Webová stránka / Automatizácia / Webová aplikácia / Iné)
  - `message` (text, not null) — text správy
  - `gdpr_consent` (boolean, not null, default false) — súhlas so spracovaním osobných údajov
  - `newsletter_consent` (boolean, default false) — súhlas s marketingovými cookies/komunikáciou
  - `submitted_at` (timestamptz, default now()) — čas odoslania
  - `expires_at` (timestamptz) — dátum automatického vymazania (12 mesiacov od odoslania)
2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (no SELECT/UPDATE/DELETE z verejnosti) — formulár môže len zapisovať.
- Žiadny SELECT pre anon — dáta sú prístupné len cez service role (edge function / admin).
3. Notes
- Údaje sa uchovávajú max 12 mesiacov (expires_at = submitted_at + 12 months).
- Len INSERT policy pre anon, aby sa predišlo úniku dát iných ľudí.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  gdpr_consent boolean NOT NULL DEFAULT false,
  newsletter_consent boolean NOT NULL DEFAULT false,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz NOT NULL DEFAULT (now() + interval '12 months')
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Len INSERT pre anon + authenticated (formulár zapisuje, nečíta)
DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Žiadny SELECT/UPDATE/DELETE pre anon — dáta chránené, prístup len cez service role
