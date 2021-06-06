var Request = require("request");
 
//markdown
var textToConvert = `Heading
=======
## Sub-heading
 
Paragraphs are separated
by a blank line.
 
Two spaces at the end of a line  
produces a line break.
 
Text attributes _italic_, 
**bold**, 'monospace'.
A [link](http://example.com).
Horizontal rule:`;
 
// End markdown
                    
Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:3000/convert",
    "body": JSON.stringify({
        "content": textToConvert,
        "username": "root",
        "password": "admin"
    })
}, function(error, response, body){
    if(error) {
        return console.log(error);
    }
    console.dir(JSON.parse(body));
});
