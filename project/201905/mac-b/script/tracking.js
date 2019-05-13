 
if (location.hostname.match(/^(?:(www|webatm|funds)\.)?citi(bank|corp|group)*\.(com|tw|co)(\.tw)*/)) {
    var reportSuites = 'citiintltaiwanprod'; /* For production */
} else {
    var reportSuites = 'citiintltaiwandev'; /* For UAT */
} 



window.trackEvent = (label) => {
    var s = s_gi(reportSuites);
    s.linkTrackVars = 'eVar47,events';
    s.linkTrackEvents = 'event16';
    s.eVar47 = label;
    s.events = 'event16';
    s.tl(this, 'o', 'Lead Submitted');
    console.log("%c[GA-CLICK]-->[" + label + ']', 'color: green; font-weight: bold; font-size:18px;');
}



// (function (i, s, o, g, r, a, m) {
//     i['GoogleAnalyticsObject'] = r;
//     i[r] = i[r] || function () {
//         (i[r].q = i[r].q || []).push(arguments)
//     }, i[r].l = 1 * new Date();
//     a = s.createElement(o),
//         m = s.getElementsByTagName(o)[0];
//     a.async = 1;
//     a.src = g;
//     m.parentNode.insertBefore(a, m)
// })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

// ga('create', 'UA-60404967-16', 'auto');
// ga('send', 'pageview');

// window.trackEvent = (category, label) => {
//     ga('send', 'event', category, 'click', label, 1);
//     console.log("%c[GA-CLICK]-->[" + category + ',' + label + ']', 'color: green; font-weight: bold; font-size:18px;');
// }

// window.trackPage = page => {
//     ga('send', 'pageview', '/' + page);
//     console.log("%c[GA-PAGE]-->[" + page + ']', 'color: blue; font-weight: bold; font-size:24px;');
// }



// let start = 101;
// const result = {};
// const get = () => {
//     if (start > 121) {
//         console.log(JSON.stringify(result))
//         return;
//     }
//     $.ajax({
//         url: 'https://pat.webatm.citibank.com.tw/extfunc12/codetypehandler/getByCodeTypeAndLikeValue',
//         type: 'post',
//         dataType: 'json',
//         data: {
//             type: 'CP_NEAR_BRANCH',
//             startWith: start,
//         },
//         success: function (data) {
//             const temp = [];
//             const branch = data.CP_NEAR_BRANCH;
//             Object.keys(branch).forEach(function (key) {
//                 temp.push({
//                     key: key,
//                     value: branch[key]
//                 })
//             });
//             result[start++] = temp;
//             get();
//         },
//         error: function (xhr, data, errorThrown) {

//         }
//     });
// }

// get();

// let result = {};
// const get = () => {
//     $.ajax({
//         url: 'https://pat.webatm.citibank.com.tw/extfunc12/codetypehandler/queryByKeys',
//         type: 'post',
//         dataType: 'json',
//         data: {
//             _isAjax: true,
//             _pa: null,
//             formAction: null,
//             keys: 'CP_NEAR_CITY'
//         },
//         success: function (data) {
//             let temp = [];
//             let city = data.CP_NEAR_CITY;
//             Object.keys(city).forEach(function (key) {
//                 temp.push({
//                     key: key,
//                     value: city[key]
//                 })
//             });
//             result = temp;
//             console.log(JSON.stringify(result));
//         },
//         error: function (xhr, data, errorThrown) {

//         }
//     });
// }

// get();