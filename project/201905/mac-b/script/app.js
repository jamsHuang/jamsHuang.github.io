// import $ from 'jQuery';
import Vue from 'vue';
import Vuebar from 'vuebar';
import Swiper from 'Swiper';
import 'imports-loader?$=jquery!owl.carousel';

import MobileDetect from 'mobile-detect';

import './tracking';
import CITY from './city.json';
import BRANCH from './branch.json';
import {
    TimelineMax
} from 'gsap';
import reverse from 'reverse-regex';
const md = new MobileDetect(navigator.userAgent);


$(() => {
    $(document).on('click', '[track]', (e) => {
        const $this = $(e.target);
        const track = $this.attr('track');
        trackEvent(track);
    });
    let ind = 0;
    const href = window.location.href;
    if (href.indexOf('/asiamile') > -1) {
        ind = 0;
    }
    else if (href.indexOf('/cashrebate') > -1) {
        ind = 1;
    }
    else if (href.indexOf('/fxtd') > -1) {
        ind = 2;
    }
    else if (href.indexOf('/rsp') > -1) {
        ind = 3;
    }
    else if (href.indexOf('/rsp') > -1) {
        ind = 4;
    }

    const kv = new Swiper('.kv-container', {
        speed: 300,
        loop: true,
        parallax: true,
        initialSlide: ind,
        autoplay: 3000,
        paginationClickable: true,
        pagination: $('.kv-container').find('.swiper-pagination'),
        onSlideChangeEnd(swiper) {
            const rInd = swiper.realIndex;
            const ind = swiper.activeIndex;
            const slide = $(swiper.slides[ind]);
            const track = slide.attr('track');
            trackEvent('kv-' + rInd);
        }
    });


    const card = new Swiper('.card-container', {
        spaceBetween: 20,
        speed: 700,
        loop: true,
        autoplay: 2000,
        pagination: $('.card-container').parent().find('.swiper-pagination'),
    });



    var owl = $(".slider-container").owlCarousel({
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 1,
        dots: true,
        itemsScaleUp: false,
        slideSpeed: 500,
        navigation: false,
        pagination: true,
        stopOnHover: true,
        paginationNumbers: false,
        mouseDrag: true,
        touchDrag: true,
        rewindNav: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                autoplayTimeout: 10000
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            }
        },

    });
    // owl.on('translate.owl.carousel', function (event) {
    //     var el = event.target;
    //     var gif = $(el).find('.gif');
    //     gif.each((i, g) => {
    //         var $g = $(g);
    //         var src = $g.attr('src');
    //         var rnd = Math.floor(Math.random() * 1000);
    //         src = src.indexOf('?') > -1 ? src.substr(0, src.indexOf('?') + 1) + rnd : (src + '?' + rnd);
    //         $g.attr('src', src);
    //     })
    // });

    $(window).resize(function () {
        $(".slider-container").owlCarousel();
    });
})


let vm = new Vue({
    el: '#app',
    components: {
        // Twzipcode
    },
    created() {

    },
    mounted() {
        this.getCaptcha();
        const msg = '智富 比你想像的更近\n\n花旗智富管理傾聽你的夢想藍圖，按照適合你的計畫，達陣你的精采人生！\n\n啟用並刷全新花旗晶片金融卡，驚喜抽共1,000,000「亞洲萬里通」里數，月月抽10萬里數1名(共10名)，刷越多中獎機會越大！\n\n即刻行動\nhttps://www.citibank.com.tw/sim/citipriority/asiamile/index.htm';
        this.shareFB = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
        this.shareLine = `http://line.naver.jp/R/msg/text/?${encodeURIComponent(msg)}`;
        let search = decodeURIComponent(window.location.search.substring(1));
        const unserialize = str => {
            str = decodeURIComponent(str);
            var chunks = str.split('&'),
                obj = {};
            for (var c = 0; c < chunks.length; c++) {
                var split = chunks[c].split('=', 2);
                obj[split[0]] = split[1];
            }
            return obj;
        }
        this.search = unserialize(search);

        $(window).bind('scroll', this.onScroll.bind(this));
    },
    data: {
        shareFB: '',
        shareLine: '',
        isLine: md.mobile() || md.tablet(),
        search: '',
        city: CITY,
        branch: [],
        footer: {
            open: false,
            fixed: true
        },
        rule: {
            open: false
        },
        side: {
            open: false
        },
        form: {
            mask: '',
            real: '',
            captcha_pic: '',
            hasreco: '',
            ACTIVITY_CODE: '',
            ECID_ICID: '',
            ID_NO: '', //身分證字號
            CHI_NAME: '', //中文姓名
            MOB_TEL_NUM: '', //行動電話
            EMAIL_1: '', //EMAIL
            RECOMMEND_CODE: '', //推薦代碼
            captcha: '',
            NEAR_CITY: 0,
            NEAR_BRANCH: 0,
            agree: false,
            errorGroup: [],
            errorMsg: {}
        }
    },
    methods: {
        getMask(e) {
            var _this = $(e.target);
            var regex = /[^\d*]/g;
            var isValid = regex.test(_this.val());
            if (isValid) {
                _this.val(_this.val().replace(/[^\d*]/g, ''));
                return false;
            }
            var _val = _this.val() + "";
            var value = "";
            var maskedValue = "";
            var oldValue = this.form.ID_NO;
            var hiddenValue = "";
            value = _val.toUpperCase();
            if (value.length > 4) {
                maskedValue = value.substring(0, 4);
                var realValue = value.substring(0, 4);
                for (var i = 4; i < value.length; i++) {
                    var inputOneWord = value.substring(i, i + 1);
                    if (oldValue && oldValue.length > 4) {
                        var hiddenOneWord = oldValue.substring(i, i + 1);
                        if (inputOneWord == "*") {
                            realValue += hiddenOneWord;
                        } else {
                            realValue += inputOneWord;
                        }
                    } else {
                        realValue += inputOneWord;
                    }
                    maskedValue += "*";
                }
                this.form.ID_NO = realValue;
            } else {
                maskedValue = value;
                this.form.ID_NO = value
            }
            console.log(this.form.ID_NO);
            _this.val(maskedValue);

        },
        onScroll() {
            var kh = $('.kv').height();
            var scrollHeight = $('body')[0].scrollHeight;
            var top = $(window).scrollTop();
            var wt = top + window.innerHeight;
            var offsetTop = $('.footer-bar').offset().top + $('.footer-bar').height();
            if (top > scrollHeight * 0.05) {
                this.footer.open = true;
            } else {
                this.footer.open = false;
            }
            if (wt > offsetTop) {
                this.footer.fixed = true;
            } else {
                this.footer.fixed = false;;
            }
        },
        toggleRule() {
            const rule = this.$refs.rule;
            if (this.rule.open) {
                TweenMax.to(rule, 0.6, {
                    display: 'none',
                    height: 0
                })
            } else {
                TweenLite.set(rule, {
                    height: "auto",
                    display: 'block'
                })
                TweenMax.from(rule, 1, {
                    height: 0
                })
            }
            this.rule.open = !this.rule.open;
        },
        reBranch() {
            const branch = BRANCH[this.form.NEAR_CITY];

            if (branch) {
                this.branch = BRANCH[this.form.NEAR_CITY];
                this.form.NEAR_BRANCH = this.branch[0].key;
            } else {
                this.branch = [];
                this.form.NEAR_BRANCH = 0;

            }
        },
        getCaptcha() {
            this.form.captcha_id = Math.floor(Math.random() * 1000);
            this.form.captcha_pic = `https://uat.newwebatm.citibank.com.tw/extfunc12/captcha.png?cc=${this.form.captcha_id}`;
        },
        scroll_top() {
            const top = $('.side').offset().top;
            const h = $('.fhInner ').height();
            $("html, body").stop().animate({
                scrollTop: top - h
            }, '500');
        },
        open_side() {
            this.scroll_top();
            this.side.open = true;
        },
        close_side() {
            this.side.open = false;
        },
        toggle_side() {
            this.side.open = !this.side.open;
        },
        checkGroup(name) {
            return this.form.errorGroup.indexOf(name) > -1;
        },
        getErrorMsg(name) {
            const errorMsg = {
                ID_NO: '請輸入身分證字號',
                CHI_NAME: '請輸入姓名',
                EMAIL_1: '請輸入E-MAIL',
                MOB_TEL_NUM: '請輸入行動電話',
                NEAR_CITY: '請選擇鄰近分行縣市',
                NEAR_BRANCH: '請選擇鄰近分行',
                RECOMMEND_CODE: '請填寫花旗推薦代碼',
                hasreco: '請勾選是否有花旗推薦代碼',
                captcha: '請輸入正確的驗證碼',
                agree: '請勾選本人已閱讀並瞭解花旗(台灣)銀行「蒐集、處理及利用個人資料告知事項」',
            }
            if (this.form.errorGroup.indexOf(name) > -1) {
                return errorMsg[name];
            }
        },
        checkForm() {
            let error = [];
            this.form.errorGroup = [];

            const eRex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            const pRex = /^09\d{2}-?\d{3}-?\d{3}$/;
            // const iRex = /([A-Z]|[a-z])\d{9}/;

            const iRex = /\d{9}/;

            if (!iRex.test(this.form.ID_NO)) {
                error.push('請輸入身分證字號');
                this.form.errorGroup.push('idnum');
            }
            if (this.form.CHI_NAME.length <= 1) {
                error.push('請輸入姓名')
                this.form.errorGroup.push('CHI_NAME');
            }
            if (!eRex.test(this.form.EMAIL_1)) {
                error.push('請輸入E-MAIL');
                this.form.errorGroup.push('EMAIL_1');
            }
            if (!pRex.test(this.form.MOB_TEL_NUM)) {
                error.push('請輸入行動電話');
                this.form.errorGroup.push('MOB_TEL_NUM');
            }
            if (this.form.hasreco.length <= 0) {
                error.push('請勾選是否有花旗推薦代碼');
                this.form.errorGroup.push('hasreco');
            }
            if (!this.form.agree) {
                error.push('請同意遵守活動辦法等相關說明');
                this.form.errorGroup.push('agree');
            }
            if (this.form.NEAR_CITY == 0) {
                error.push('請選擇分行縣市');
                this.form.errorGroup.push('NEAR_CITY');
            }
            if (this.form.NEAR_BRANCH == 0) {
                error.push('請選擇分行');
                this.form.errorGroup.push('NEAR_BRANCH');
            }
            if (this.form.captcha.length < 4) {
                error.push('請輸入驗證碼');
                this.form.errorGroup.push('captcha');
            }
            // if ((this.form.hasreco === 'true') && this.form.RECOMMEND_CODE.length <= 4) {
            //     error.push('請輸入優惠代碼');
            //     this.form.errorGroup.push('RECOMMEND_CODE');
            // }
            if (error.length > 0) {
                let text = '';
                const er = error.map((val) => {
                    text += val + '\n'
                })
                // alert(text);
                return false;
            } else {
                return true;
            }
        },
        getCity() {
            const key = this.form.NEAR_CITY;
            let value = false;
            CITY.forEach((c) => {
                if (c.key === key) {
                    value = c.value;
                }
            })
            return value;
        },
        getBranch() {
            const key = this.form.NEAR_BRANCH;
            const branch = this.branch;
            let value = false;
            branch.forEach((b) => {
                if (b.key === key) {
                    value = b.value;
                }
            })
            return value;
        },
        submit() {
            const valid = this.checkForm();
            const ecid = this.search['ecid'] || '';
            const send = {
                ACTIVITY_CODE: 'CP02',
                ECID_ICID: ecid,
                ID_NO: this.form.ID_NO,
                CHI_NAME: this.form.CHI_NAME,
                MOB_TEL_NUM: this.form.MOB_TEL_NUM,
                EMAIL_1: this.form.EMAIL_1,
                RECOMMEND_CODE: this.form.RECOMMEND_CODE || '',
                captcha: this.form.captcha,
                NEAR_CITY: this.getCity(this.form.NEAR_CITY),
                NEAR_BRANCH: this.getBranch(this.form.NEAR_BRANCH)
            }
            if (valid) {
                $.ajax({
                    url: 'https://uat.newwebatm.citibank.com.tw/extfunc12/kanacp2indexhandler/sendFormData',
                    type: 'post',
                    dataType: 'json',
                    data: send,
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function (data) {
                        alert('送出成功！')
                    },
                    error: function (xhr, data, errorThrown) {
                        if (data.AJAX_MESSAGE_HANDLER_EXCEPTION) {
                            alert(data.AJAX_MESSAGE_HANDLER_EXCEPTION)
                        }
                        alert('送出失敗！');
                    }
                });
            } else {

                // alert('表單驗證錯誤！')
            }
        }
    }
});