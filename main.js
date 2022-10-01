
$(".menu").hover(function(){
    $(".menu").removeClass('active-menu')
    $(this).addClass('active-menu')
})


const validation= function(){
    function reset(id){
        $(id).click(function(){
            $(this).parent().parent().children().eq(1).text("")
        })
    }
    reset("#email")
    reset("#code")
    reset("#fullname")
    reset("#address")
    reset("#phone")
    reset("#birthday")

    $("#register").click(function(e){
        e.preventDefault()

        if(validation.isCode('#code')){
            $("#code").parent().parent().children().eq(1).text(validation.isCode('#code'))
        }
        if(validation.isEmail("#email")){
            $("#email").parent().parent().children().eq(1).text(validation.isEmail('#email'))
        }
    })
}
validation.isCode=function(id){
    const vl=$(id).val()
    console.log(vl)
    var regex=new RegExp( /^(1[7-9]|2[0-2])[0-9]{6}$/)
    return regex.test(vl) ? undefined :  'Phải có 8 chữ số bắt đầu từ 17-22'
}
validation.isEmail=function(id){
    const vl=$(id).val()
    var regex=new RegExp( /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,3}$/)
    return regex.test(vl) ? undefined :  'Email không hợp lệ'    
}

validation()