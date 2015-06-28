var Future = Npm.require('fibers/future');
var node_bitly = Npm.require("bitly");

/* Usage
 *  bitly = new Bitly('<YOUR USERNAME>', '<YOUR API KEY>')
 *  short_url = bitly.shorten('https://github.com/tanepiper/node-bitly');
 *  long_url = bitly.expand(short_url);
*/

Bitly = function(username,apikey){
	var self = this;
	var _bitly = new node_bitly(username,apikey);

	// Return the shortened long_url
	self.shorten = function(long_url){
		var future = new Future();
		_bitly.shorten(long_url).then(function(response) {
			if (response.error) throw_error(response);
			future.return(response.data.url)
		}, function(error) {
			future.throw(error);
		});
		return future.wait();
	}

	// Return the full version of short_url
	self.expand = function(short_url){
		var future = new Future();
		_bitly.expand(short_url).then(function(response) {
			if (response.error) throw_error(response);
			future.return(response.data.expand.long_url)
		}, function(error) {
			future.throw(error);
		});
		return future.wait();
	}

	// Return the link_lookup data {Object}
	self.lookup = function(long_url){
		var future = new Future();
		_bitly.lookup(long_url).then(function(response) {
			if (response.error) throw_error(response);
			future.return(response.data.link_lookup)
		}, function(error) {
			future.throw(error);
		});
		return future.wait();
	}

	// Return info about a short_url {Object}
	self.info = function(short_url){
		var future = new Future();
		_bitly.info(short_url).then(function(response) {
			if (response.error) throw_error(response);
			future.return(response.data.info)
		}, function(error) {
			future.throw(error);
		});
		return future.wait();
	}

	return self;
}


function throw_error(response){
	var status = response.status_code;
	var error = response.error;
	throw new Meteor.error(status,"Bitly returned an error",error);
}




