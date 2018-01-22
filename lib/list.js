const request   = require('request');
const term      = require('terminal-kit').terminal;

exports.list = url => {
    return request.get(url, (err, response, body) => {
        if (err) {
            term.red("Error Accured: ")
                .yellow(err);

            return null;
        }            

        return body;
    })
}
