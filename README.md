seleq
===

> Smallest JavaScript selector handler

##Description

For the lazy developer, this small and simple *JavaScript* script makes easier to select and handle *HTML* selectors using a similar *jQuery* syntax.

##Use

**Select 1 element (ID)**

```
$('#hola').style.color = 'red';
```

**Select 2 elements (CSS selector)**

```
$$('p').forEach(function(elems){
  elems.style.color = 'blue';
});
```

**Select many elements (classes)**

```
$$('.paragraph').forEach(function(elems){
  elems.style.fontWeight = 'bold';
});
```

**Select 1 element (ID), bind *click*' event**

```
$('#hola').on('click',function(ev){
  this.style.color = 'green';
});
```

**Select many elements (classes), bind *click* event**

```
$$('.paragraph').on('click',function(ev){
  this.style.color = 'yellow';
});
```

##Compatibility

Full IE9+ support, partial IE8 support (limited to CSS 2.1 selectors and a small subset of CSS 3 selectors. No HTML5 tags support either)

##License

*Seleq* is licensed under the terms of [The MIT License](LICENSE).

Copyright @ 2015 Jorge Epuñan | @csslab
