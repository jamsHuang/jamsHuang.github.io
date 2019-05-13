var registorUrl = 'https://uat.newwebatm.citibank.com.tw/extfunc12/kanacpindexhandler/sendFormData';
var captchaUrl = 'https://uat.newwebatm.citibank.com.tw/extfunc12/captcha.png?cc=';
var formSubmitUrl = 'https://uat.newwebatm.citibank.com.tw/extfunc12/page/cp/thanksPage?_ar=1';
if(window.location.hostname == 'www.citibank.com.tw'){
    registorUrl = 'https://pat.webatm.citibank.com.tw/extfunc12/kanacpindexhandler/sendFormData';
    captchaUrl =  'https://pat.webatm.citibank.com.tw/extfunc12/captcha.png?cc=';
    formSubmitUrl = 'https://pat.webatm.citibank.com.tw/extfunc12/page/cp/thanksPage?_ar=1';
}
if(window.location.hostname != 'citidemo.agendatw.com' && window.location.protocol != 'file:' && window.location.hostname != 'localhost'){
    if(window.location.protocol != 'https:') {
       location.href = location.href.replace("http://", "https://");
    }
}
var citiFormDefault;

$(document).ready(function(){
    citiFormDefault = document.getElementById('citiForm');
    $('.maskedId').dPassword({
        duration:2000,
        prefix:'new_'
    });

    $(window).bind("pageshow", function() {   // reset all input if browser history back
        citiFormDefault.reset();
    });


    var icidVal = getQueryVariable('icid');
    var ecidVal = getQueryVariable('ecid');
    $('#icid').val(icidVal);
    $('#ecid').val(ecidVal);
    captchaImg('captchaImg');
    document.getElementById('captchaImg').addEventListener('click',function(){
        captchaImg('captchaImg');
    });
    cityOptions();

    //email
    var tagArray = [];
    var availableTags = [
        "@gmail.com",
        "@yahoo.com",
        "@yahoo.com.tw",
        "@hotmail.com",
        "@livemail.com"
    ];
    $("#email").keyup(function (e) {
        console.log('ggggg');
        if ($(this).val().split("@")[0] == "") {
            $(this).val("");
        }
        for (i in availableTags) {
            tagArray[i] = $(this).val().split("@")[0] + availableTags[i];
        }

    });
    $("#email").autocomplete({
        disabled: false,
        source: tagArray,
        // select: function( event, ui ) {
        //     console.log('select');
        // },
        // search: function( event, ui ) {
        //     console.log('search');
        // },
        // search: function( event, ui ) {
        //     console.log('search');
        // },
        // response: function( event, ui ) {
        //     console.log('response');
        // },
        // focus: function( event, ui ) {
        //     console.log('focus');
        // },
        close: function( event, ui ) {
            // console.log('close');
            var _mc=$('#email');
            check_changefn(_mc,"email",(validateEmail(_mc.val())),_mc.parent(),_mc.parent().data('error'));
        }
    });

    $('.inputBox0').each(function(k){

        var _this=$(this).find('input');

        _this.focusout(function(){
            chenkHD(_this);
        }).focus(function(){
            var _inputOO={};
            var _inputBox=_this.parent();
            _inputBox.removeClass('error').find('.msgBox').html('');
        });
        // _this.change(function(){
        //    chenkHD(_this);
        // });
        function chenkHD(_mc){
             var _inputOO={};
            var _inputBox=_mc.parent();
            _inputOO['error']=_inputBox.data('error');
            _inputOO['null']=_inputBox.data('null');
            _inputOO['val']=_mc.val();
            if (_inputOO.val == "") {
                _inputBox.removeClass('ok').addClass('error').find('.msgBox').html(_inputOO.null);
            } else {
                check_changefn(_this,"ID_NO",(checkID(_inputOO.val)),_inputBox,_inputOO.error);
                check_changefn(_this,"CHI_NAME",(!(_inputOO.val.length< 2) && ((/^[\u4E00-\u9FFF\u3400-\u4DFF]+$/.test(_inputOO.val)))) ,_inputBox,_inputOO.error);
                check_changefn(_this,"mobile",( !(_inputOO.val.length!== 10) && (isNum(_inputOO.val)) ),_inputBox,_inputOO.error);
                check_changefn(_this,"email",((validateEmail(_inputOO.val))) ,_inputBox,_inputOO.error);
                check_changefn(_this,"captcha",( !(_inputOO.val.length!== 4) && (isNum(_inputOO.val)) ),_inputBox,_inputOO.error);
                // if(_this.attr('id')=='captcha') console.log(!(_inputOO.val.length!== 4)+'******'+(isNum(_inputOO.val)) );
            }
        }
        function check_changefn(_mc,_name,_boolean,_this,_errormsg){
            // console.log(_mc,_name,_boolean,_this,_errormsg);
            //true 對
            //false 錯

            if(_mc.attr('id')==_name){
                if (_boolean) _this.removeClass('error').addClass('ok').find('.msgBox').html('');
                else _this.removeClass('ok').addClass('error').find('.msgBox').html(_errormsg);
            }
        }
    });


    $('#city,#neighborbank').focus(function(){
        $(this).removeClass('error');
    });
    // ajax
    $('#submitBtn').click(function(e){
        e.preventDefault();
        var checkcode = 1;
        specialstrcheck();
        // if (citiFormDefault.ID_NO.value == "") {
        //     checkcode = 0;
        //     alert("請輸入身分證字號");
        //     citiFormDefault.ID_NO.focus();
        //     return false;
        // } else {
        //     if (!checkID(citiFormDefault.ID_NO.value)) {
        //         checkcode = 0;
        //         alert("請輸入正確身分證字號格式");
        //         citiFormDefault.ID_NO.focus();
        //         return false;
        //     }
        // }
        // if (citiFormDefault.CHI_NAME.value == "") {
        //     checkcode = 0;
        //     alert("請輸入中文姓名");
        //     citiFormDefault.CHI_NAME.focus();
        //     return false;
        // } else {
        //     if (!(/^[\u4E00-\u9FFF\u3400-\u4DFF]+$/.test(citiFormDefault.CHI_NAME.value))) {
        //         checkcode = 0;
        //         alert("請輸入中文姓名");
        //         citiFormDefault.CHI_NAME.focus();
        //         return false;
        //     }
        // }
        // if (citiFormDefault.mobile.value == "") {
        //     checkcode = 0;
        //     alert("請輸入行動電話");
        //     citiFormDefault.mobile.focus();
        //     return false;
        // } else {
        //     if (citiFormDefault.mobile.value.length !== 10) {
        //         checkcode = 0;
        //         alert("請輸入十位數的行動電話");
        //         citiFormDefault.mobile.focus();
        //         return false;
        //     }
        //     if (!(/^09/.test(citiFormDefault.mobile.value))) {
        //         checkcode = 0;
        //         alert("行動電話必須為09開頭");
        //         citiFormDefault.mobile.focus();
        //         return false;
        //     }
        //     if (!(chkNum(citiFormDefault.mobile))) {
        //         checkcode = 0;
        //         citiFormDefault.mobile.focus();
        //         return false;
        //     }
        // }
        // if (citiFormDefault.email.value == "") {
        //     checkcode = 0;
        //     alert("請輸入Email");
        //     citiFormDefault.email.focus();
        //     return false;
        // } else {
        //     if (!(validateEmail(citiFormDefault.email.value))) {
        //         checkcode = 0;
        //         alert("Email格式錯誤");
        //         citiFormDefault.email.focus();
        //         return false;
        //     }
        // }

        $('.inputBox0').each(function(){
            var _this=$(this).find('input');
            var _inputOO={};
            var _inputBox=_this.parent();
            _inputOO['error']=_inputBox.data('error');
            _inputOO['null']=_inputBox.data('null');
            _inputOO['val']=_this.val();
            if (_inputOO.val == "")
            {
              _inputBox.removeClass('ok').addClass('error').find('.msgBox').html(_inputOO.null);
              checkcode = 0;
              //console.log('error:'+_inputBox.data('error'));
              alert('請填入完整資訊');
              return false;
            }
        });
        
        if (citiFormDefault.city.value === "0") {
            checkcode = 0;
            // alert('請選擇縣市');
            // citiFormDefault.city.focus();
            $(citiFormDefault.city).addClass('error');
            // return false;
        }
        if (citiFormDefault.neighborbank.value === "0") {
            checkcode = 0;
            // alert('請選擇分行');
            // citiFormDefault.neighborbank.focus();
            $(citiFormDefault.neighborbank).addClass('error');
            // return false;
        }
        // if(citiFormDefault.recommend_type){
        //     if (citiFormDefault.recommend_type.value == "recommend_y") {
        //         if (citiFormDefault.code.value == "") {
        //             checkcode = 0;
        //             alert("請輸入推薦/活動代碼");
        //             citiFormDefault.code.focus();
        //             return false;
        //         }
        //     }
        //     else if(citiFormDefault.recommend_type.value == ""){
        //         checkcode = 0;
        //         alert("請選擇是否有花旗推薦/活動代碼");
        //         return false;
        //     }
        // }
        // if (citiFormDefault.captcha.value == "") {
            // checkcode = 0;
            // alert("請輸入驗證碼");
            // citiFormDefault.captcha.focus();
            // return false;
        // }
        if (!citiFormDefault.agreement.checked) {
            checkcode = 0;
            alert('請勾選"本人已閱讀並瞭解花旗(台灣)銀行「蒐集、處理及利用個人資料告知事項」"');
            // return false;
        }

        if(checkcode==0) return false;

        if(checkcode === 1){
            var ecid_icid = [];
            if($('#ecid').val() && $('#icid').val()){
                ecid_icid.push($('#ecid').val());
                ecid_icid.push($('#icid').val());
            }
            else{
                ($('#ecid').val()) ? ecid_icid.push($('#ecid').val()) : ecid_icid.push($('#icid').val());
            }
            console.log('ecid_icid: ' + ecid_icid)
            console.log('runAjax')
            // data loading
            $('#dataCover').fadeIn(300);
            $.ajax({
                url: registorUrl,
                method: "POST",
                dataType: "json",
                xhrFields:{
                    withCredentials:true
                },
                timeout:40000,
                cache:false,
                data: {
                    ACTIVITY_CODE: 'CP03',
                    ECID_ICID: $('#ecid').val() ? $('#ecid').val() : $('#icid').val(),
                    ID_NO: $("#ID_NO").val(),
                    CHI_NAME: $("#CHI_NAME").val(),
                    MOB_TEL_NUM: $("#mobile").val(),
                    EMAIL_1: $('#email').val(),
                    RECOMMEND_CODE:'',
                    // RECOMMEND_CODE: $('#code').val(),
                    captcha: $('#captcha').val(),
                    NEAR_CITY: $('#city').val(),
                    NEAR_BRANCH: $('#neighborbank').val()
                },
                success: function(res) {
                    console.log(res)
                    $('#dataCover').hide();
                    if(res.result){
                        // alert('資料正確');
                        citiFormDefault.action = formSubmitUrl;
                        citiFormDefault.submit();

                    }
                    else if(res.error){
                        var error = res.error.split(', ');
                        var msg = '';
                        for(i in error){
                            switch(error[i]){
                                case 'ACTIVITY_CODE':
                                    msg += '活動代碼錯誤\n';
                                    break;
                                case 'ECID_ICID':
                                    msg += 'ecid_icid錯誤\n';
                                    break;
                                case 'ID_NO':
                                    msg += '身份證字號錯誤\n';
                                    break;
                                case 'CHI_NAME':
                                    msg += '中文姓名錯誤\n';
                                    break;
                                case 'MOB_TEL_NUM':
                                    msg += '行動電話錯誤\n';
                                    break;
                                case 'EMAIL_1':
                                    msg += 'Email錯誤\n';
                                    break;
                                case 'RECOMMEND_CODE':
                                    msg += '推薦/活動代碼錯誤\n';
                                    break;
                                case 'captcha':
                                    msg += '驗證碼錯誤\n';
                                    break;
                                case 'NEAR_CITY':
                                    msg += '鄰近縣市錯誤\n';
                                    break;
                                case 'NEAR_BRANCH':
                                    msg += '鄰近分行錯誤\n';
                                    break;
                            }
                        }
                        alert(msg);
                        captchaImg('captchaImg');
                    }
                },
                error:function(xhr, textstatus, message){
                  $('#dataCover').hide();
                  if(textstatus == 'timeout'){
                    $('body').append('<div style="display:none"><img src="/TWGCB/JPS/portal/KeepAlive.do?' + new Date().getTime() + '"></div>')
                    setTimeout(function(){
                        citiFormDefault.action = '/TWGCB/apfa/genfm/ProcessForm.do';
                        citiFormDefault.submit();
                    },800);
                    console.log('COLA資料送出失敗!轉換成KANA傳送資料\nStatus Code: ' + xhr.status + '\nStatus Message: ' + xhr.statusText);
                    // window.location.reload();
                  }
                  else
                  {
                    checkcode = 0;
                    alert("驗證碼錯誤");
                    console.log(textstatus);
                    console.log(message);
                    captchaImg('captchaImg');
                  }
                }
            });
        }else{
        }
    });

});

function captchaImg(e){
    var $this = document.getElementById(e);
    var min = 1,max = 1000, cc = Math.floor(Math.random() * (max - min + 1)) + min;
    $this.src = captchaUrl + cc;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}
function specialstrcheck() {

    var formsno = document.forms.length;

    var elementno = 0;

    for (i = 0; i < formsno; i++) {

        elementno = document.forms[i].length;

        for (j = 0; j < elementno; j++) {

            if (document.forms[i].elements[j].value.indexOf("'") >= 0 || document.forms[i].elements[j].value.indexOf("\"") >= 0 || document.forms[i].elements[j].value.indexOf("<") >= 0 || document.forms[i].elements[j].value.indexOf(">") >= 0 || document.forms[i].elements[j].value.indexOf("(") >= 0 || document.forms[i].elements[j].value.indexOf(")") >= 0 || document.forms[i].elements[j].value.indexOf(":") >= 0 || document.forms[i].elements[j].value.indexOf(";") >= 0 || document.forms[i].elements[j].value.indexOf("#") >= 0 || document.forms[i].elements[j].value.indexOf("+") >= 0 || document.forms[i].elements[j].value.indexOf("=") >= 0 || document.forms[i].elements[j].value.indexOf("\\") >= 0 || document.forms[i].elements[j].value.indexOf("$") >= 0 || document.forms[i].elements[j].value.indexOf("%") >= 0 || document.forms[i].elements[j].value.indexOf("&") >= 0 || document.forms[i].elements[j].value.indexOf("--") >= 0 || document.forms[i].elements[j].value.indexOf("\'") >= 0 || document.forms[i].elements[j].value.indexOf("select") >= 0 || document.forms[i].elements[j].value.indexOf("insert") >= 0 || document.forms[i].elements[j].value.indexOf("update") >= 0 || document.forms[i].elements[j].value.indexOf("union") >= 0 || document.forms[i].elements[j].value.indexOf("delete") >= 0) {

                document.forms[i].elements[j].focus();

                alert('欄位不可有特殊字元');

                return false;

            }

        }
    }
}
function isNum(chkStr) {

    var cmp = "0123456789";

    var rc = true;

    var cmpChar;


    for (var i = 0; i < chkStr.length; i++) {

        cmpChar = chkStr.substring(i, i + 1)

        if (cmp.indexOf(cmpChar) < 0) {

            rc = false;

            i = chkStr.length;

        }

    }

    return rc;

}
function checkID(v){
    var IsValid = 0;
    var id=v.toUpperCase();
    var kind;
    // var kind=document.all("ddl_idkind").options[document.all("ddl_idkind").selectedIndex].text;
    //檢查身分證字號
    if(/^[A-Z]{2}/g.test(v)){
        kind = 'RC';
    }
    else{
        kind = 'IC';
    }
    // console.log(kind)

    if (kind=="IC"){
        if (id.length != 10) return IsValid=0;

        if (isNaN(id.substr(1,9)) || (id.substr(0,1)<"A" ||id.substr(0,1)>"Z")){
            return(IsValid=0);
        }

        var head="ABCDEFGHJKLMNPQRSTUVXYWZIO";
        id = (head.indexOf(id.substring(0,1))+10) +''+ id.substr(1,9)
        var c_s =parseInt(id.substr(0,1)) +
        parseInt(id.substr(1,1)) * 9 +
        parseInt(id.substr(2,1)) * 8 +
        parseInt(id.substr(3,1)) * 7 +
        parseInt(id.substr(4,1)) * 6 +
        parseInt(id.substr(5,1)) * 5 +
        parseInt(id.substr(6,1)) * 4 +
        parseInt(id.substr(7,1)) * 3 +
        parseInt(id.substr(8,1)) * 2 +
        parseInt(id.substr(9,1)) +
        parseInt(id.substr(10,1));

        //判斷是否可整除
        if ((c_s % 10) != 0) return IsValid=0;

        //身分證字號正確
        return IsValid=1;

    //檢查居留證號碼
    }else if  (kind=="RC"){
        if (id.length != 10) return IsValid=0;

        if (isNaN(id.substr(2,8)) || (id.substr(0,1)<"A" ||id.substr(0,1)>"Z") || (id.substr(1,1)<"A" ||id.substr(1,1)>"Z")){
            return IsValid=0;
        }

        var head="ABCDEFGHJKLMNPQRSTUVXYWZIO";
        id = (head.indexOf(id.substr(0,1))+10) +''+ ((head.indexOf(id.substr(1,1))+10)%10) +''+ id.substr(2,8)
        var c_s =parseInt(id.substr(0,1)) +
        parseInt(id.substr(1,1)) * 9 +
        parseInt(id.substr(2,1)) * 8 +
        parseInt(id.substr(3,1)) * 7 +
        parseInt(id.substr(4,1)) * 6 +
        parseInt(id.substr(5,1)) * 5 +
        parseInt(id.substr(6,1)) * 4 +
        parseInt(id.substr(7,1)) * 3 +
        parseInt(id.substr(8,1)) * 2 +
        parseInt(id.substr(9,1)) +
        parseInt(id.substr(10,1));

        //判斷是否可整除
        if ((c_s % 10) != 0) return IsValid=0;
        //居留證號碼正確
        return IsValid=1;

    //檢查護照號碼
    // }else if  (kind=="護照號"){
    //     if (id.length > 20) return IsValid=0;
    //     //護照號碼正確
    //     return IsValid=1;
    //其他錯誤的格式

    }else{
        return IsValid=0;
    }
}

function chkNum(nn) {
    var cfield = citiFormDefault[nn];
    var rc = isNum($(nn).val());
    if (!rc) {
        alert("此欄位僅可輸入數字！");
        nn.focus();
    }
    return rc;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function cityOptions() {
    var branchAddr = {
        '臺北市': ['營業部','松江分行','信義分行','天母分行','中山分行','襄陽分行','士林分行','大安分行','中正分行','內湖分行','民生分行','松山分行','南京分行','南港分行','建成分行','復興分行','敦化分行'],
        '新北市': ['板橋分行','新莊分行','三重分行','土城分行','士林分行','永和分行','南港分行','基隆分行','新店分行'],
        '宜蘭縣': ['羅東分行'],
        '花蓮縣': ['羅東分行'],
        '苗栗縣': ['新竹分行','台中分行','民權分行'],
        '桃園市': ['桃園分行','中壢分行','北桃園分行'],
        '基隆市': ['基隆分行'],
        '連江縣': ['基隆分行'],
        '雲林縣': ['新竹分行','嘉義分行','斗六分行'],
        '新竹市': ['新竹分行','竹城分行'],
        '新竹縣': ['新竹分行'],
        '嘉義市': ['嘉義分行'],
        '嘉義縣': ['嘉義分行'],
        '彰化縣': ['彰化分行','員林分行'],
        '臺中市': ['台中分行','文心分行','豐原分行','中港分行','北台中分行','民權分行'],
        '臺東縣': ['高雄分行'],
        '臺南市': ['台南分行','永福分行','永康分行'],
        '南投縣': ['員林分行'],
        '南海諸島': ['高雄分行'],
        '屏東縣': ['高雄分行'],
        '高雄市': ['高雄分行','北高雄分行','苓雅分行','高美館分行','港都分行','新興分行']
    }

    var city = document.getElementById("city");
    var branch = document.getElementById("neighborbank");
    var cityCon = '<option value="0">請選擇縣市</option>';
    var branchCon = '<option value="0">請選擇分行</option>';
    for(i in branchAddr){
         cityCon += '<option value="'+i+'">'+i+'</option>';
    }
    $(city).append(cityCon);
    $(branch).append(branchCon);
    $(city).on('change',function(){
        branchCon = '<option value="0">請選擇分行</option>';
        for(i in branchAddr){
            if($(city).val() == i){
                branchAddr[i].forEach(function(v){

                    branchCon += '<option value="'+v+'">'+v+'</option>';
                });
            }
        }
        $(branch).html(branchCon);
    });

}
