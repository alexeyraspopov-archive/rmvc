monad = require('../bower_components/monad/index.js').monad;
template = require('underscore').template;
Emitter = require('events').EventEmitter;
events = new Emitter();
users = { 'id1': { name: 'Alex' }, 'id2': { name: 'Ksu' } };

Route = monad(function(monad, value){
		events.on('hashchange', function(route){
			console.log(route);
		});

		return value;
	})
	.lift('model', function(value, fn){});

Model = monad()
	.lift('template', function(value, fn){});

Template = monad()
	.lift('log', console.log.bind(console));


Route('/user/:id')
	.model(function(params){
		return Model(users[params.id]);
	})
	.template(function(model){
		return Template(template('Hello, <%= name %>'));
	})
	.log();

events.emit('hashchange', '/user/id1');
events.emit('hashchange', '/user/id2');