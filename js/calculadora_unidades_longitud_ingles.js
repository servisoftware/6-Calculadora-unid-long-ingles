function calculateValue (inches, convert_to){

	var inn =  parseFloat(inches);
	var new_val = 0;
	// CALCULAR VALORES


	if(convert_to == "lg"){
		      //        mi / fur/ ch/ rd /yd / ft / in		
		new_val = inn / 3 / 8 / 10 / 4 / 5.5 / 3 / 12;
	}

	if(convert_to == "mi"){
		      //        fur/ ch/ rd /yd / ft / in		
		new_val = inn / 8 / 10 / 4 / 5.5 / 3 / 12;
	}

	if(convert_to == "fur"){
		      //        ch/ rd /yd / ft / in		
		new_val = inn / 10 / 4 / 5.5 / 3 / 12;
	}

	if(convert_to == "ch"){
		      //        rd /yd / ft / in		
		new_val = inn / 4 / 5.5 / 3 / 12;
	}

	if(convert_to == "ch"){
		      //        rd /yd / ft / in		
		new_val = inn / 4 / 5.5 / 3 / 12;
	}

	if(convert_to == "rd"){
		      //        yd / ft / in		
		new_val = inn / 5.5 / 3 / 12;
	}

	if(convert_to == "yd"){
		      //        ft / in		
		new_val = inn /  3 / 12;
	}

	if(convert_to == "ft"){
		      //        in		
		new_val = inn / 12;
	}

	if(convert_to == "in"){
		      //        in		
		new_val = inn ;
	}

	if(convert_to == "ml"){
		      //        ft / in		
		new_val = inn * 1000;
	}

	// PRESENTAR VALORES

	//valor convertido
	$("#valor_convertido").val(new_val);


}


$(function(){
	$("#calcular").click(function(){
		var inn          = 0;
		//calculo de multiplos y submultiplos
		var valor      = parseFloat($("#valor").val());
		var unidad     = $("#unidad").val();
		var convertir  = $("#convertir").val();


		if (unidad == "lg"){
					//	     mi *fur* ch * rd * yd * ft * in
			inches =  valor * 3 * 8 * 10 * 4 * 5.5 * 3 * 12;
		}
		if (unidad == "mi"){
					//	fur * ch * rd * yd * ft * in
			inches =  valor * 8 * 10 * 4 * 5.5 * 3 * 12;
		}
		if (unidad == "fur"){
					//	 ch * rd * yd * ft * in
			inches =  valor * 10 * 4 * 5.5 * 3 * 12;
		}
		if (unidad == "ch"){
					//	   rd * yd * ft * in
			inches =  valor  * 4 * 5.5 * 3 * 12;
		}
		if (unidad == "rd"){
					//	   yd * ft * in
			inches =  valor  * 5.5 * 3 * 12;
		}
		if (unidad == "yd"){
					//	   ft * in
			inches =  valor  *  3 * 12;
		}
		if (unidad == "ft"){
					//	   in			
			inches =  valor  * 12 ;
		}
		if (unidad == "in"){
			inches =  valor ;
		}
		if (unidad == "ml"){
			inches =  valor / 1000;
		}

		console.log(inches+" "+convertir);
		calculateValue (inches, convertir);

	})
});
