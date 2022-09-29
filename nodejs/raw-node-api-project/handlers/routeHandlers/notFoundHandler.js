/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Abu Sayeed
 * Date: 22/09/2022
 *
 */

// Module Scaffolding

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
