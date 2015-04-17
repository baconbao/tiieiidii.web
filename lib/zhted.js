      $(document).ready(function(){
        $('#userresultbox').hide();
        $('#about-en').hide();
        $('.about-lang-btn').click(function(){
          $('#'+$(this).attr('data-target')).show();
          $('#'+$(this).attr('data-hide')).hide();
        });
        $('#usersub').click(function(){
          alert('抱歉，Email電子報暫時停止，請改用臉書專頁訂閱。')
        }); //end of #usersub click
      });