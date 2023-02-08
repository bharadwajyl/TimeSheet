//Perform calculations on button click
$(".calculate").on("click", function(){
        var sum = 0, count = 0;
        var s_hour = [], e_hour = [], s_minute = [], e_minute = [], s_mer = [], e_mer = [], bd_hour = [], bd_minute = [], total_hour = 0, total_minute = 0;
        //push starting time to array
        $(".start_time").children("select").each( function() { 
            s_mer.push(this.value);
        });
        $(".start_time").children("input[name='hour[]']").each( function() { 
            s_hour.push(this.value);
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
            e_hour.push(this.value);
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
        var total_minutes  = 0, totalMinutes;
        $(".total").each( function() { 
            if ((s_mer[count] == "pm") && (parseInt(s_hour[count]) >=1 && parseInt(s_hour[count]) < 12)){
                e_mer[count] == "am" && e_hour[count] <= 11 ? e_hour[count] = parseInt(e_hour[count]) + 12 : s_hour[count] = parseInt(s_hour[count]) + 12;
            } 
            if ((e_mer[count] == "pm") && (parseInt(e_hour[count]) >=1 && parseInt(e_hour[count]) <= 12)){
                e_hour[count] = parseInt(e_hour[count]) + 12;
            }
            totalMinutes = Math.abs(Math.abs(parseInt(s_hour[count]) * 60) - Math.abs(parseInt(e_hour[count]) * 60) + Math.abs(parseInt(bd_hour[count]) * 60) + Math.abs(parseInt(bd_minute[count]))  + Math.abs(parseInt(s_minute[count])) - Math.abs(parseInt(e_minute[count])));
            total_minutes += + totalMinutes;
            count++;
            var hours = Math.floor(totalMinutes / 60);          
            var minutes = totalMinutes % 60;
             $(this).html( hours + " : " + minutes);
        });
        var total_hour = Math.floor(total_minutes / 60);          
        var total_minute = total_minutes % 60;
        $(".result").html("<b>Total hours: </b>" + total_hour + " : " + total_minute);
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
