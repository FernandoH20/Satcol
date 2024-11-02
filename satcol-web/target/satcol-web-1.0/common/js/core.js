/*calendario para generar el plan de produccion**/
/* global miArray */

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();

var clickedYear = today.getFullYear();;
var selectedDate = [];
var selectedMonth = [];
var selectedYear = [];
var mode = '';
var footershow = true;
var leftshow = true;
var fechas1 =[];
var rem = [];
var fechasOrdenadas=[];
var fecha1="";
var cont=0;
function bindingClickEventForHeaderButton(){
	$("#prev").bind("click", function(){            
		prevButton();
                clearTable();  
                clearDate();
	});
	$("#next").bind("click", function(){
		nextButton();
                clearTable();
                clearDate();
	});
	$("#today").bind("click", function(){
		todayButton();
                clearDate();
	});
	$("#order").bind("click", function(){
		orderDate();                
//		console.log("fechas ordenadas"+fechas1);
                console.log("fechas ordenadas.. "+fechasOrdenadas);
	});
//        $("#vectorfechas").bind("click", function(){
//		//todayButton();
//	});
}

 function set_Today() {
 	var index = today.getDay();
 	return convertDateToText[index];
 }

function get_FirstDay(){
	var d = new Date(year,month-1,1);
	return d.getDay();
}

 function get_LastDay(){
 	var d = new Date(year,month-1,get_day_max(year,month-1));
 	return d.getDay();
 }

 function get_day_max(year,month){
 	var i = 29, cday;
 	while(i < 32){
 		cday = new Date(year,month,i);
 		if (cday.getFullYear()!=year || cday.getMonth()!=month) break;
 		i++;
 	}
 	return i-1;
 }


function draw_prevBlank(){
	var str = '<ul class="row">';
	for (var i = 0; i < get_FirstDay(); i++) {
		str += '<li class="date"> . </li>';
	}
	return str;
}

 function get_LastBlank(){
 	if(get_LastDay()!=0){
 		return 6-get_LastDay();
 	}
 	return 6;
 }

 function draw_LastBlank(){
 	var str = '';
 	for (var i = 0; i < get_LastBlank(); i++) {
 		str += '<li class="date"> . </li>';
 	}
 	str += '</ul>';
 	return str;
 }

 function prevButton(){
 	switch(mode){
 		case 'ymd':
 		if(month != 1)
 		{
 			month --;
 		}else{
 			year --;
 			month = 12;
 		}
 		ymdDraw();
 		break;
 		case 'ym':
 		year = year - 7;
 		clickedYear = null;
 		yearDraw();
 		ymDraw();
 		break;
 		default:
 		year = year - 7;
 		yearDraw();
 		break;
 	}
 	accessSelectedDateForAddClassSelected();
 }

 function todayButton(){
 	year = today.getFullYear();
 	month = today.getMonth() + 1;
 	day = today.getDate();
 	switch(mode){
 		case 'ymd':
 		ymdDraw();
 		break;
 		case 'ym':
 		yearDraw();
 		ymDraw();
 		break;
 		default:
 		yearDraw();
 		break;
 	}
 	accessSelectedDateForAddClassSelected();
 }

function orderDate(){
//		fechas1.sort(function(a,b){
//                    return a-b;
//                });
               // return _.sortBy(fechasOrdenadas, 'date');
//                fechasOrdenadas.sort(function (a,b){
//                    var c = new Date(a.date);
//                    var d =  new Date(a.date);
//                    return c - d;
//                });
 }

 function nextButton(){
 	switch(mode){
 		case 'ymd':
 		if(month != 12)
 		{
 			month ++;
 		}else{
 			year ++;
 			month = 1;
 		}
 		ymdDraw();
 		break;
 		case 'ym':
 		year = year + 7;
 		clickedYear = null;
 		yearDraw();
 		ymDraw();
 		break;
 		case 'y':
 		year = year + 7;
 		yearDraw();
 		break;
 	}
 	accessSelectedDateForAddClassSelected();
 }

 function accessSelectedDateForAddClassSelected()
 {
 	$(".date").each(function(){
 		$(this).removeClass("selected");
 		switch(mode){
 			case 'ym':
 			if ($(this).attr("datevalue") == clickedYear) {
 				$(this).addClass("selected");
 			}
 			for (var i = 0; i < selectedDate.length; i++) {
 				var dateForCheckYear = selectedDate[i].split("-");
 				if(dateForCheckYear.length == 2 && $(this).attr("datevalue") == dateForCheckYear[0]){
 					$(this).addClass("selected");
 				}else if(dateForCheckYear.length == 2 && $(this).attr("datevalue") == selectedDate[i]){
 					$(this).addClass("selected");
 				}
 			}
 			break;
 			default:
 			for (var i = 0; i < selectedDate.length; i++) {
 				if($(this).attr("datevalue") == selectedDate[i]){
 					$(this).addClass("selected");
 				}
 			}
 			break;
 		}
 	});
}

 function ymdSelectMode(){
 	if(mode == 'ymd'){
 		return false;
 	}
 	mode = 'ymd';
 	headerDraw("ymd");
 	ymdDraw();
 	bindingClickEventForHeaderButton();
 	accessSelectedDateForAddClassSelected();
 }

  function addClassForSelected(pickeddate)
  {
  	$("li[datevalue='"+pickeddate+"']").addClass("selected");
  }

  function deletePickedDate(pickeddate)
  {
  	$("li[datevalue='"+pickeddate+"']").removeClass("selected");

  	for (var i = 0; i < selectedDate.length; i++) {
  		if(selectedDate[i] == pickeddate){
  			selectedDate.splice(i,1);
  			i--;
  		}
  	}
  	console.log(selectedDate);  	
  }

 function pushSelectedDate(pickeddate){// pickeddate es formato fecha ej: 2017-02-02
 	if(checkDuplicationData(pickeddate)){
 		deletePickedDate(pickeddate);
 	}else{            
            if(cont <=21 ){
 		selectedDate.push(pickeddate);
 		addClassForSelected(pickeddate); 		
 		fecha1= selectedDate[cont];		               
                console.log("fecha1.substr(-2)   + "+fecha1.substr(-2).replace(/-/,""));
                if(verificaFeriado(fecha1.substr(-2).replace(/-/,""))=== 0 && verificaFechaMenor(fecha1.substr(-2).replace(/-/,""),fechas1) === 0){
                    fechasOrdenadas[cont]=selectedDate[cont];
                    fechas1[cont] = fecha1.substr(-2);
                    var notguion=fechas1[cont].replace(/-/,"");
                    fechas1[cont]=notguion;
                    myCreateFunction(cont+1, notguion);
                    cont++; 		
                    $("#fechasPlan").html(fechas1+"");   
                }
                else{
                  presenterModalCreate._view.messageInfo("Verifique los valores ingresados");  
                  deletePickedDate(pickeddate);  
                }
            }    
 	}
 }

 function pushSelectedMonth(pickedMonth){
 	if (checkDuplicationData(pickedMonth)) {
 		deletePickedDate(pickedMonth);
 		var non = true;
 		for (var i = 0; i < selectedDate.length; i++) {
 			var dateForCheckYear = selectedDate[i].split("-");
 			if(dateForCheckYear.length == 2 && dateForCheckYear[0] == clickedYear){
 				non = false;
 			}
 		}
 		if (non) {$(".selected[datevalue='" + clickedYear + "']").removeClass("selected");}
 	}else{
 		addClassForSelected(pickedMonth);
 		selectedDate.push(pickedMonth);
 		console.log(selectedDate);
 	}
 }

 function pushSelectedYear(pickedYear){
 	if (checkDuplicationData(pickedYear)) {
 		deletePickedDate(pickedYear);
 	}else{
 		$("li[datevalue='"+clickedYear+"']").removeClass("selected");
 		selectedDate.push(pickedYear);
 		addClassForSelected(pickedYear); 
 		console.log(selectedDate);

 	}
 }

 function checkDuplicationData(pickeddate){
 	for (var i = 0; i < selectedDate.length; i++) {
 		if(selectedDate[i] == pickeddate){
 			return false;
 		}
 	}
 	return false;
 }

 function bindingDateClickEvent(){
 	$(".date").bind("click", function(e){
 		if($(this).attr("dateValue") !== undefined){
 			pushSelectedDate($(this).attr("datevalue"));
 		}
 	});
 }

 function bindingYearClickEvent(){
 	$("#yearSelect li").bind("click", function(e){
 		clickedYear = $(this).attr("datevalue");
 		if(mode == 'ym'){
 			ymDraw();
 		}
 		addClassForSelected(clickedYear);
 		accessSelectedDateForAddClassSelected();
 		console.log(clickedYear);
 		if(mode == 'y'){
 			pushSelectedYear(clickedYear);
 		}
 	});
 }

 function headerDraw(mode){
 	switch(mode){
 		case 'ymd':
 		var str = '<div id="header"><span id="left"><span id="modeSelectButtonGroup"><button type="button" id="prev">anterior</button></span></span><span id="center"><h4 id="calendarTitle"><span id="year"></span>  <span id="month"></span> </h4></span><span id="right"><span id="moveButtonGroup"><button type="button" id="next">siguiente</button></span></span></div>';
 		break;
 		default:
 		//var str = '<div id="header"><span id="left"><span id="modeSelectButtonGroup"><button id="ym-select">--></button><button id="ymd-select">jc-jc-jc</button></span></span><span id="center"><ul id="yearSelect"></ul></span><span id="right"><span id="moveButtonGroup"><button id="prev">jc</button><button id="today">jc</button><button id="next">jc</button></span></span>';
 		break;
 	}
 	str += '<div id="content"></div>';
 	str += '<div id="footer"><button type="button" onclick="clearDate();">Limpiar Fechas</button><button type="button" id="today">fecha_actual</button>';//<button type="button" id="order">Ordenar Plan</button></div>';
 	$(".multiDatePicker").empty().append(str); 	
 }

 function ymdDraw() {
 	var str = '<ul class="row">';
 	for (var i = 0; i < 7; i++) {
 		str += '<li class="weekText">' + convertDateToText[i] + '</li>';
 	}
 	str += '</ul>';
 	var firstDay = get_FirstDay() + 1;
 	str += draw_prevBlank();
 	var dateNum = 1;
 	for(firstDay; dateNum <= get_day_max(year,month-1) ; firstDay++){
 		str += '<li class="date" datevalue="' + year + '-' + month + '-' + dateNum + '">' + dateNum + '</li>';
 		if(firstDay%7==0){
 			str += '</ul><ul class="row">';
 		}
 		dateNum++;
 	}
 	str += draw_LastBlank();
 	$("#year").empty().append(year);
 	var montnTex ="";        
 	montnTex = monthToTex(month);        
        $("#anioMes").empty();
        findFeriados(year, month);
 	$("#month").empty().append(montnTex);
 	$("#content").empty().append(str);
 	bindingDateClickEvent();        
 }

 function setRowHeight(){
 	var width = $(".date").css("width");
 	$(".date").css("height", width);
 }

 function clearDate(){
        clearTable();
 	selectedDate = [];
 	$(".selected").removeClass("selected");
 	cont=0;
 	fechas1=[];
        fechasOrdenadas=[];
 	fecha1="";      
        $("#fechasPlan").html(fechas1+"");            
 }

function monthToTex(month){
	switch(month) {
	    case 1:
	        return "ENERO";
	        break;
	    case 2:
	        return "FEBRERO";
	        break;
	    case 3:
	        return "MARZO";
	    	break;
	    case 4:
	        return "ABRIL";
	        break;
	     case 5:
	        return "MAYO";
	        break;
	    case 6:
	        return "JUNIO";
	        break;
	    case 7:
	        return "JULIO";
	        break;
	    case 8:
	        return "AGOSTO";
	        break;
	    case 9:
	        return "SEPTIEMBRE";
	        break;
	    case 10:
	        return "OCTUBRE";
	        break;
	    case 11:
	        return "NOVIEMBRE";
	        break;
	    case 12:
	        return "DICIEMBRE";
	        break;
    }
}

function myCreateFunction(c, fec) {
        $('#primera td:last').after('<td id="re">'+c+'</td>');
        $('#segunda td:last').after('<td id="fe">'+fec+'</td>');
}
function clearTable(){
    var r= document.getElementById('tabla').rows[0].cells.length;
    console.log(r);
    while( r > 1){
        $("#re").remove();
        $("#fe").remove();
        r= r-1;
    }
}
 
function verificaFechaMenor(f,vf){
    var  band = 0;
    parseInt(f);
    for(i=0;i< vf.length ; i++){
        console.log( "a comparar  ...."+f+"  "+vf[i] );
        if(parseInt(f) < parseInt(vf[i])){
            band = 1;
            return band;
        }
    }
    return band;
}