// Start XSS.txt 

    window.onload = function()
    {
            var url=location.href;
            var value1=url.search('iframe');
            var value2=url.search('script');
            var splChars = '!$^*+()%[]\\\';@{}|\"<>`~';
            if((value1!= -1)||(value2!= -1))
                        {
                        window.top.location.href="https://"+location.host+"/portal/home_english/hkcb_Home.htm";
                        }
						url=url.replace(/%20/g," ");
            for (var i = 0; i < url.length; i++)
                        {
                        if (splChars.indexOf(url.charAt(i)) != -1)
                            {
                            window.top.location.href="https://"+location.host+"/portal/home_english/hkcb_Home.htm";
                            }
                        }
    }
    
// End XSS.txt 