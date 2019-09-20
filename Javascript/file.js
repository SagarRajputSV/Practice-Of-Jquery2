$(document).ready(()=>
{
    console.log("Hello Welcome to Practicing of jquery once again");
    $("#heading1").html("This Heading content is written by the use of jquery");
    $("h3").css("color","green");

    alert("Hello");
});

$("#btnpath").click(()=>{
    $("#path").html(document.URL);
});

$("#btnclassadder").click(()=>{
    $("#classaddingparagraph").addClass("class");
});

$("#btnclassremover").click(()=>{
    $("#classaddingparagraph").removeClass("class");
});

$("#DrpBackgroundColor").change(()=>{
    var bgcolor = $("#DrpBackgroundColor").val();
    bgcolor = bgcolor.toLowerCase();

    $("#bdy").css("background",bgcolor)

    if(bgcolor=="red")
    {
        $("#bdy").css("color","white")
    }

    else if(bgcolor=="green")
    {
        $("#bdy").css("color","red")
    }

    else if(bgcolor=="white")
    {
        $("#bdy").css("color","black")
    }

    else if(bgcolor=="black")
    {
        $("#bdy").css("color","white")
    }    
});

$("#form1").submit(()=>{
    const fnameval = /^[a-z,A-Z. ]{3,30}$/;
    var Fname = $("#form1 input[name=FName]").val();

    if(fnameval.test(Fname))
    {
        alert("Welcome " +Fname);
        return true;
    }

    else
    {
        alert("First Name Invalid");

        return false;
    }   

});

// $("#form2 input[name=ConfirmPassword]").change(()=>{
//     const password = $("#form2 input[name=Password]").val();
//     const ConfirmPassword = $("#form2 input[name=ConfirmPassword]").val();

//     if(password != ConfirmPassword)
//     {
//         alert("Password does not matches");
//     }
// });

$("#form2").submit(()=>{
    const Nameval = /^[a-z,A-Z]{5,30}$/;
    const unameval = /^[a-z,A-Z.@,0-9]{5,30}$/;

    var Name = $("#form2 input[name=Name]").val();
    var uname = $("#form2 input[name=UserName]").val();
    
    const password = $("#form2 input[name=Password]").val();
    const ConfirmPassword = $("#form2 input[name=ConfirmPassword]").val();
    
    
    if(password != ConfirmPassword)
    {
        alert("Password does not matches");
        return false;
    }

    if(Nameval.test(Name))
    {
        if(unameval.test(uname))
        {
            return true;
        }

        else
        {
            return false;
        }
    } 

    else
    {
        alert("Invalid UserName");
        return false;
    }


});


$('#Direct').click(()=>{

    if($('#listing >li').hasClass('highlighted') == true && $('#listing li').hasClass('highlighted') == true)
    {
        $('#listing li').removeClass('highlighted');
        $('#listing >li').addClass('highlighted');
    }

    else
    {
        $('#listing li').removeClass('highlighted');
        $('#listing >li').removeClass('highlighted');
    }

    // else if ($('#listing >li').hasClass('highlighted') == false)
    // {
    //     alert("Hello from false");
    //     $('#listing >li').addClass('highlighted');  // To select both indirect and direct descendant
    // }
    
});

$('#Indirect').click(()=>{

    if($('#listing li').hasClass('highlighted') == true)
    {
        $('#listing li').removeClass('highlighted');
        $('#listing >li').removeClass('highlighted')
    }

    else if($('#listing li').hasClass('highlighted') == false)
    {
        $('#listing li').addClass('highlighted'); // To select direct descendant only
    }
    
});

$('#btnHide').click(()=>{
    $('#hide').hide();
});

$('#btnShow').click(()=>{
    $('#hide').show();
});

$('#btnHideShow').click(()=>{

    if($('#hide2').is(':visible') == true)
    {
        $('#hide2').hide(1000); // Syntax for hide(time in millisecond,callbackFunction)
        $('#btnHideShow').html('Show');
    }

    else
    {
        $('#hide2').show(1000); // Syntax for show(time in millisecond,callbackFunction)
        
        //$('#hide2').show(-1000); // Negative is to speed up
        $('#btnHideShow').html('Hide');
    }
});

$('#btnToggle').click(()=>{
    $('#toggle').toggle();
});

$('#btnFadeIn').click(()=>{
    $('#div1').fadeIn();
    $('#div2').fadeIn('slow');
    $('#div3').fadeIn(3000);
});

$('#btnFadeOut').click(()=>{
    $('#div1').fadeOut();
    $('#div2').fadeOut('slow');
    $('#div3').fadeOut(3000);
});

$('#btnFadeToggle').click(()=>{
    $('#div4').fadeToggle();
    $('#div5').fadeToggle('slow');
    $('#div6').fadeToggle(3000);
});

