'use strict'
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const { BlogPost, BlogCategory } = require('../models/blog')

// BLOG CATEGORY SHOULD BE DONE

/* ------------------------------------------------------- */
// blogCategory controllers
module.exports.blogCategory = {
    list: async (req, res) => {

    },
    create: async (req, res) => {

        const result = await BlogCategory.create(req.body)

        res.status(201).send({
            error: false,
            result
        })

    },
    read: async (req, res) => {

    },
    update: async (req, res) => {

    },
    delete: async (req, res) => {

    },
}

/* ------------------------------------------------------- */
// blogPost controllers
module.exports.blogPost = {

}