$(document).ready(function() {

    $("#hide").click(function() {
        $("#secret").toggle();
    });

    $("#fadein").click(function() {
        $("#fade1").fadeToggle();
        $("#fade2").fadeToggle(2000);
        $("#fade3").fadeToggle(3000);   
    });

    var isSliding = false;

    $("#flip").click(function() {
        if (isSliding) return;
        isSliding = true;

        $("#panel").slideToggle(5000, function() {
            isSliding = false;
        });
    });

    $("#skip").click(function() {
        $("#panel").stop(true, true);
        isSliding = false;
    });
    $("#stop").click(function() {
        $("#panel").stop();
    });



    let ballSpeedY = 2;
    let ballInterval;

    $("#animate").click(function() {
        let ball = $("#animate-ball");
        let container = $("#container-ball");
        let ballHeight = ball.height();
        let containerHeight = container.height();

        ballInterval = setInterval(function() {
            let currentTop = ball.position().top;

            if (currentTop + ballHeight >= containerHeight || currentTop <= 0) {
                ballSpeedY = -ballSpeedY; // Membalikkan arah vertikal
            }

            ball.css({
                top: currentTop + ballSpeedY + "px" // Menggerakkan bola vertikal
            });

        }, 10);
    });

    // Tombol Stop untuk menghentikan animasi bola
    $("#stop-animate").click(function() {
        clearInterval(ballInterval); // Hentikan interval animasi bola
    });


    $(document).ready(function() {
        $("#chainingBtn").click(function() {
            $("#chainingBox")
                .animate({ width: "200px", height: "200px" }, 1000) // Meningkatkan ukuran kotak
                .fadeOut(500) // Menyembunyikan elemen
                .fadeIn(500) // Menampilkan elemen kembali
                .slideUp(500) // Menyembunyikan dengan efek slide
                .slideDown(500) // Menampilkan kembali dengan efek slide
                .animate ({ width: "100px", height: "100px" }, 1000)// Mengembalikan ukuran kotak
                .queue(function(next) {
                    // Fungsi callback yang akan dijalankan setelah semua animasi selesai
                    alert("Animasi selesai!");
                    next();
                });
        });
    });


});