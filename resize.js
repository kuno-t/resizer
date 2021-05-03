var height1 = document.getElementById("height1");
var weight1 = document.getElementById("weight1");
var length1 = document.getElementById("length1");
var area1 = document.getElementById("area1");
var volume1 = document.getElementById("volume1");
var length2 = document.getElementById("length2");

var reheight1 = document.getElementById("reheight1");
var reweight1 = document.getElementById("reweight1");
var relength1 = document.getElementById("relength1");
var rearea1 = document.getElementById("rearea1");
var revolume1 = document.getElementById("revolume1");
var relength2 = document.getElementById("relength2");

const dataNum = 6;

var button1 = document.getElementById("button1");
var table1 = document.getElementById("table1");

var selectHeight1;
var selectReHeight1;
var selectWeight1;
var selectReWeight1;
var selectLength1;
var selectReLength1; 
var selectArea1;
var selectReArea1;
var selectVolume1;
var selectReVolume1;

var selectLength = '<select name="selectLength">' +
'<option value="-12">pm</option>'+
'<option value="-9">nm</option>'+
'<option value="-6">μm</option>'+
'<option value="-3">mm</option>'+
'<option value="-2">cm</option>'+
'<option value="0" selected>m</option>'+
'<option value="3">km</option>'+
'<option value="11.174925412046">au</option>'+
'<option value="15.975924670013">ly</option>'+
'<option value="21">Ga</option></select>';

var selectWeight = '<select name="selectWeight">'+
'<option value="-15">pg</option>'+
'<option value="-12">ng</option>'+
'<option value="-9">μg</option>'+
'<option value="-6">mg</option>'+
'<option value="-3">g</option>'+
'<option value="0" selected>kg</option>'+
'<option value="3">t</option>'+
'<option value="6">kt</option>'+
'<option value="9">Mt</option>'+
'<option value="12">Gt</option>'+
'<option value="16">Tt</option>'+
'<option value="24.776">Ea</option>'+
'<option value="30.2986">Su</option>'+
'<option value="42.4747">Ga</option>'+
'</select>';

var selectArea = '<select name="selectArea">'+
'<option value="-24">pm^2</option>'+
'<option value="-18">nm^2</option>'+
'<option value="-12">μm^2</option>'+
'<option value="-6">mm^2</option>'+
'<option value="-4">cm^2</option>'+
'<option value="0" selected>m^2</option>'+
'<option value="2">a</option>'+
'<option value="4">ha</option>'+
'<option value="6">km^2</option>'+
'<option value="22.847">au</option>'+
'<option value="31.952">ly^2</option>'+
'<option value="42.497">Ga</option>'+
'</select>';

var selectVolume = '<select name="selectVolume">'+
'<option value="-36">pm^3</option>'+
'<option value="-24">nm^3</option>'+
'<option value="-16">μm^3</option>'+
'<option value="-9">mm^3</option>'+
'<option value="-6">mL = cc</option>'+
'<option value="-3">L</option>'+
'<option value="0" selected>m^3</option>'+
'<option value="2.201">バレル</option>'+
'<option value="9">km^3</option>'+
'<option value="20.263">Ea</option>'+
'<option value="27.149">Su</option>'+
'<option value="47.928">ly^3</option>'+
'</select>';

$(function(){
    height1.insertAdjacentHTML('afterend',selectLength);
    reheight1.insertAdjacentHTML('afterend',selectLength);
    weight1.insertAdjacentHTML('afterend',selectWeight);
    reweight1.insertAdjacentHTML('afterend',selectWeight);
    length1.insertAdjacentHTML('afterend',selectLength);
    relength1.insertAdjacentHTML('afterend',selectLength);
    area1.insertAdjacentHTML('afterend',selectArea);
    rearea1.insertAdjacentHTML('afterend',selectArea);
    volume1.insertAdjacentHTML('afterend',selectVolume);
    revolume1.insertAdjacentHTML('afterend',selectVolume);
    length2.insertAdjacentHTML('afterend',selectLength);
    relength2.insertAdjacentHTML('afterend',selectLength);

    selectHeight1 = height1.nextElementSibling;
    selectReHeight1 = reheight1.nextElementSibling;
    selectWeight1 = weight1.nextElementSibling;
    selectReWeight1 = reweight1.nextElementSibling;
    selectLength1 = length1.nextElementSibling;
    selectReLength1 = relength1.nextElementSibling;
    selectArea1 = area1.nextElementSibling;
    selectReArea1 = rearea1.nextElementSibling;
    selectVolume1 = volume1.nextElementSibling;
    selectReVolume1 = revolume1.nextElementSibling;
    selectLength2 = length1.nextElementSibling;
    selectReLength2 = relength1.nextElementSibling;
});

function onClickButton1(){
    var sizeArray = [];
    var resizeArray = [];
    var unitScalePow = [];
    for(var i=0; i<dataNum; i++){
        sizeArray[i] = table1.rows[i+1].cells[1].getElementsByTagName("input")[0];
        resizeArray[i] = table1.rows[i+1].cells[3].getElementsByTagName("input")[0];
        unitScalePow[i] = sizeArray[i].nextElementSibling.value - resizeArray[i].nextElementSibling.value;
        //table1.rows[i].cells[3].input.value = scale * table1.rows[i].cells[1].input.value;
        console.log(sizeArray[i].value + "," + resizeArray[i].value, unitScalePow[i]);
    }

    var radioNode = document.getElementById("form1");
    var radioNodeList = radioNode.hoge;
    var num = radioNodeList.value;
    console.log(radioNodeList.value);

    if((num < 6) && (sizeArray[num].value * resizeArray[num].value)!=0) {
        scale = Math.pow(resizeArray[num].value/(sizeArray[num].value * Math.pow(10,unitScalePow[num])), 1/Number(sizeArray[num].dataset.dim));
        console.log("scale="+scale);
    } else if(num==6 && !isNaN(document.getElementById("scale1").value) && Number(document.getElementById("scale1").value)){
        var scale = document.getElementById("scale1").value;
    } else if(num==7 &&!isNaN(document.getElementById("scale2").value) && Number(document.getElementById("scale2").value)){
        var scale = Math.sqrt(document.getElementById("scale2").value);
    } else if(num==8 &&!isNaN(document.getElementById("scale3").value) && Number(document.getElementById("scale3").value)){
        var scale = Math.cbrt(document.getElementById("scale3").value);
    } else {
        return;
    }

    for(var i=0; i<sizeArray.length; i++){
        resizeArray[i].value = sizeArray[i].value * Math.pow(scale, Number(sizeArray[i].dataset.dim)) * Math.pow(10,unitScalePow[i]); 
        console.log(Number(sizeArray[i].dataset.dim)+","+scale+","+Math.pow(10,unitScalePow[i]));
    }

    document.getElementById("scale1").value = scale;
    document.getElementById("scale2").value = Math.pow(scale,2);
    document.getElementById("scale3").value = Math.pow(scale,3);

    return;
}

button1.onclick = onClickButton1;