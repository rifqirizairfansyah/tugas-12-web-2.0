const courseService = require("../services/courseService");
const { requestResponse, requiredRequest } = require("../utils");

let response;

const getCourseCategories = async (req, res) => {
    try {
        const course = await courseService.getCourse();
        response = { ...course };
    } catch (error) {
        response = { ...requestResponse.server_error };
    }

    res.status(response.code).json(response);
};

const getCourseCategoriesById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await courseService.getCourseById(id);
        response = { ...course };
    } catch (error) {
        response = { ...requestResponse.server_error };
    }

    res.status(response.code).json(response);
};

const getCourseByCategoryId = async (req, res) => {
    try {
        const { categories_id, course_id} = req.params;
        console.log(categories_id, course_id)
        const course = await courseService.getCourseByCategoryId({ categories_id, course_id });
        response = { ...course };
    } catch (error) {
        response = { ...requestResponse.server_error };
    }

    res.status(response.code).json(response);
};


module.exports = {
    getCourseCategories,
    getCourseCategoriesById,
    getCourseByCategoryId
};
