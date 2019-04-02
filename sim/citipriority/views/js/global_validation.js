var zero=0;
var period='.';
var char_count=0;
var submit=false;var step_1=false;var step_2=false;var step_3=false;var step_4=false;var step_5=false;var step_6=false;
var regex_alpha_space_dot=/[^a-zA-Z. ]/g;
var regex_alpha=/[^a-zA-Z]/g;
var regex_chinese_alpha=/[^\u4e00-\u9fa5]/g;
var regex_alpha_spl_1=/[^a-zA-Z/,.]/g;
var regex_alpha_spl_all=/[^a-zA-Z./#=@%_:$,\-\+?& ]/g;
var regex_number=/[^0-9]/g;
var regex_alphanumeric=/[^a-zA-Z0-9]/g;
var regex_alphanumericamp=/[^a-zA-Z0-9&]/g;
var regex_alpha_numeric_spl_all=/[^a-zA-Z0-9./#=@%_:$,\-\+?& ]/g;
var regex_passport=/[^a-zA-Z0-9]/g;
var regex_alpha_numeric_spl_1=/[^a-zA-Z0-9,./-]/g;
//var regex_email= /^(([^<>()[\]\\.,;^'!*{}|~`\s@\"]+(\.[^<>()[\]\\.,;^'!*{}|~`\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regex_email=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
var dd=0;var mm=0;var yy=0;var age=0;
function trimSpace(x) {
	var emptySpace = / /g;
	var trimAfter = x.replace(emptySpace,"");
	return(trimAfter);
}
function alpha_space_dot(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(regex_alpha_space_dot) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;
}
function alpha(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(regex_alpha) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;
}
function chinese_alpha(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(regex_chinese_alpha) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;
}
function alpha_spl_1(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(regex_alpha_spl_1) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;
}
function alpha_spl_all(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(regex_alpha_spl_all) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;
}
function number(incomingString, defaultValue)
{	
	if((trimSpace(incomingString).length == 0 || incomingString.search(regex_number) != -1) && incomingString != defaultValue) {
		return false;
	} else
		return true;	
}
function alpha_numeric_spl_all(incomingString, defaultValue) 
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(regex_alpha_numeric_spl_all) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;
}
function alphanumericamp(incomingString, defaultValue) 
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(regex_alphanumericamp) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;
}
function alphanumeric(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(regex_alphanumeric) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;
}
function passport(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(regex_passport) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;
}
function alpha_numeric_spl_1(incomingString, defaultValue)
{
	if(trimSpace(incomingString).length == 0 || incomingString.search(regex_alpha_numeric_spl_1) != -1 || incomingString==defaultValue)
		return false;
	else
		return true;
}
function email(email)
{
	return regex_email.test(email);
}
function nric(nric) 
{
	 var icArray = new Array(9);
	for (i = 0; i < 9; i++) {
		icArray[i] = nric.charAt(i);
	}

	icArray[1] *= 2;
	icArray[2] *= 7;
	icArray[3] *= 6;
	icArray[4] *= 5;
	icArray[5] *= 4;
	icArray[6] *= 3;
	icArray[7] *= 2;

	var weight = 0;
	for (i = 1; i < 8; i++) {
		weight += parseInt(icArray[i]);
	}

	var offset = (icArray[0] == "T" || icArray[0] == "G") ? 4 : 0;
	var temp = (offset + weight) % 11;

	var st = Array("J", "Z", "I", "H", "G", "F", "E", "D", "C", "B", "A");
	var fg = Array("X", "W", "U", "T", "R", "Q", "P", "N", "M", "L", "K");

	var theAlpha;
	if (icArray[0] == "S" || icArray[0] == "T") {
		theAlpha = st[temp];
	}
	else if (icArray[0] == "F" || icArray[0] == "G") {
		theAlpha = fg[temp];
	}

	return (icArray[8] == theAlpha);				
}
function spl_check(char_val)
{
	if (trimSpace(char_val).charAt(0) == "-" || trimSpace(char_val).charAt(0) == "&" || trimSpace(char_val).charAt(0) == "=" || trimSpace(char_val).charAt(0) == ":" || trimSpace(char_val).charAt(0) == "?" || trimSpace(char_val).charAt(0) == "_" || trimSpace(char_val).charAt(0) == "#" || trimSpace(char_val).charAt(0) == "." || trimSpace(char_val).charAt(0) == "/" || trimSpace(char_val).charAt(0) == "+" || trimSpace(char_val).charAt(0) == "@" || trimSpace(char_val).charAt(0) == "$" || trimSpace(char_val).charAt(0) == "%" || trimSpace(char_val).charAt(0) == ",")
	{	
		return false;
	}	
	for(i=0;i<char_val.length;i++)
	{
		if(trimSpace(char_val).charAt(i) == "-" || trimSpace(char_val).charAt(i) == "&" || trimSpace(char_val).charAt(i) == "=" || trimSpace(char_val).charAt(i) == ":" || trimSpace(char_val).charAt(i) == "?" || trimSpace(char_val).charAt(i) == "_" || trimSpace(char_val).charAt(i) == "#" || trimSpace(char_val).charAt(i) == "." || trimSpace(char_val).charAt(i) == "/" || trimSpace(char_val).charAt(i) == "+" || trimSpace(char_val).charAt(i) == "@" || trimSpace(char_val).charAt(i) == "$" || trimSpace(char_val).charAt(i) == "%"|| trimSpace(char_val).charAt(i) == ",")
		{
			char_count++;
		}
		else
		{
			char_count=0;
		}
		if(char_count==2)
		{
			return false;
		}
	}
	return true;	
}
var submit_val=false;
$(document).ready(function(){
	/*$('input,textarea').blur(function(){
		if(trimSpace($(this).val())== $(this).attr( "data_value" ) && $(this).attr( "data_field_type" )!='Non_mandy_number' )
		{	
			$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
			$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));submit_val=false;return false; //$(this).focus().select();
		} 		
	});*/ 
	$('select').blur(function(){
		if(trimSpace($(this).val())=='')
		{	
			$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
			$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));submit_val=false;return false; //$(this).focus().select();
		} 		
	}); 	
	$('.req').focus(function(e){
		//$(".errorCode").text("");
		//$(this).removeClass("mandy_notfilled");
	});	
	
	$('input,textarea,select').focus(function(){
	   $(this).data('placeholder',$(this).attr('placeholder'))
			  .attr('placeholder','');
			  	$(this).parent().find(".inputBox-lable").show();
	}).blur(function(){
	   $(this).attr('placeholder',$(this).data('placeholder'));
	   if($(this).val() != ""){
			$(this).parent().find(".inputBox-lable").show();
	   }else{
		   $(this).parent().find(".inputBox-lable").hide();
	   }
	});
	
	
	$('input[type=email],textarea,input[type=text],input[type=tel]').focus(function(e){
		//if($(this).hasClass("mandy_notfilled")){
			// $(this).next().text("");
			// $(this).removeClass("mandy_notfilled")
		//}
	});
	
	$('.req').blur(function(e){
		if($(this).attr('class').indexOf('req') == -1) return false;
	if(e.which==9) return false;
		if($(this).attr( "data_field_type" )=='Alpha')
		{	
			if($(this).val() != ""){
				$(this).parent().find(".inputBox-lable").show();
			}else{
				
				$(this).parent().find(".inputBox-lable").hide();
			}
			//if($(this).val() != ""){
				if(trimSpace($(this).val())== $(this).attr( "data_value" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));submit_val=false;return false; //
				}
			
				if($(this).attr( "data_regex" )=='alpha_space_dot')
				{
					if(!alpha_space_dot(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha')
				{
					if(!alpha(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='chinese_alpha')
				{
					if(!chinese_alpha(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha_spl_1')
				{
					if(!alpha_spl_1(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha_spl_all')
				{
					if(!alpha_spl_all(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if(!spl_check(trimSpace($(this).val()),''))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}
				if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data-length-error"));submit_val=false;return false; //
				}
				$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
				
				$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide();
			//}
		}
		
		if($(this).attr( "data_field_type" )=='AlphaNumber')
		{	
			if($(this).val() != ""){
				$(this).parent().find(".inputBox-lable").show();
			}else{
				$(this).parent().find(".inputBox-lable").hide();
			}
			//if($(this).val() != ""){
				if(trimSpace($(this).val()) == $(this).attr( "data_value" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));submit_val=false;return false;
				}
			
				if(trimSpace($(this).val())==zero)
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}
				if($(this).attr( "data_regex" )=='alphanumeric')
				{
					if(!alphanumeric(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='passport')
				{	
					if($(this).hasClass('maskedId')){
						if(!passport($(this).prev().val()))
						{	
							$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
							$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
						}
					}
					else{
						if(!passport($(this).val())){
							$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
							$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
						}
					}
				}
				if($(this).attr( "data_regex" )=='nric')
				{
					if(!nric($(this).val()))
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='email')
				{		
					if(!email($(this).val()))
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
					if(trimSpace($(this).val()).charAt(0) == "-" || trimSpace($(this).val()).charAt(0) == "." || trimSpace($(this).val()).charAt(0) == "_")
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha_numeric_spl_1')
				{
					if(!alpha_numeric_spl_1(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha_numeric_spl_all')
				{
					if(!alpha_numeric_spl_all(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr("spl-symbol"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alphanumericamp')
				{
					if(!alphanumericamp(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if(!spl_check(trimSpace($(this).val()),''))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}
				if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data-length-error"));submit_val=false;return false;
				}
				$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
				$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide();
			//}
		}
		
		
		if($(this).attr( "data_field_type" )=='AlphaNumberSplChar')
		{	
			if($(this).val() != ""){
				$(this).parent().find(".inputBox-lable").show();
			}else{
				$(this).parent().find(".inputBox-lable").hide();
			}
			//if($(this).val() != ""){
				if(trimSpace($(this).val()) == $(this).attr( "data_value" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));submit_val=false;return false;
				}
			
				if(trimSpace($(this).val())==zero)
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}
				if($(this).attr( "data_regex" )=='alphanumeric')
				{
					if(!alphanumeric(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='passport')
				{
					if(!passport($(this).val()))
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='nric')
				{
					if(!nric($(this).val()))
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='email')
				{		
					if(!email($(this).val()))
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
					if(trimSpace($(this).val()).charAt(0) == "-" || trimSpace($(this).val()).charAt(0) == "." || trimSpace($(this).val()).charAt(0) == "_")
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha_numeric_spl_1')
				{
					if(!alpha_numeric_spl_1(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha_numeric_spl_all')
				{
					if(!alpha_numeric_spl_all(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr("spl-symbol"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alphanumericamp')
				{
					if(!alphanumericamp(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				/*if(!spl_check(trimSpace($(this).val()),''))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}*/
				if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data-length-error"));submit_val=false;return false;
				}
				$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
				$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide();
			//}
		}
		if($(this).attr( "data_field_type" )=='Number')
		{	
			if($(this).val() != ""){
				$(this).parent().find(".inputBox-lable").show();
			}else{
				$(this).parent().find(".inputBox-lable").hide();
			}
			//if($(this).val() != ""){
				if(trimSpace($(this).val()) == $(this).attr( "data_value" ) )
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));submit_val=false;return false;
				}
				
				 if(trimSpace($(this).val())==zero)
				 {
					 $(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					 $('#'+$(this).attr( "data_inner_error")).text($(this).attr( "new_invalid"));submit_val=false;return false;
				 }
				if(!number(trimSpace($(this).val()),''))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}
				

				if($(this).attr( "data_regex" )=='SG_phone' )
				{
					if (trimSpace($(this).val()) != "")
					{
						if((trimSpace($(this).val()).charAt(0) != 3 && trimSpace($(this).val()).charAt(0) != 6 && trimSpace($(this).val()).charAt(0) != 8 && trimSpace($(this).val()).charAt(0) != 9))
						{
							$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
							$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
						}
					}
				}
				if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data-length-error"));submit_val=false;return false;
				}
				$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
				$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide()
			//}
		}
		if($(this).attr( "data_field_type" )=='Number_zero')
		{	
			if(trimSpace($(this).val()) == $(this).attr( "data_value" ) )
			{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));$(this).focus().select();submit=false;return false;
			}
			if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
			{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));$(this).focus().select();submit=false;return false;
			}
			
			if(!number(trimSpace($(this).val()),''))
			{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));$(this).focus().select();submit=false;return false;
			}
			
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide()
		}		
		if($(this).attr( "data_field_type" )=='Non_mandy_alpha')
		{	
			if(trimSpace($(this).val())!=$(this).attr( "data_value" ) )
			{
				if($(this).val().length<$(this).attr( "data_min_length" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}
				if($(this).attr( "data_regex" )=='alpha_space_dot')
				{
					if(!alpha_space_dot(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha')
				{
					if(!alpha(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha_spl_1')
				{
					if(!alpha_spl_1(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha_spl_all')
				{
					if(!alpha_spl_all(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if(!spl_check(trimSpace($(this).val()),''))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}		
			}
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide()
		}
		if($(this).attr( "data_field_type" )=='Non_mandy_number')
		{	
			if($(this).val()!=$(this).attr( "data_value" ) )
			{
				if($(this).val().length<$(this).attr( "data_min_length" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}
				/*if(trimSpace($(this).val())==zero)
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}*/
				if(trimSpace($(this).val())==zero)
				 {
					 $(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					 $('#'+$(this).attr( "data_inner_error")).text($(this).attr( "new_invalid"));submit_val=false;return false;
				 }
				if(!number(trimSpace($(this).val()),''))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}
				if($(this).attr( "data_regex" )=='SG_phone' )
				{
					if (trimSpace($(this).val()) != "")
					{
						if((trimSpace($(this).val()).charAt(0) != 3 && trimSpace($(this).val()).charAt(0) != 6 && trimSpace($(this).val()).charAt(0) != 8 && trimSpace($(this).val()).charAt(0) != 9))
						{
							$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
							$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
						}
					}
				}
			}
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide()
		}
		
		if($(this).attr( "data_field_type" )=='Non_mandy_alpha_number')
		{	
			if($(this).val()!=$(this).attr( "data_value" ) )
			{
				if($(this).val().length<$(this).attr( "data_min_length" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}
				if(trimSpace($(this).val())==zero)
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}
				if($(this).attr( "data_regex" )=='alphanumeric')
				{
					if(!alphanumeric(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='passport')
				{
					if(!passport($(this).val()))
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='nric')
				{
					if(!nric($(this).val()))
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='email')
				{		
					if(!email($(this).val()))
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
					if(trimSpace($(this).val()).charAt(0) == "-" || trimSpace($(this).val()).charAt(0) == "." || trimSpace($(this).val()).charAt(0) == "_")
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;		
					}
				}
				if($(this).attr( "data_regex" )=='alpha_numeric_spl_1')
				{
					if(!alpha_numeric_spl_1(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha_numeric_spl_all')
				{
					if(!alpha_numeric_spl_all(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alphanumericamp')
				{
					if(!alphanumericamp(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
					}
				}
				if(!spl_check(trimSpace($(this).val()),''))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit_val=false;return false;
				}
			}
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide()
		}
		submit_val=true;		
	})			

	$('.req').change(function(){		
		if($(this).attr( "data_field_type" )=='radio')
		{	
			var category =$("[name="+$(this).attr( 'data_value' )+"]"); 
			var check1 = 0;
			for(i=0;i<category.length;i++){
					if(category[i].checked){
					check1++;break;
				}
			}
			if(check1){
			}else{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));
				$('#pageErr').show();$(this).focus(); submit_val=false;return false; 
			}
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$("[name="+$(this).attr( 'data_value' )+"]").parent().removeClass("radioBtnerror");
			$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide();
		}
		if($(this).attr( "data_field_type" )=='drop_down')
		{	
			if( trimSpace($(this).val()) == '' || trimSpace($(this).val()) == '0' )
			{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$(this).css('color','#333');
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));$(this).focus();submit_val=false;return false;
			}
			if($(this).attr( "data_value" )=='DD' )
			{
				//$(this).attr( "data_dd",$(this).val() );
				dd=$(this).val()
			}
			if($(this).attr( "data_value" )=='MM' )
			{
				//$(this).attr( "data_mm",$(this).val() );
				mm=$(this).val();
			}
			if($(this).attr( "data_value" )=='YYYY' )
			{
				//$(this).attr( "data_yyyy",$(this).val() );
				yy=$(this).val()
			}

			if($(this).attr( "data_regex" )=='DOB')
			{
				if (dd != 0 && mm != 0 && yy != 0)
				{
					var today_date=new Date();
					var birth_year = year = yy;
					var birth_month = month = mm;
					var birth_day = date = dd;
					var today_year = today_date.getFullYear();
					var today_month = today_date.getMonth();
					var today_day = today_date.getDate();
					age = today_year - birth_year;

					if ( today_month < (birth_month - 1)) { age--; }
					if (((birth_month - 1) == today_month) && (today_day < birth_day)) { age--; }

					if(year % 4 == 0)
					{
						if(month ==02 && date >29)
						{
							$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
							$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));$(this).focus().select();submit_val=false;return false;
						}
					}
					else if(month ==02 && date > 28)
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));$(this).focus().select();submit_val=false;return false;
					}
					if(month ==04 || month ==06 || month ==09 || month ==11)
					{
						if(date >30)
						{
							$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
							$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));$(this).focus().select();submit_val=false;return false;
						}
					}
				
				}
			}
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide()
		}
		if($(this).attr( "data_field_type" )=='check_box')
		{	
			if($(this).is(":not(:checked)"))
			{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));$(this).focus().select();submit_val=false;return false;
			}
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide()
		}
		if($(this).attr( "data_field_type" )=='check_box_multi')
		{	
			 var fields = $("input[name='"+$(this).attr( "data_value")+"']").serializeArray();
			if (fields.length == 0) 
			{ 			
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));$(this).focus().select();submit_val=false;return false;
			} else
			{
				$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
				$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide()
			}			 
		}
		submit_val=true;		
	})
})

function submit_form(val,submit_val)
{
	$("."+val).each(function() {		
		if($(this).attr( "data_field_type" )=='Alpha')
		{			
			if(trimSpace($(this).val()) == $(this).attr( "data_value" ))
			{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));
				$('#pageErr').show();submit=false;
			} else if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
			{
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
				//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;
			} else if($(this).attr( "data_regex" )=='alpha_space_dot')
			{
				if(!alpha_space_dot(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			} else if($(this).attr( "data_regex" )=='alpha')
			{
				if(!alpha(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			}else if($(this).attr( "data_regex" )=='alpha_spl_1')
			{
				if(!alpha_spl_1(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			}else if($(this).attr( "data_regex" )=='alpha_spl_all')
			{
				if(!alpha_spl_all(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			}else if($(this).attr( "data_regex" )=='alpha_lang')
			{
				if(!alpha_lang(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			}else if(!spl_check(trimSpace($(this).val()),''))
			{
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
				//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;
			}
			else {
				$('#'+$(this).attr( "data_inner_error")).text("");
				$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
				$('#pageErr').hide();
			}
			
		}
		else if($(this).attr( "data_field_type" )=='AlphaNumber')
		{				

			if(trimSpace($(this).val()) == $(this).attr( "data_value" ))
			{
				if($(this).hasClass('maskedId')){
					$('#'+$(this).next().attr( "data_inner_error")).text($(this).next().attr( "data_missing"));
					$(this).next().removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
				else{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
				
			} else if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
			{
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
				//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;
			} else if(trimSpace($(this).val())==zero)
			{
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
				//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;
			} else if($(this).attr( "data_regex" )=='alphanumeric')
			{
				if(!alphanumeric(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			} else if($(this).attr( "data_regex" )=='passport')
			{

				if(!passport($(this).val()))
				{	
					
					if($(this).hasClass('maskedId')){
						$('#'+$(this).next().attr( "data_inner_error")).text($(this).next().attr( "data_invalid"));
						//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;
					}
					else{
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
						//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;
					}
					
				}
			} else if($(this).attr( "data_regex" )=='nric')
			{
				if(!nric($(this).val()))
				{	

					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			} else if($(this).attr( "data_regex" )=='email')
			{		
				if(!email($(this).val()))
				{	
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
				if(trimSpace($(this).val()).charAt(0) == "-" || trimSpace($(this).val()).charAt(0) == "." || trimSpace($(this).val()).charAt(0) == "_")
				{	
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;		
				}
			} else if($(this).attr( "data_regex" )=='alpha_numeric_spl_1')
			{
				if(!alpha_numeric_spl_1(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			} else if($(this).attr( "data_regex" )=='alpha_numeric_spl_all')
			{
				if(!alpha_numeric_spl_all(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			} else if($(this).attr( "data_regex" )=='alphanumericamp')
			{
				if(!alphanumericamp(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			} else if(!spl_check(trimSpace($(this).val()),''))
			{
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;
			} else {
				$('#'+$(this).attr( "data_inner_error")).text('');
				$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#pageErr').hide();
			}
			
		}
		
		else if($(this).attr( "data_field_type" )=='AlphaNumberSplChar')
		{	
			if($(this).val() == $(this).attr( "data_value" ))
			{
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;
			}else if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
			{
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
				//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;
			}else if(trimSpace($(this).val())==zero)
			{
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
				//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;
			}else if($(this).attr( "data_regex" )=='alphanumeric')
			{
				if(!alphanumeric(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			}else if($(this).attr( "data_regex" )=='passport')
			{
				if(!passport($(this).val()))
				{	
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			}else if($(this).attr( "data_regex" )=='nric')
			{
				if(!nric($(this).val()))
				{	
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			}else if($(this).attr( "data_regex" )=='email')
			{		
				if(!email($(this).val()))
				{	
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
				if(trimSpace($(this).val()).charAt(0) == "-" || trimSpace($(this).val()).charAt(0) == "." || trimSpace($(this).val()).charAt(0) == "_")
				{	
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;	
				}
			}else if($(this).attr( "data_regex" )=='alpha_numeric_spl_1')
			{
				if(!alpha_numeric_spl_1(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			}else if($(this).attr( "data_regex" )=='alpha_numeric_spl_all')
			{
				if(!alpha_numeric_spl_all(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			}else if($(this).attr( "data_regex" )=='alphanumericamp')
			{
				if(!alphanumericamp(trimSpace($(this).val()),''))
				{
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
			} else {
				$('#'+$(this).attr( "data_inner_error")).text('');
				$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#pageErr').hide();
			}
			
		}
		else if($(this).attr( "data_field_type" )=='Number')
		{	
			if(trimSpace($(this).val()) == $(this).attr( "data_value" ) )
			{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));
				$('#pageErr').show();submit=false;
			}else if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
			{
				//$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
				$('#pageErr').show();submit=false;
			}else if(trimSpace($(this).val())==zero)
			{
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;
			}else if(!number(trimSpace($(this).val()),''))
			{
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;
			}
			else {
				$('#'+$(this).attr( "data_inner_error")).text('');
				$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#pageErr').hide();
			}
			
		}
		
		else if($(this).attr( "data_field_type" )=='Number_zero')
		{	
			if(trimSpace($(this).val()) == $(this).attr( "data_value" ) )
			{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;return false;
			}
			if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
			{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;return false;
			}
			
			if(!number(trimSpace($(this).val()),''))
			{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit=false;return false;
			}
			
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#pageErr').hide();
		}
		
		else if($(this).attr( "data_field_type" )=='radio')
		{	
			var category =$("[name="+$(this).attr( 'data_value' )+"]"); 
			var check1 = 0;
			for(i=0;i<category.length;i++){
					if(category[i].checked){
					check1++;break;
				}
			}
			if(check1){
				  
			  }else{
				  $("[name="+$(this).attr( 'data_value' )+"]").parent().addClass("radioBtnerror");
				  $(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				 $('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));
				$('#pageErr').show();$('#pageErr').show(); submit=false;return false; //.focus()
			  }
			   
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$("[name="+$(this).attr( 'data_value' )+"]").parent().removeClass("radioBtnerror");
			$('#pageErr').hide();
		}
		else if($(this).attr( "data_field_type" )=='drop_down')
		{	
			if( trimSpace($(this).val()) == '' || trimSpace($(this).val()) == '0')
			{
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$(this).css('color','#333');
				//$('#pageErr').show();submit=false;return false;
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));submit=false;
			} else {
				$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
				$('#'+$(this).attr( "data_inner_error")).text('');$('#pageErr').hide();
			}
			
		}
		else if($(this).attr( "data_field_type" )=='check_box')
		{	
			if($(this).is(":not(:checked)"))
			{
				$(this).parent().addClass("unChecked");
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				//$('#pageErr').show();submit=false;return false;
				$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_missing"));submit=false;return false;
				
			 }
			 $(this).parent().removeClass("unChecked").addClass("checkBoxChecked")
			 $(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			 //$('#pageErr').hide();
			 $('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide()
		}
		else if($(this).attr( "data_field_type" )=='check_box_multi')
		{	
			 var fields = $("input[name='"+$(this).attr( "data_value")+"']").serializeArray();
			if (fields.length == 0) 
			{ 			
				$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
				$('#pageErr').show();submit_val=false;return false;
			} else
			{
				$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
				$('#pageErr').hide();
			}			 
		}
		else if($(this).attr( "data_field_type" )=='Non_mandy_alpha')
		{	
			if(trimSpace($(this).val())!=$(this).attr( "data_value" ) )
			{
				if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;return false;
				}
				if($(this).attr( "data_regex" )=='alpha_space_dot')
				{
					if(!alpha_space_dot(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha')
				{
					if(!alpha(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha_spl_1')
				{
					if(!alpha_spl_1(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;return false;
					}
				}
				if($(this).attr( "data_regex" )=='alpha_spl_all')
				{
					if(!alpha_spl_all(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;return false;
					}
				}
				if(!spl_check(trimSpace($(this).val()),''))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;return false;
				}		
			}
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#pageErr').hide();
		}
		else if($(this).attr( "data_field_type" )=='Non_mandy_number')
		{	
			if(trimSpace($(this).val())!=$(this).attr( "data_value" ) )
			{
				if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					//$('#pageErr').show();submit=false;return false;
					$('#pageErr').show();$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "new_invalid"));submit=false;return false;
				}
				if(trimSpace($(this).val())==zero)
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					//$('#pageErr').show();submit=false;return false;
					$('#pageErr').show();$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "new_invalid"));submit=false;return false;
				}
				if(!number(trimSpace($(this).val()),''))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					//$('#pageErr').show();submit=false;return false;
					$('#pageErr').show();$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "new_invalid"));submit=false;return false;
				}
				if($(this).attr( "data_regex" )=='SG_phone' )
				{
					if (trimSpace($(this).val()) != "")
					{
						if((trimSpace($(this).val()).charAt(0) != 3 && trimSpace($(this).val()).charAt(0) != 6 && trimSpace($(this).val()).charAt(0) != 8 && trimSpace($(this).val()).charAt(0) != 9))
						{
							$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
							$('#pageErr').show();submit=false;return false;
						}
					}
				}
			}
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#'+$(this).attr( "data_inner_error")).text('');$('#pageErr').hide();
		}
		else if($(this).attr( "data_field_type" )=='Non_mandy_alpha_number')
		{	
			if(trimSpace($(this).val())!=$(this).attr( "data_value" ) )
			{
				if(trimSpace($(this).val()).length<$(this).attr( "data_min_length" ))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					//$('#pageErr').show();submit=false;return false;
					$('#'+$(this).attr( "data_invalid")).text($(this).attr( "data_missing"));submit=false;
				} 
				else if(trimSpace($(this).val())==zero)
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					//$('#pageErr').show();submit=false;return false;
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit=false;
				} 
				else if($(this).attr( "data_regex" )=='alphanumeric')
				{
					if(!alphanumeric(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						//$('#pageErr').show();submit=false;return false;
					$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit=false;
					}
				}
				else if($(this).attr( "data_regex" )=='passport')
				{
					if(!passport($(this).val()))
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;
					}
				}
				else if($(this).attr( "data_regex" )=='nric')
				{
					if(!nric($(this).val()))
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;
					}
				}
				else if($(this).attr( "data_regex" )=='email')
				{		
					if(!email($(this).val()))
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;
					}
					if(trimSpace($(this).val()).charAt(0) == "-" || trimSpace($(this).val()).charAt(0) == "." || trimSpace($(this).val()).charAt(0) == "_")
					{	
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;	
					}
				}
				else if($(this).attr( "data_regex" )=='alpha_numeric_spl_1')
				{
					if(!alpha_numeric_spl_1(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#'+$(this).attr( "data_inner_error")).text($(this).attr( "data_invalid"));submit=false;
					}else{
						$('#'+$(this).attr( "data_inner_error")).text('');
						$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
						$('#pageErr').hide();
					}
				}
				else if($(this).attr( "data_regex" )=='alpha_numeric_spl_all')
				{
					if(!alpha_numeric_spl_all(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;
					}
				}
				else if($(this).attr( "data_regex" )=='alphanumericamp')
				{
					if(!alphanumericamp(trimSpace($(this).val()),''))
					{
						$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
						$('#pageErr').show();submit=false;
					}
				}
				else if(!spl_check(trimSpace($(this).val()),''))
				{
					$(this).removeClass('mandy_filled').addClass('mandy_notfilled');
					$('#pageErr').show();submit=false;
				}
				else{
					$('#'+$(this).attr( "data_inner_error")).text('');
					$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
					$('#pageErr').hide();
				}
			}
		}
		else{
			$(this).removeClass('mandy_notfilled').addClass('mandy_filled');
			$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide();
		}
		/*if( $('.errorCode').text().is(':visible')) {	
			return false;				
		} else {
			return true;
		}*/
		/*if($('.mandy_notfilled').length){
			return false;
		}*/
		submit=true;
	});
	if( $('.mandy_notfilled').length>0) {
		$('#pageErr').show();
		return false;				
	} else {
		return true;
	}
	if(submit==false)
	{
		return false;				
	}
	else
	{return true;}
}