var Module = (function () {

    var NombreAutor;
    var bpList=[];

    var actualizarLista = function (blueprint) {
        if(blueprint){
            document.getElementById("textusr").innerHTML = NombreAutor;
            var newArray = blueprint.map(function(val, index){
                return {key:val.name, value:val.points.length}
            })
            $("#tablebprs tbody").empty();
            newArray.map(function(val,index){
                var toAdd = '<tr><td>' + val.key + '</td><td>' + val.value + '</td><td></td></tr>';
                $("#tablebprs tbody").append(toAdd);
            })
            var numberOfPoints = newArray.reduce(function(total, val){
                return total.value + val.value;
            })
            document.getElementById("texttpts").innerHTML = numberOfPoints;
        }
    };

    return {
        authorNameChanged: function () {
            NombreAutor = document.getElementById("textusr").value;
            apimock.getBlueprintsByAuthor(NombreAutor,actualizarLista);
        }
    };
  })();