$(function () {
    $("#page1").paging({
            total: 10,
            numberPage: 5
        },
        function(msg) {
            //回调函数 msg为选中页码
            console.log(msg)
        });
    $(".tab2>div").click(function () {
        $(".tab2>div").removeClass("tab-list-act");
        $(this).addClass("tab-list-act");
        var that=$(this),
            msg=that.attr("data-msg"),
            i=0,html='';
        for(;i<5;i++){
            html+=`
               <tr>
                                <td>${msg}</td>
                                <td>2020 19:20</td>
                                <td>2020 19:20</td>
                                <td>4444</td>
                                <td>物料1</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>122333333</td>
                                <td>发货</td>
                                <td>北京</td>
                                <td>北京</td>
                                <td>5555</td>
                                <td>55555</td>
                                <td>发出</td>
                                <td>湖北</td>
                                <td>2020 19:20</td>
                                <td>2020 19:20</td>
                                <td>正常</td>
                                <td><img class="table-img" src="../img/test.jpg" alt=""></td>
                            </tr>
            `
        }
        $("#table2 tbody").html(html);
    });
    $(".tab3>div").click(function () {
        $(".tab2>div").removeClass("tab-list-act");
        $(this).addClass("tab-list-act");
        var that=$(this),
            msg=that.attr("data-msg"),
            i=0,html='';
        for(;i<7;i++){
            html+=`<tr>
                                    <td>${msg}</td>
                                    <td>2020 19:20</td>
                                    <td>3333</td>
                                    <td>正常</td>
                                    <td>555</td>
                                </tr>`
        }
        $("#table3 tbody").html(html);
    });
    //图片预览
    $("body").on("click",".table-img",function () {
        var src=$(this).attr("src");
        $(".img-pre>img").attr("src",src);
        $(".img-pre").removeClass("out");
    });
    $(".img-pre").click(function () {
        $(this).addClass("out");
    })
});