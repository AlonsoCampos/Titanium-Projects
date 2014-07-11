exports.definition = {
	config: {
		columns: {
			id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
			name: 'TEXT',
		},
		adapter: {
			type: 'sql',
			db_name: 'users',
			collection_name: 'users',
			idAttribute: 'id'
		}
	}
};