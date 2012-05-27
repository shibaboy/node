function route(handle, pathname, response) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
	response.writeHead(404, {"content-Type" : "text/aplain"});
	response.write("404 Not Found");
	response.end();
  }
}

exports.route = route;
