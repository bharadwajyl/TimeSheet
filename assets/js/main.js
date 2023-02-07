//Perform calculations on button click
$(".calculate").on("click", function(){
        var sum = 0, count = 0;
        var s_hour = [], e_hour = [], s_minute = [], e_minute = [], s_mer = [], e_mer = [], bd_hour = [], bd_minute = [], total_hour = 0, total_minute = 0;
        //push starting time to array
        $(".start_time").children("select").each( function() { 
            s_mer.push(this.value);
        });
        $(".start_time").children("input[name='hour[]']").each( function() { 
            if (s_mer[count] == "pm"){
                s_hour.push(parseInt(this.value) + 12);
            } else {
                s_hour.push(this.value);
            }
            count++;
        });
        $(".start_time").children("input[name='minute[]']").each( function() { 
            s_minute.push(this.value);
        });
        //push end time to array
        count = 0;
        $(".end_time").children("select").each( function() { 
            e_mer.push(this.value);
        });
        $(".end_time").children("input[name='hour[]']").each( function() { 
            if (e_mer[count] == "pm"){
                e_hour.push(parseInt(this.value) + 12);
            } else {
                e_hour.push(this.value);
            }
            count++;
        });
        $(".end_time").children("input[name='minute[]']").each( function() { 
            e_minute.push(this.value);
        });
        //push break deduction time to array
        $(".break_deduction").children("input[name='hour[]']").each( function() { 
            bd_hour.push(this.value);
        });
         $(".break_deduction").children("input[name='minute[]']").each( function() { 
            bd_minute.push(this.value);
        });
        //Calculate total and insert
        count = 0;
        let r_minute, r_hour;
        var format = /[-]/;
        $(".total").each( function() { 
            r_hour = e_hour[count] - s_hour[count]  - bd_hour[count];
            r_minute = (Math.abs(s_minute[count]) - Math.abs(e_minute[count]) - Math.abs(bd_minute[count]));
            if (format.test(r_minute)){
                r_hour = r_hour - 1;
                r_minute = 60 + r_minute;
            }
            total_hour += + r_hour;
            total_minute += + r_minute;
            $(this).html( r_hour + " : " + r_minute);
            count++;
        });
        $(".result").html("<b>Total hours: </b>" + parseInt(Math.abs(total_hour)) + " : " + Number(parseInt(total_minute) / 60).toFixed(2).split(".")[1]);
});


//Reset input fields
$(".clear").on("click", function(){
    $('table').find('input[type="tel"').val('00');
    $("table option").prop("selected", false).trigger( "change" );
    $(".total").each( function() { 
        $(this).html("0 : 00");
    });
    $(".result").html("<b>Total hours: </b> 0 : 00");
});
