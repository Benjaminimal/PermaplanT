use chrono::{DateTime, NaiveDate, Utc};
use serde::{Deserialize, Serialize};
use typeshare::typeshare;

use crate::models::{
    r#enum::{quality::Quality, quantity::Quantity, tag::Tag},
    seed::Seed,
};

#[typeshare]
#[derive(Serialize, Deserialize)]
pub struct SeedDTO {
    pub id: i32,
    pub name: String,
    pub variety_id: i32,
    pub harvest_year: i16,
    pub quantity: Quantity,
    pub tags: Option<Vec<Option<Tag>>>,
    pub use_by: Option<NaiveDate>,
    pub origin: Option<String>,
    pub taste: Option<String>,
    pub yield_: Option<String>,
    pub generation: Option<i16>,
    pub quality: Option<Quality>,
    pub price: Option<i16>,
    pub notes: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl From<Seed> for SeedDTO {
    fn from(seed: Seed) -> Self {
        SeedDTO {
            id: seed.id,
            name: seed.name,
            variety_id: seed.variety_id,
            harvest_year: seed.harvest_year,
            quantity: seed.quantity,
            tags: seed.tags,
            use_by: seed.use_by,
            origin: seed.origin,
            taste: seed.taste,
            yield_: seed.yield_,
            generation: seed.generation,
            quality: seed.quality,
            price: seed.price,
            notes: seed.notes,
            created_at: seed.created_at,
            updated_at: seed.updated_at,
        }
    }
}
