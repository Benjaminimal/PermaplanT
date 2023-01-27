CREATE OR REPLACE FUNCTION update_timestamp_column()
RETURNS TRIGGER AS $$
BEGIN
   IF row(NEW.*) IS DISTINCT FROM row(OLD.*) THEN
      NEW.updated_at = now(); 
      RETURN NEW;
   ELSE
      RETURN OLD;
   END IF;
END;
$$ language 'plpgsql';

-- Create the trigger to update the updated_at column
CREATE TRIGGER set_updated_at_seeds BEFORE UPDATE ON seeds FOR EACH ROW EXECUTE PROCEDURE update_timestamp_column();
CREATE TRIGGER set_updated_at_varieties BEFORE UPDATE ON varieties FOR EACH ROW EXECUTE PROCEDURE update_timestamp_column();
