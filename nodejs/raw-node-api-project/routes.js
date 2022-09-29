/*
 * Title: Routes
 * Description: Application Routes
 * Author: Abu Sayeed
 * Date: 22/09/2022
 *
 */
// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
