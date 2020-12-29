const { db } = require('../config/database')

exports.index = async (req, res) => {
  try {
    const response = await db.query('SELECT * FROM categories', {
      type: db.QueryTypes.SELECT
    })

    res.json(response)
  } catch (error) {
    console.log(error)
  }
}

exports.store = async (req, res) => {
  try {
    const { body } = req

    const response = await db.query(
      'INSERT INTO categories (name, description) VALUES (:name, :description)',
      {
        type: db.QueryTypes.INSERT,
        replacements: {
          name: body.name,
          description: body.description
        }
      }
    )

    res.json(response)
  } catch (error) {
    console.log(error)
  }
}

exports.show = async (req, res) => {
  try {
    const { params } = req

    const response = await db.query('SELECT * FROM categories WHERE id = :id', {
      type: db.QueryTypes.SELECT,
      replacements: {
        id: params.id
      }
    })

    res.json(response)
  } catch (error) {
    console.log(error)
  }
}

exports.update = async (req, res) => {
  try {
    const { params } = req
    const { body } = req

    const response = await db.query(
      'UPDATE categories SET name = :name, description = :description WHERE id = :id',
      {
        type: db.QueryTypes.UPDATE,
        replacements: {
          id: params.id,
          name: body.name,
          description: body.description
        }
      }
    )

    res.json(response)
  } catch (error) {
    console.log(error)
  }
}

exports.delete = async (req, res) => {
  try {
    const { params } = req

    const response = await db.query('DELETE FROM categories WHERE id = :id', {
      type: db.QueryTypes.DELETE,
      replacements: {
        id: params.id
      }
    })

    res.json(response)
  } catch (error) {
    console.log(error)
  }
}
