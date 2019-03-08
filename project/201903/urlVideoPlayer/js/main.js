

/* 移除按鈕預設事件 */
$( 'body' ) .on( 'click', 'button', function( e ){ e.stopPropagation(); })

function removeInvoice( terget ){ $( terget ).parents( '.input' ).remove(); }

function newInvoice(){
    if( $( '.invoice-input' ).length < 5 ){
        var $input_frame = $( '.invoice-input' ).eq( 0 ).clone(),
            $input = $input_frame.find( 'input' ).removeClass( 'error' ).addClass( 'default' );
        var default_val = $input.data( 'default' );
        $input.val( default_val );
        $input_frame.appendTo( '.invoice-group' );
    }
}

$( '.input' ).find( 'input' ).each(function(){
    var $this = $( this ),
        default_val = $this.data( 'default' );
        $this.val( default_val );
});

$( '.form-list' ).on( 'focus', 'input[type="text"], textarea, select', function(){
    var $this = $( this ),
        this_tag_name = $this.prop( 'tagName' ),
        default_val = $this.data( 'default' ) || '',
        error_val   = $this.data( 'error' ) || '',
        skip_val    = $this.data( 'skip' ) || '';
        skip_val    = skip_val != '' ? skip_val.split( ',' ) : '';
    if( this_tag_name === 'SELECT' ){ $this.parent().addClass( 'active' ); }
    if( $this.val() == default_val || $this.val() == '' || $this.val() == null ){ $this.removeClass( 'default error' ).val( '' ); }
    if( $this.val() == error_val ){ $this.removeClass( 'default error' ).val( '' ); }
    for( var i = 0; i < skip_val.length; i++ ){
        if( $this.val() == skip_val[ i ] ){
            $this.removeClass( 'default error' ).val( '' );
        }
    }
}).on( 'blur', 'input[type="text"], textarea, select', function(){
    var $this = $( this ),
        this_tag_name = $this.prop( 'tagName' ),
        default_val = $this.data( 'default' ),
        error_val = $this.data( 'error' );
    if( this_tag_name === 'SELECT' ){ $this.parent().removeClass( 'active' ); }
    if( $this.val() == '' || $this.val() == null ){ $this.addClass( 'default' ).val( default_val ); }
});


(function( $ ){

/* 日 期 */
$.fn.formDate = function(){
    var $this  = $( this ),
        $year  = $this.find( '.form-year' ),
        $month = $this.find( '.form-month' ),
        $date  = $this.find( '.form-date' );
    var 
    appendMonth = function( filter ){
        var select_year = Number( $year.val() );
        $month.empty().append( '<option>' + $month.data( 'default' ) + '</option>' );
        for( var m = 1 ; m <= 12 ; m++ ){
            $month.append( '<option>' + m + '</option>' );
        }  
    },
    appendDate = function( filter ){
        var select_month = Number( $month.val() ),
            all_date;
        switch ( select_month ){
            case 1: case 3: case 5: case 7: case 8: case 10: case 12: all_date = 31; break;
            case 4: case 6: case 9: case 11: all_date = 30; break;
            case 2: all_date = 29; break;
        }
        $date.empty().append( '<option>' + $date.data( 'default' ) + '</option>' );
        for( var d = 1 ; d <= all_date ; d++ ){
            $date.append( '<option>' + d + '</option>' );
        }  
    },
    init = function(){
        $year.append( '<option>' + $year.data( 'default' ) + '</option>' );
        for( var y = 2012 ; y <= 2016 ; y++ ){
            $year.append( '<option>' + y + '</option>' );
        }
    };
    init(); 
    // $year.change( appendMonth ).val( 2012 ).trigger( 'change' );
    appendMonth();
    $date.val( 2012 );
    $month.change( appendDate ).val( 1 ).trigger( 'change' );
    $date.val( 1 );
}

/* 地 址 */
$.fn.formAdress = function(){
    var city = ['基隆市', '台北市', '新北市', '桃園市', '新竹縣', '新竹市', '苗栗縣', '台中市', '彰化縣', '雲林縣', '南投縣', '嘉義縣', '嘉義市', '台南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣', '金門縣', '連江縣'];
    var dist = [['仁愛區', '中正區', '信義區', '中山區', '安樂區', '暖暖區', '七堵區'],['中正區', '大同區', '中山區', '萬華區', '信義區', '松山區', '大安區', '南港區', '北投區', '內湖區', '士林區', '文山區'],['板橋區', '新莊區', '泰山區', '林口區', '淡水區', '金山區', '八里區', '萬里區', '石門區', '三芝區', '瑞芳區', '汐止區', '平溪區', '貢寮區', '雙溪區', '深坑區', '石碇區', '新店區', '坪林區', '烏來區', '中和區', '永和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '蘆洲區', '五股區'],['桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '大溪區', '蘆竹區', '龍潭區', '龜山區', '大園區', '觀音區', '新屋區', '復興區'],['竹北市', '竹東鎮', '新埔鎮', '關西鎮', '新豐鄉', '峨眉鄉', '寶山鄉', '五峰鄉', '橫山鄉', '北埔鄉', '尖石鄉', '芎林鄉', '湖口鄉'],['東區', '北區', '香山區'],['苗栗市', '通霄鎮', '苑裡鎮', '竹南鎮', '頭份鎮', '後龍鎮', '卓蘭鎮', '西湖鄉', '頭屋鄉', '公館鄉', '銅鑼鄉', '三義鄉', '造橋鄉', '三灣鄉', '南庄鄉', '大湖鄉', '獅潭鄉', '泰安鄉'],['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '東勢區', '石岡區', '新社區', '和平區', '神岡區', '潭子區', '大雅區', '大肚區', '龍井區', '沙鹿區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'],['彰化市', '員林鎮', '和美鎮', '鹿港鎮', '溪湖鎮', '二林鎮', '田中鎮', '北斗鎮', '花壇鄉', '芬園鄉', '大村鄉', '永靖鄉', '伸港鄉', '線西鄉', '福興鄉', '秀水鄉', '埔心鄉', '埔鹽鄉', '大城鄉', '芳苑鄉', '竹塘鄉', '社頭鄉', '二水鄉', '田尾鄉', '埤頭鄉', '溪州鄉'],['斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '莿桐鄉', '林內鄉', '古坑鄉', '大埤鄉', '崙背鄉', '二崙鄉', '麥寮鄉', '臺西鄉', '東勢鄉', '褒忠鄉', '四湖鄉', '口湖鄉', '水林鄉', '元長鄉'],['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'],['太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山'],['東區', '西區'],['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'],['楠梓區', '左營區', '鼓山區', '三民區', '鹽埕區', '前金區', '新興區', '苓雅區', '前鎮區', '小港區', '旗津區', '鳳山區', '大寮區', '鳥松區', '林園區', '仁武區', '大樹區', '大社區', '岡山區', '路竹區', '橋頭區', '梓官區', '彌陀區', '永安區', '燕巢區', '田寮區', '阿蓮區', '茄萣區', '湖內區', '旗山區', '美濃區', '內門區', '杉林區', '甲仙區', '六龜區', '茂林區', '桃源區', '那瑪夏'],['屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '霧台鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉', '三地門'],['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '秀林鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '富里鄉', '卓溪鄉'],['臺東市', '成功鎮', '關山鎮', '長濱鄉', '海端鄉', '池上鄉', '東河鄉', '鹿野鄉', '延平鄉', '卑南鄉', '金峰鄉', '大武鄉', '達仁鄉', '綠島鄉', '蘭嶼鄉', '太麻里'],['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'],['金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'],['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉']];    
    var zipcode = [['200', '201', '202', '203', '204', '205', '206'],['100', '103', '104', '108', '110', '105', '106', '115', '112', '114', '111', '116'],['220', '242', '243', '244', '251', '208', '249', '207', '253', '252', '224', '221', '226', '228', '227', '222', '223', '231', '232', '233', '235', '234', '236', '237', '238', '239', '241', '247', '248'],['330', '320', '324', '334', '326', '335', '338', '325', '333', '337', '328', '327', '336'],['302', '310', '305', '306', '304', '315', '308', '311', '312', '314', '313', '307', '303'],['300', '300', '300'],['360', '357', '358', '350', '351', '356', '369', '368', '362', '363', '366', '367', '361', '352', '353', '364', '354', '365'],['400', '401', '402', '403', '404', '405', '406', '408', '411', '412', '413', '414', '420', '421', '423', '422', '426', '424', '429', '427', '428', '432', '434', '433', '435', '436', '437', '438', '439'],['500', '510', '508', '505', '514', '526', '520', '521', '503', '502', '515', '512', '509', '507', '506', '504', '513', '516', '527', '528', '525', '511', '530', '522', '523', '524'],['640', '630', '632', '648', '633', '654', '647', '643', '646', '631', '637', '649', '638', '636', '635', '634', '654', '653', '652', '655'],['540', '545', '542', '557', '552', '551', '558', '541', '555', '544', '553', '556', '546'],['612', '613', '628', '622', '621', '623', '616', '615', '614', '624', '611', '608', '606', '604', '603', '602', '607', '605'],['600', '600'],['700', '701', '702', '704', '708', '709', '710', '711', '712', '713', '714', '715', '716', '717', '718', '719', '720', '721', '722', '723', '724', '725', '726', '727', '730', '731', '732', '733', '734', '735', '736', '737', '741', '742', '743', '744', '745'],['811', '813', '804', '807', '803', '801', '800', '802', '806', '812', '805', '830', '831', '833', '832', '814', '840', '815', '820', '821', '825', '826', '827', '828', '824', '823', '822', '852', '829', '842', '843', '845', '846', '847', '844', '851', '848', '849'],['900', '920', '928', '946', '913', '908', '909', '904', '905', '907', '906', '923', '912', '911', '925', '940', '932', '924', '927', '926', '931', '929', '944', '947', '941', '902', '903', '921', '922', '942', '943', '945', '901'],['260', '265', '270', '261', '262', '263', '64', '269', '268', '266', '267', '272'],['970', '975', '981', '971', '973', '974', '972', '976', '977', '978', '979', '983', '982'],['950', '961', '956', '962', '957', '958', '959', '955', '953', '954', '964', '965', '966', '951', '952', '963'],['880', '885', '884', '881', '882', '883'],['893', '891', '890', '892', '894', '896'],['209', '210', '211', '212']];
    var $this = $( this ),
        $city = $this.find( '.form-city' ),
        $dist = $this.find( '.form-dist' );
    var 
    appendDist = function(){
        var select_city = $city.val(),
            cid = city.indexOf( select_city ),
            select_dist = dist[ cid ];
        $dist.empty();
        $dist.append( '<option>' + $dist.data( 'default' ) + '</option>' );
        if( select_dist ){
            for( var d in select_dist ){
                $dist.append( '<option>' + select_dist[ d ] + '</option>' );
            }   
        } 
    },
    init = function(){
        $city.append( '<option>' + $city.data( 'default' ) + '</option>' );
        for( var c in city ){
            $city.append( '<option>' + city[ c ] + '</option>' );
        }
    };
    init(); 
    $city.change( appendDist ).trigger( 'change' );
}

/* S e l e c t */
$.fn.formCustomSelect = function( obj ){
    var $this = $( this ),
        $select = new Array;
        item_list = obj.item,
        catalogue_array = new Array;
    var 
    append = function(){
        // console.log( 'ff' );
        var $this_select = $(this), 
            index = $this_select.data( 'index' ),  
            $next_select = $select[ index + 1 ], 
            val = $this_select.val(),
            get_val;
            catalogue_array[ index ] = val;
        for( var i = 0; i <= index; i++ ){
            var item = catalogue_array[ i ];
            get_val = !get_val ? item_list[ item ] : get_val[ item ];
        }
        if( get_val ){ create( $next_select, get_val ); }
    },
    create = function( $this_select, obj ){
        $this_select.empty().append( '<option>' + $this_select.data( 'default' ) + '</option>' );
        if( obj instanceof Array ){
            for( var i = 0; i < obj.length; i++ ){
                $this_select.append( '<option>' + obj[ i ] + '</option>' );
            }
        }
        else{
            for( var i in obj ){
                $this_select.append( '<option>' + i + '</option>' );
            }
        }
    }
    init = function(){
        for( var i = 0; i < obj.select.length; i++ ){
            $select[ i ] = $( obj.select[ i ] );
            $select[ i ].data( 'index', i ).change( append );
        }
        create( $select[ 0 ], obj.item );
    };
    init(); 
}

/* 驗 證 大 大 */
$.fn.formValidate = function( obj, callback ){
    // console.log( 'formValidate' );
    var $this = $( this );
    var validate = true,
        alert_message = '';
    var invoiceReg = /^[^0-9]{2}[0-9]{8}$/,
        emailReg   = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
        phoneReg   = /^[09]{2}[0-9]{8}$/,
        ChineseReg = /[^\u4e00-\u9fa5]/;
    var rsp = new Object;
    // 驗證字串 
    String.prototype.verify = function( kind ){
        var val = this.toString();
        // 空值
        if( kind == 'chineseTraditional' ){
            if( ChineseReg.test( val ) ){ return false; }
        }
        if( kind == 'phone' ){
            if( !phoneReg.test( val ) ){ return false; } 
        }
        if( kind == 'TEL' ){
            if( !phoneReg.test( val ) ){ return false; } 
        }
        if( kind == 'mobile' ){
            if( !phoneReg.test( val ) ){ return false; } 
        }
        if( kind == 'email' ){
            if( !emailReg.test( val ) ){ return false; } 
        }
        if( kind == 'invoice' ){
            if( !invoiceReg.test( val ) ){ return false; } 
        }
        return val;    
    };
    for( var thiskey in obj ){
        var $this_item = $this.find( obj[ thiskey ] ),
            this_val,
            this_tag_name = $this_item.prop( 'tagName' ),
            this_type = $this_item.prop( 'type' ),
            this_length = $this_item.length;
        if( $this_item.length === 0 ){
            alert_message += '，' + thiskey + '-無資料'; 
            validate = false;
            this_val = false;
        }
        else if( this_tag_name == 'SELECT' ){
            var $this_input = $this_item, 
                val = $this_input.val(),    
                default_val = $this_input.data( 'default' ) || '',
                error_val = $this_input.data( 'error' ) || '';
            if( val === default_val || val === error_val ){
                $this_input.val( default_val ).addClass( 'error' );
                validate = false;
                alert_message += '，' + error_val; 
                this_val = false;
            }
            else{
                this_val = val;
            }
        }
        // 有設定錯誤訊息會驗證是否打勾 若未設定則回傳是否打勾
        else if( this_type == 'checkbox' ){
            for( var i = 0; i < this_length; i++ ){
                var $this_input = $this_item.eq( i ),   
                    this_name =  $this_input.attr( 'name' ),
                    val = $this_input.prop( 'checked' ),
                    check_error_val = $this_input.data( 'error' ) || '';
                if( !val && check_error_val ){
                    validate = false;
                    alert_message += '，' + check_error_val;
                } 
                if( this_length > 1 ){
                    if( i == 0 ){ 
                        this_val = new Object;
                    }
                    this_val[ this_name ] = val;
                }
                else{
                    this_val = val;
                }
            }
        }
        else if( this_type == 'radio' ){
            for( var i = 0; i < this_length; i++ ){
                var $this_input = $this_item.eq( i );
                    value =  $this_input.data( 'value' ) || '',
                    val = $this_input.prop( 'checked' ); 
                if( val ){
                    this_val = value;
                    break;
                }
            }
        }
        else{
            for( var i = 0; i < this_length; i++ ){
                var $this_input = $this_item.eq( i ),   
                    val = $this_input.val(),    
                    default_val = $this_input.data( 'default' ) || '',
                    error_val = $this_input.data( 'error' ) || '',
                    this_validate = true;
                switch( thiskey ){
                    case 'name':
                        // 驗證僅能輸入中文
                        if( !val.verify( 'chineseTraditional' ) ){
                            this_validate = false;
                            validate = false;
                        }
                    break; 
                    case 'address':
                    break; 
                    case 'email':
                        if( !val.verify( 'email' ) ){
                            this_validate = false;
                            validate = false;
                        }
                    break;
                    case 'phone':
                        if( !val.verify( 'phone' ) || ( val.length !== 9 && val.length !== 10 ) ){
                            this_validate = false;
                            validate = false;
                        }
                    break;
                    case 'invoice':
                        if( !val.verify( 'invoice' ) || val.length !== 10 ){
                            this_validate = false;
                            validate = false;
                        }
                    break;
                    case 'captcha':
                        var captcha = String( $this_input.data( 'captcha' ) );
                        // 驗證 不分大小寫 if( val.toLowerCase() !== captcha )
                        if( val !== captcha ){
                            this_validate = false;
                            validate = false;
                        }
                    break;
                }
                console.log( $this_input.data( 'null' ) );
                if( val === '' || val === null || !val || val === default_val || val === error_val || !this_validate ){ 
                    if( $this_input.data( 'null' ) === true || $this_input.data( 'null' ) === 'true' ){
                        console.log( 'allow' );
                        this_val = val; 
                        return;
                    }
                    $this_input.val( error_val ).addClass( 'error' );
                    if( !alert_message.match( error_val ) ){
                        alert_message += '，' + error_val;
                    }
                    validate = false;
                    switch( thiskey ){
                        case 'invoice':
                            this_val = this_val || new Array; // 避免發票錯誤
                            this_val.push( false );
                        break;
                        default:
                            this_val = false; 
                        break;
                    }
                }
                else{
                    switch( thiskey ){
                        case 'invoice':
                            if( this_val ){
                                if( this_val.indexOf( val ) === -1 ){
                                    this_val.push( val );
                                }
                                else{
                                    $this_input.val( error_val ).addClass( 'error' );
                                    if( !alert_message.match( error_val ) ){
                                        alert_message += '，' + error_val;
                                    }
                                    validate = false;
                                    this_val.push( false );
                                }
                            }
                            else{
                                this_val = this_val || new Array; // 避免發票錯誤
                                this_val.push( val );
                            }
                        break;
                        default:
                            this_val = val; 
                        break;
                    }
                }
                // console.log( this_val );
            }
        }
        rsp[ thiskey ] = this_val;
    }
    if( callback ){
        rsp[ 'alertMessage' ] = alert_message.substring( 1 );
        rsp[ 'validate' ] = validate;
        callback( rsp );
    }
}

})( $ );

function submitForm( form ){
    $( form ).formValidate({
        nametChi:    '.form-name',
        number:      '.form-number',
        time:        '.form-time',
        zoneCode:    '.form-code',
        phoneNumber: '.form-phoneNumber',
        phoneExt:    '.form-ext',
        mobile:      '.form-mobile',
        service:     '.form-service',
    }, function( rsp ){
        // console.log( rsp );
        // <input type="hidden" id="_paramOrder" name="_paramOrder" value="nametChi,number,time,zoneCode,phoneNumber,phoneExt,mobile,service"> 
        // <input type="hidden" id="_paramAlias" name="_paramAlias" value="中文姓名,身分證字號,希望房貸專員回電時間,聯絡電話區碼,聯絡電話,分機,行動電話,希望提供的服務"> 
        console.log(
            rsp.nametChi + ',' +
            rsp.number + ',' +
            rsp.time + ',' +
            rsp.zoneCode + ',' +
            rsp.phoneNumber + ',' +
            rsp.phoneExt + ',' +
            rsp.mobile + ',' +
            rsp.service
        );
        $( '#_paramOrder' ).attr(
            'value', 
            rsp.nametChi + ',' +
            rsp.number + ',' +
            rsp.time + ',' +
            rsp.zoneCode + ',' +
            rsp.phoneNumber + ',' +
            rsp.phoneExt + ',' +
            rsp.mobile + ',' +
            rsp.service
        );
        if( rsp.validate ){
            console.log( '資料驗證無誤' );
            $( '#citiForm' ).submit();
            return true;
        }
        else{
            console.log( '資料驗證有誤' );
            // if( !rsp.agree ){
            //     alert( '請同意提供個人資料做為活動參加使用' );
            // }
            return false;
        }
    })
}


