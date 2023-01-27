use crate::schema::varieties::{self, all_columns};
use chrono::{DateTime, Utc};
use diesel::{AsChangeset, Identifiable, QueryDsl, QueryResult, Queryable, RunQueryDsl};

use crate::config::db::Connection;

use super::dto::variety_dto::VarietyDTO;

#[derive(Identifiable, Queryable, AsChangeset)]
#[diesel(table_name = varieties)]
pub struct Variety {
    pub id: i32,
    pub tags: Vec<Option<String>>,
    pub species: String,
    pub variety: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl Variety {
    pub fn find_all(conn: &mut Connection) -> QueryResult<Vec<VarietyDTO>> {
        let query_result = varieties::table.select(all_columns).load::<Variety>(conn);
        return query_result.map(|v| v.into_iter().map(|v| v.into()).collect());
    }
}
