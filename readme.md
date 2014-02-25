# RMVC Project

Router-Model-View-Controller prototype

## Inspiration

Inspired by [tildeio/router.js](https://github.com/tildeio/router.js) and [Tom Dale's talk](http://www.youtube.com/watch?v=OSEXpsVcTxI)

## Key concepts

 * Functional style
 * URL-driven
 * Declarative templates

## Gists

	route('/user/:id').to('showUser');

	handlers.showUser = {
		// model :: Params -> Model
		model: function(params){ ... },

		// setup :: Model -> Template
		setup: function(model){ ... }
	};

## Dependencies

On first sprint I can use my monads implementation and template core (which should be completed asap).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Alexey Raspopov