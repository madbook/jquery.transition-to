jquery.transition-to
===================

Transition arbitrary html elements

jQuery.transitionTo allows you to animate an arbitrary block of content on the
fly using jQuery animations, without having to write any extra markup.

If you want to transition between two HTML elements without having to pre-wrap
the original content with extra markup to support the transition, then this
plugin is for you!

```javascript
$('#foo').transitionTo("<div id='bar'>New Content!</div>", 1000);
```

`transitionTo` returns a `promise`, so you can provide a callback using
`$.fn.then`

```javascript
$('#foo').transitionTo($bar, 1000).then(function (newElement) {
    // newElement == $bar
});
```

Currently only does a simple cross fade.  I'm not sure how I'd want to implement
other transitions, but I'm open to ideas.

You can load this plugin directly using a script tag, or include it as a module
with any proper AMD or CommonJS module loader.