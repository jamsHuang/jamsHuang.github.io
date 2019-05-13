window.onload = function() {
	(function() {
		var cx = '018320823875629906074:ntgy5owvnvs';
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//www.google.com/cse/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
		var gssStyles = document.createElement('link');
		gssStyles.type = 'text/css';
		gssStyles.href = '/sim/citipriority/views/css/gss.css';
		gssStyles.rel = 'stylesheet'; 
		s.parentNode.insertBefore(gssStyles, s);
	})();
	var gssCallback = function() {
	  if (document.readyState == 'complete') {
		// Document is ready when CSE element is initialized.
		// Render an element with both search box and search results in div with id 'test'.
		google.search.cse.element.render(
			{
			  div: "gssSearchBox",
			  tag: 'search',
			  gname: 'sggcbSearch'
			 });
	  } else {
		// Document is not ready yet, when CSE element is initialized.
		google.setOnLoadCallback(function() {
		   // Render an element with both search box and search results in div with id 'test'.
			google.search.cse.element.render(
				{
				  div: "gssSearchBox",
				  tag: 'search',
				  gname: 'sggcbSearch'
				});
		}, true);
	  }
	};

	// Insert it before the CSE code snippet so that cse.js can take the script
	// parameters, like parsetags, callbacks.
	window.__gcse = {
	  parsetags: 'explicit',
	  callback: gssCallback
	};
};

document.write('<section class="topMenu" role="language switch">'+
'					<div class="container">'+
'						<div class="row">'+
'							<div class="col12 col-md-12 col-sm-12">'+
'								<ul class="pull-left text-left countryname">'+
'									<li><a href="https://www.citibank.com.tw/" target="_blank" title="CITIBANK TAIWAN" class="">CITIBANK TAIWAN</a></li>'+
'								</ul>'+
'								<ul class="pull-right text-right lang-switch">'+
'									<li><a href="/sim/citipriority/apply-now/index.htm" title="聯絡我們" class="">聯絡我們</a></li>'+
'								</ul>'+
'							</div>'+
'						</div>'+
'					</div>'+
'			</section>'+
'			<section class="fixedHeader">'+
'				<section class="fhInner">'+
'					<section class="banner">'+
'						<div class="container">'+
'							<div class="row">'+
'								<div class="col12 col-md-12 col-sm-12">'+
'									<figure class="logoWrapper">'+
'										<a href="/sim/citipriority/index.htm"><img src="/sim/citipriority/views/images/citi_priority_logo.png" alt="Citi Priority" title="Citi Priority" /></a>'+
'									</figure>'+
'									<div class="pull-right">'+
'										<a href="javascript:;" class="visibleDesktop searchHeader"><img src="/sim/citipriority/views/images/search_icon_white.png" alt="Search" title="Search"/></a>'+
'										<a href="javascript:;" title="Menu" class="closed visibleMobile" id="Menu"></a>'+
'									</div>'+
'								</div>'+
'							</div>'+
'						</div>'+
'					</section>'+
'					<section class="searchOuter">'+
'						<div class="container">'+
'							<div class="row">'+
'								<div class="col12 col-md-12 col-sm-12 visibleMobile">'+
'									<div class="mobileSearchHeader pull-left">'+
'										<a href="javascript:;" class=""><img src="/sim/citipriority/views/images/mobile/mob_search_icon.png" alt="Search" title="Search"/>'+
'										<span>Search</span></a>'+
'									</div>'+
'									<a href="/TWGCB/JSO/signon/DisplayUsernameSignon.do" class="loginMobile pull-right whitebgwithShadow" title="登入" rel="loginTab" target="_blank">登入</a>'+
'								</div>'+
'							</div>'+
'						</div>'+
'					</section>'+
'					<section class="menuBar">'+
'						<section class="">'+
'								<div class="menuShadow">'+
'									<div class="container">'+
'										<nav class="col12 col-md-12 col-sm-12">'+
'											<div class="row">'+
'												<div class="pull-right visibleMobile">'+
'													<a href="javascript:;" title="Menu" class="closed" id="Menu"></a>'+
'												</div>'+
'												<div class="col10 col-md-10 col-sm-12 nopadding menuOut">'+
'													<ul class="menubar-ul nav-tabs sub-navbar-list">'+
'														<li class="ddown"><a href="javascript:;" id="banking" rel="bankingTab" title="便捷貼心的金融服務 ">便捷貼心的金融服務</a>'+
'															<ul class="innerDropdowns" id="bankingTab">'+
'																<li><a class="dropdown-item" rel="#" href="/sim/citipriority/simple-banking/index.htm" title="概覽">概覽</a></li>'+
'																<li><a class="dropdown-item" rel="PersonalBanking" href="/sim/citipriority/simple-banking/index.htm?hash=PersonalBanking" title="個人貼心服務">個人貼心服務</a></li>'+
'																<li><a class="dropdown-item" rel="BankSimple" href="/sim/citipriority/simple-banking/index.htm?hash=BankSimple" title="簡便銀行服務">簡便銀行服務</a></li>'+

'															</ul>'+
'														</li>'+
'														<li class="ddown"><a href="javascript:;" id="wealth" rel="wealthTab" title="穩健多元的財富創造">穩健多元的財富創造</a>'+
'															<ul class="innerDropdowns">'+
'																<li><a class="dropdown-item" href="/sim/citipriority/create-wealth/index.htm" id="cwOverview" title="概覽">概覽</a></li>'+
'																<li><a class="dropdown-item" href="/sim/citipriority/create-wealth/financial-goals-planning/index.htm" id="WealthPackages" title="豐富產品選擇">豐富產品選擇</a></li>'+
// '																<li><a class="dropdown-item" href="https://www.citibank.com.tw/TWCGOLContent/pdf/bimonthlyreport.pdf" title="花旗前瞻評論" target="_blank">花旗前瞻評論</a></li>'+
// '																<li><a class="dropdown-item" href="/sim/citipriority/create-wealth/foreign-exchange/index.htm?lid=HKENCBGORHETLForeignExchange" title="Foreign Exchange">Foreign Exchange</a></li>'+
// '																<li><a class="dropdown-item" href="/sim/citipriority/create-wealth/investment-strategy/index.htm?lid=HKENCBGORHETLInvestmentStrategy" title="Investment Strategy">Investment Strategy</a></li>'+
// '																<li><a class="dropdown-item" href="/sim/citipriority/create-wealth/stocks/index.htm?lid=HKENCBGORHETLStocks" title="Stocks">Stocks</a></li>'+
// '																<li><a class="dropdown-item" href="https://www.citibank.com.tw/citimarket/index.htm" id="TradingTools" title="花旗市場觀點" target="_blank">花旗市場觀點</a></li>'+
'															</ul>'+
'														</li>'+
'														<li class="ddown"><a href="javascript:;" id="global" rel="globalTab" title="接軌國際的全球金融">接軌國際的全球金融</a>'+
'															<ul class="innerDropdowns" id="globalTab">'+
'																<li><a class="dropdown-item" rel="#" href="/sim/citipriority/global-access/index.htm" title="概覽">概覽</a></li>'+
'																<li><a class="dropdown-item" rel="GlobalTraveller" href="/sim/citipriority/global-access/index.htm?hash=GlobalTraveller" title="環球旅遊">環球旅遊</a></li>'+
'																<li><a class="dropdown-item" rel="GlobalResident" href="/sim/citipriority/global-access/index.htm?hash=GlobalResident" title="環球公民">環球公民</a></li>'+
'															</ul>'+
'														</li>'+
'														<li class="ddown"><a href="javascript:;" id="privileges" rel="privilegesTab" title="悉心獨到的專屬禮遇">悉心獨到的專屬禮遇</a>'+
'															<ul class="innerDropdowns" id="privilegesTab">'+
'																<li><a class="dropdown-item" href="/sim/citipriority/bank-privileges-promotions/index.htm" id="pOverview" title="概覽">概覽</a></li>'+
'																<li><a class="dropdown-item" rel="newActivity" href="/sim/citipriority/bank-privileges-promotions/index.htm?hash=newActivity" id="NewOffers" title="最新活動">最新活動</a></li>'+
'																<li><a class="dropdown-item" rel="debitMasterPromote" href="/sim/citipriority/bank-privileges-promotions/index.htm?hash=debitMasterPromote" id="DebitOffers" title="Debit Mastercard&reg;優惠">Debit Mastercard&reg;優惠</a></li>'+
'																<li><a class="dropdown-item" rel="creditCardReward" href="/sim/citipriority/bank-privileges-promotions/index.htm?hash=creditCardReward" id="CreditOffers" title="迎賓刷卡禮">迎賓刷卡禮</a></li>'+
// '																<li><a class="dropdown-item" href="/sim/citipriority/bank-privileges-promotions/welcome-offers/index.htm?lid=HKENCBGORHETLWelcomeOffer" id="WelcomeOffers" title="Welcome Offers">Welcome Offers</a></li>'+
// '																<li><a class="dropdown-item" href="/sim/citipriority/bank-privileges-promotions/index.htm?lid=HKENCBGORHETLPrivilegesAndOffersOverview&hash=rewards_section" id="WelcomeOffers" title="專屬薦賞禮">專屬薦賞禮</a></li>'+					
'															</ul>'+
'														</li>'+	
'														<li class="ddown"><a href="/sim/citipriority/asiamile/" id="wiseWealth" rel="wiseWealthTab" title="智富 比你想像的更近">智富 比你想像的更近</a>'+
'														</li>'+	
'													</ul>'+
'												</div>'+
'												<ul class="pull-right LoginDesk">'+
'													<li><a href="/TWGCB/JSO/signon/DisplayUsernameSignon.do" class="login loginDesktop" title="登入" rel="loginTab" target="_blank">登入</a></li>'+
'												</ul>'+
'											</div>'+
'										</nav>'+
'									</div>'+
'								</div>'+
'						</section>'+
'					</section>'+
'					<div class="menuRow">'+
'						<section role="search" class="searchBar" >'+
'							<div class="container">'+
'								<div class="col12 innerContainer">'+
'									<div class="col10 innerContainer">'+
'										<div class="close text-right"><a href="javascript:;" title="close"></a></div>'+
'										<div class="innerwrap"><span class="searchIcon"></span>'+
'											<div id="gssSearchBox"><input type="button" value="" class="searchBtn" onclick="javascript:gsearch()"></div>'+
'										</div>'+
'									</div>'+
'								</div>'+
'							</div>'+
'						</section>'+
'					</div>'+
'				</section>'+
'			</section>');