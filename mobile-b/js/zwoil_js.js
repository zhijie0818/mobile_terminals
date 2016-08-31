// JavaScript Document
//     <script type="text/javascript">
$(function () {
    $("#applyButtonA").click(function () {
        applyAccount('A');
    });
    $("#applyButtonB").click(function () {
        applyAccount('B');
    });
});

/**
 *
 **/
function applyAccount(type) {
    if ($("#username" + type).val() == '' || $("#username" + type).val() == '输入姓名') {
        layer.alert('请输入姓名！', 8);
        //layer.tips('请输入姓名！', "#username" + type, {tips: 1});
        $("#username" + type).focus();
        return false;
    }

    if ($("#mobile" + type).val() == '') {
        layer.alert("手机号码不能为空！", 8);
        //layer.tips('手机号码不能为空！', "#mobile" + type, {tips: 1});
        $("#mobile" + type).focus();
        return false;
    }
    if (!isMobile($("#mobile" + type).val())) {
        layer.alert("请输入正确的手机号码！", 8);
        //layer.tips('请输入正确的手机号码！', "#mobile" + type, {tips: 1});
        $("#mobile" + type).focus();
        return false;
    }

    var loading = layer.load('正在加载数据...', 0);
    $.ajax({
        url: 'http://www.minioil.cn/api/zwOpenAccount.php',
        type: 'post',
        data: decodeURIComponent($('#applyForm' + type).serialize(), true),
        dataType: 'json', // 接受数据格式
        error: function (json) {
        },
        async: true,// 异步加载
        beforeSend: function () {
        },
        success: function (json) {
            layer.close(loading); // 关闭加载层
            if (json == 'success') {
                layer.msg("预约成功！", {icon: 6});

                //
                //$("input[name='username']").hide();
                //$("input[name='mobile']").hide();
                //applyButtonA
            } else {
                layer.msg("预约失败！", {icon: 2});
            }
        }
    });
}

/*
 *
 */
function isMobile(str) {
    var regStr = /(^1[3|4|5|6|8]\d{9}$)|(^[5|6|8|9]\d{7}$)/;
    return regStr.test(str);
}

<!-- Baidu -->
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?4566b3308919c925cbcbacb3cc1d0948";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

<!-- 友盟统计 -->
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cspan id='cnzz_stat_icon_1259314632'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1259314632%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));

/*
 * 函数功能：从href获得参数
 * sHref:   http://www.minioil.com/arg.htm?arg1=d&arg2=re
 * sArgName:arg1, arg2
 * return:    the value of arg. d, re
 */
function GetArgsFromHref(sHref, sArgName)
{
    var args    = sHref.split("?");
    var retval = "";

    if(args[0] == sHref) /*参数为空*/
    {
        return retval; /*无需做任何处理*/
    }
    var str = args[1];
    args = str.split('&');
    for(var i = 0; i < args.length; i ++)
    {
        str = args[i];
        var arg = str.split("=");
        if(arg.length <= 1) continue;
        if(arg[0] == sArgName) retval = arg[1];
    }
    return retval;
}

<!-- 友盟统计 -->
id = GetArgsFromHref(window.location.href, 'from')
console.info(id)
$("#fromA").val(id)
$("#fromB").val(id)