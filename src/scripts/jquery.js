$(document).ready(function () {
    $('.generateButton').click(function () {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        return false;
    });
    $('.resetButton').click(function () {
        $("html, body").animate({ scrollTop:0 }, "slow");
        return false;
    });

});
