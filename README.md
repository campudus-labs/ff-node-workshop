# Fun Friday NodeJS

* 7e9b711 **Initial layout**

    Just a few files to initialize the git repository and to begin the workshop.

* dcee3ca **Basics**

    This commit shows how to write and start code (`node helloWorld.js`) with NodeJS.

* 56dd7f9 **Synchronous commands**

    We showed how to do basic scripting with synchronous commands. We wrote and read files with `writeFileSync` and `readFileSync`. As we had files and wanted to add new data to them, we used `appendFileSync`.

* 7faef0d **Asynchronous / event-driven**

    To be able to use non-blocking functions, we need to register callbacks. This differs a bit from regular imperative programming and you need to "look around" for your code or start having a "callback hell".

* 0b75ffb **Basic modules**

    The biggest plus in Node is the very easy to use module system. You can easily structure your code by using `require()`. We had a look at how to write our own little module in `calculator.js` and how to use it in `helloWorld.js`.

* 024515d **A basic Webserver example**

    We had a look at express in `server.js` and have seen how to use the very simple API of [Express](http://expressjs.com/). We had to register a middleware to process a request and put a small static server for all other files in place. Then we started the server on port `8080` and tried out our basic routes: `/` (or `/index.html`) and `/hello`.

* 9806869 **More Express**

    There are actually two examples in this commit. First, we set up a router (namely `helloRouter`) that routes anything below `/hello`. Then we had a look at multiple routes that match a specific path (`/hello/olli`). We figured out that the order of the registration of the routes is critical: The first one that matches wins.

* 0b0ceb0 **Using handlebars templates**

    With handlebars, we use template strings that contain `{{variable}}` instructions. Handlebars replaces these strings with the contents of the specified `variable`. Using `Handlebars.compile()`, we receive a function where we pass the contents of the variables. As the compilation may take some time, we had a look at how we could cache the compiled templates. Using `setTimeout`, we mocked a long running asynchronous operation to get the template and had a look what happened if this produced an error.

* f96ae32 **Error handling and using npm to start our server**

    A four parameter function as middleware handles errors in express. We had a look at when we had to register them and what the `next(err)` method means while doing error handling. After the workshop, we put `server.js` in `package.json` which basically means we can run the server we wrote by writing `npm start` now.
