// migration files must be async for them to work properly

exports.up = async function(knex) {
    await knex.schema.createTable('user', (table) => {
        table.uuid('id').primary().unique().notNullable()
        table.text('username').unique().notNullable()
        table.text('password').notNullable()
        table.text('email').unique().notNullable()
    })

    await knex.schema.createTable('colorway', (table) => {
        table.uuid('id').primary().unique()
        table.text('name').notNullable()
        table.text('image_path')
    })

    await knex.schema.createTable('fiber', (table) => {
        table.uuid('id').primary().unique().notNullable()
        table.text('name').unique().notNullable()
    })

    await knex.schema.createTable('yarntype', (table) => {
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

    await knex.schema.createTable('yarntype_fiber', (table) => {
        table.uuid('id').primary().unique().notNullable()
        table.uuid('fiber_id').references('id').inTable('fiber').notNullable()
        table.uuid('yarntype_id').references('id').inTable('yarntype').notNullable()
        table.decimal('percentage')
    })

    await knex.schema.createTable('colorway_yarntype', (table) => {
        table.uuid('id').primary().unique().notNullable()
        table.uuid('colorway_id').references('id').inTable('colorway').unique().notNullable()
        table.uuid('yarntype_id').references('id').inTable('yarntype').notNullable()
    })

    await knex.schema.createTable('skein', (table) => {
        table.uuid('id').primary().unique().notNullable()
        table.uuid('user_id').references('id').inTable('user').notNullable()
        table.uuid('colorway_yarntype_id').references('id').inTable('colorway_yarntype').unique().notNullable()
        table.decimal('quantity').notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('skein')
    await knex.schema.dropTableIfExists('colorway_yarntype')
    await knex.schema.dropTableIfExists('yarntype_fiber')
    await knex.schema.dropTableIfExists('yarntype')
    await knex.schema.dropTableIfExists('fiber')
    await knex.schema.dropTableIfExists('colorway')
    await knex.schema.dropTableIfExists('user')
};
