window.onload = function () {
                var url = "text.json"
                var request = new XMLHttpRequest();
                request.open("get", url);
                request.send(null);
                request.onload = function () {
                    if (request.status == 200) {
                        var json = JSON.parse(request.responseText);
						var transform = {'<>':'details','html':[
										{"<>":"summary",'text':"${name}"},
										{'<>':'span','html':'${text}'}
										]}; 
						document.getElementById('list').innerHTML = json2html.transform(json.note,transform);
                    }
                }
           }
