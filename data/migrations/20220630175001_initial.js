exports.up = function(knex) {
    knex.schema.createTable('user', (table) => {
        table.uuid('id').primary().unique().notNullable()
        table.text('username').unique().notNullable()
        table.text('password').notNullable()
        table.text('email').unique().notNullable()
    })

    knex.schema.createTable('colorway', (table) => {
        table.uuid('id').primary().unique()
        table.text('name').notNullable()
        table.text('image_path')
    })

    knex.schema.createTable('fiber', (table) => {
        table.uuid('id').primary().unique().notNullable()
        table.text('name').unique().notNullable()
    })

    knex.schema.createTable('yarntype', (table) => {
        table.uuid('id').primary().unique().notNullable()
        table.text('name').notNullable()
        table.text('brand')
        table.integer('yards')
        table.integer('meters')
        table.integer('grams')
        table.integer('ounces')
        table.text('cyc_weight_category')
        table.text('notes')
    })

    knex.schema.createTable('yarntype_fiber', (table) => {
        table.uuid('id').primary().unique().notNullable()
        table.uuid('fiber_id').references('id').inTable('fiber').notNullable()
        table.uuid('yarntype_id').references('id').inTable('yarntype').notNullable()
        table.decimal('percentage')
    })

    knex.schema.createTable('colorway_yarntype', (table) => {
        table.uuid('id').primary().unique().notNullable()
        table.uuid('colorway_id').references('id').inTable('colorway').unique().notNullable()
        table.uuid('yarntype_id').references('id').inTable('yarntype').notNullable()
    })

    knex.schema.createTable('skein', (table) => {
        table.uuid('id').primary().unique().notNullable()
        table.uuid('user_id').references('id').inTable('user').notNullable()
        table.uuid('colorway_yarntype_id').references('id').inTable('colorway_yarntype').unique().notNullable()
        table.decimal('quantity').notNullable()
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('skein')
    knex.schema.dropTableIfExists('colorway_yarntype')
    knex.schema.dropTableIfExists('yarntype_fiber')
    knex.schema.dropTableIfExists('yarntype')
    knex.schema.dropTableIfExists('fiber')
    knex.schema.dropTableIfExists('colorway')
    knex.schema.dropTableIfExists('user')
};
