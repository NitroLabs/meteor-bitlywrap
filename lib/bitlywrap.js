var Future = Npm.require('fibers/future');
var node_bitly = Npm.require("bitly");

/* Usage
 *  bitly = new Bitly('<YOUR USERNAME>', '<YOUR API KEY>')
 *  shortUrl = bitly.shorten('https://github.com/tanepiper/node-bitly');
 *  longUrl = bitly.expand(shortUrl);
 *  isValid = bitly.validate(shortUrl);
*/

Bitly = function(username,apikey){
	var self = this;
	var _bitley = new node_bitly(username,apikey);

	// Return the shortened long_url
	self.shorten = function(long_url){
		var future = new Future();
		_bitly.shorten(long_url).then(function(response) {
				future.return(response.data.url)
			}, function(error) {
				future.throw(error);
			});
		}
	}

	// Return the full version of short_url
	self.expand = function(short_url){
		var future = new Future();
		_bitly.expand(short_url).then(function(response) {
				future.return(response.data.expand.long_url)
			}, function(error) {
				future.throw(error);
			});
		}
	}

	// Return the link_lookup data {Object}
	self.lookup = function(long_url){
		var future = new Future();
		_bitly.lookup(url).then(function(response) {
				future.return(response.data.link_lookup)
			}, function(error) {
				future.throw(error);
			});
		}
	}

	// Return info about a short_url {Object}
	self.info = function(long_url){
		var future = new Future();
		_bitly.info(url).then(function(response) {
				future.return(response.data.info)
			}, function(error) {
				future.throw(error);
			});
		}
	}

	return self;
}




