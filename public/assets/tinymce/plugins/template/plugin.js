tinymce.PluginManager.add("template",function(e){function t(t){return function(){var a=e.settings.templates;"string"==typeof a?tinymce.util.XHR.send({url:a,success:function(e){t(tinymce.util.JSON.parse(e))}}):t(a)}}function a(t){function a(t){function a(t){if(-1==t.indexOf("<html>")){var a="";tinymce.each(e.contentCSS,function(t){a+='<link type="text/css" rel="stylesheet" href="'+e.documentBaseURI.toAbsolute(t)+'">'}),t="<!DOCTYPE html><html><head>"+a+"</head>"+"<body>"+t+"</body>"+"</html>"}t=r(t,"template_preview_replace_values");var l=n.find("iframe")[0].getEl().contentWindow.document;l.open(),l.write(t),l.close()}var c=t.control.value();c.url?tinymce.util.XHR.send({url:c.url,success:function(e){l=e,a(l)}}):(l=c.content,a(l)),n.find("#description")[0].text(t.control.value().description)}var n,l,o=[];return t&&0!==t.length?(tinymce.each(t,function(e){o.push({selected:!o.length,text:e.title,value:{url:e.url,content:e.content,description:e.description}})}),n=e.windowManager.open({title:"Insert template",body:[{type:"container",label:"Templates",items:{type:"listbox",name:"template",values:o,onselect:a}},{type:"label",name:"description",label:"Description",text:" "},{type:"iframe",minWidth:600,minHeight:400,border:1}],onsubmit:function(){c(!1,l)}}),n.find("listbox")[0].fire("select"),void 0):(e.windowManager.alert("No templates defined"),void 0)}function n(t,a){function n(e,t){if(e=""+e,e.length<t)for(var a=0;a<t-e.length;a++)e="0"+e;return e}var l="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),r="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),c="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),o="January February March April May June July August September October November December".split(" ");return a=a||new Date,t=t.replace("%D","%m/%d/%Y"),t=t.replace("%r","%I:%M:%S %p"),t=t.replace("%Y",""+a.getFullYear()),t=t.replace("%y",""+a.getYear()),t=t.replace("%m",n(a.getMonth()+1,2)),t=t.replace("%d",n(a.getDate(),2)),t=t.replace("%H",""+n(a.getHours(),2)),t=t.replace("%M",""+n(a.getMinutes(),2)),t=t.replace("%S",""+n(a.getSeconds(),2)),t=t.replace("%I",""+((a.getHours()+11)%12+1)),t=t.replace("%p",""+(a.getHours()<12?"AM":"PM")),t=t.replace("%B",""+e.translate(o[a.getMonth()])),t=t.replace("%b",""+e.translate(c[a.getMonth()])),t=t.replace("%A",""+e.translate(r[a.getDay()])),t=t.replace("%a",""+e.translate(l[a.getDay()])),t=t.replace("%%","%")}function l(t){var a=e.dom,n=e.getParam("template_replace_values");o(a.select("*",t),function(e){o(n,function(t,l){a.hasClass(e,l)&&"function"==typeof n[l]&&n[l](e)})})}function r(t,a){return o(e.getParam(a),function(e,a){"function"!=typeof e&&(t=t.replace(new RegExp("\\{\\$"+a+"\\}","g"),e))}),t}function c(t,a){function c(e,t){return new RegExp("\\b"+t+"\\b","g").test(e.className)}var i,s,m=e.dom,u=e.selection.getContent();a=r(a,"template_replace_values"),i=m.create("div",null,a),s=m.select(".mceTmpl",i),s&&s.length>0&&(i=m.create("div",null),i.appendChild(s[0].cloneNode(!0))),o(m.select("*",i),function(t){c(t,e.getParam("template_cdate_classes","cdate").replace(/\s+/g,"|"))&&(t.innerHTML=n(e.getParam("template_cdate_format",e.getLang("template.cdate_format")))),c(t,e.getParam("template_mdate_classes","mdate").replace(/\s+/g,"|"))&&(t.innerHTML=n(e.getParam("template_mdate_format",e.getLang("template.mdate_format")))),c(t,e.getParam("template_selected_content_classes","selcontent").replace(/\s+/g,"|"))&&(t.innerHTML=u)}),l(i),e.execCommand("mceInsertContent",!1,i.innerHTML),e.addVisual()}var o=tinymce.each;e.addCommand("mceInsertTemplate",c),e.addButton("template",{title:"Insert template",onclick:t(a)}),e.addMenuItem("template",{text:"Insert template",onclick:t(a),context:"insert"}),e.on("PreProcess",function(t){var a=e.dom;o(a.select("div",t.node),function(t){a.hasClass(t,"mceTmpl")&&(o(a.select("*",t),function(t){a.hasClass(t,e.getParam("template_mdate_classes","mdate").replace(/\s+/g,"|"))&&(t.innerHTML=n(e.getParam("template_mdate_format",e.getLang("template.mdate_format"))))}),l(t))})})});