/*
 * Title: Sample Handler
 * Description: Application Routes
 * Author: Abu Sayeed
 * Date: 22/09/2022
 *
 */

// Module Scaffolding

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'THis is a sample url',
    });
};

module.exports = handler;
