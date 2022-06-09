var express = require('express')
var router = express.Router()

var CourseController = require('../controller/courseController')

router.get('/course', CourseController.getCourseCategories)
router.get('/course/:id', CourseController.getCourseCategoriesById)
router.get('/course/:categories_id/:course_id', CourseController.getCourseByCategoryId)

module.exports = router