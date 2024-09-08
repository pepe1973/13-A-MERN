/*
 * A Main route get-művelete.
 * Minden elem lekérése.
 */
const mainGet = (req, res) => {
    try {
        res.status(200).render('index');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { mainGet };
