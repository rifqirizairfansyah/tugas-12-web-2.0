const db = require("../database/mysql").connection;
const { requestResponse } = require("../utils");

let response;

const getCourse = async () => {
  const course = await db.query('SELECT * FROM course').catch(err => {throw err}); 
  return { ...requestResponse.success, data: course };
}


const getCourseById = async (id) => {
  const sql = "SELECT * FROM course WHERE id=" + id
  const course = await db.query(sql).catch(err => {throw err}); 

  return { ...requestResponse.success, data: course };
}

const getCourseByCategoryId = async (data) => {
  const sql = "SELECT course.id, course.name, course.execprt, course.learn_summary, course.requiment, course.description, course.created_at, course.update_at, categories.name FROM course INNER JOIN categories_course ON course.id = categories_course.course_id INNER JOIN categories ON categories_course.category_id = categories.id WHERE categories.id = " + data.categories_id + " AND course.id = " +  data.course_id;
  const course = await db.query(sql).catch(err => {throw err});

  return { ...requestResponse.success, data: course };
}


module.exports = {
    getCourse,
    getCourseById,
    getCourseByCategoryId
  }