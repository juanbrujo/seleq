seleq
===

> Smallest JavaScript selector handler

##USE

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

##License

*Seleq* is licensed under the terms of either the [MIT License](LICENSE) or the GNU General Public License (GPL) Version 3.

@2015 Jorge Epuñan | @csslab
