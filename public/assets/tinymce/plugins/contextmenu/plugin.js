tinymce.PluginManager.add("contextmenu",function(e){var n;e.on("contextmenu",function(t){var o;if(t.preventDefault(),o=e.settings.contextmenu||"link image inserttable | cell row column deletetable",n)n.show();else{var i=[];tinymce.each(o.split(/[ ,]/),function(n){var t=e.menuItems[n];"|"==n&&(t={text:n}),t&&(t.shortcut="",i.push(t))});for(var c=0;c<i.length;c++)"|"==i[c].text&&(0===c||c==i.length-1)&&i.splice(c,1);n=new tinymce.ui.Menu({items:i,context:"contextmenu"}),n.addClass("contextmenu"),n.renderTo(document.body),e.on("remove",function(){n.remove(),n=null})}var a={x:t.pageX,y:t.pageY};e.inline||(a=tinymce.DOM.getPos(e.getContentAreaContainer()),a.x+=t.clientX,a.y+=t.clientY),n.moveTo(a.x,a.y)})});