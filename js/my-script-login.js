var demo_acc = [
    (acc_normal = {
        username: "normal_demo",
        password: "123456"
    }),
    (acc_pro = {
        username: "pro_demo",
        password: "123456"
    })
];

var key = 0;
var isIn = false;
var order = 0;
var choose = 0;
var hpre = 0,
    haf = 0,
    mpre = 0,
    maf = 0;

var demo1 = [
    (ex_1 = {
        name: "High Knee Tap",
        goal: 2,
        group: "none",
        level: "none",
        image: "/ex-resources/ex-images/high-knee-tap.jpg",
        video: "/ex-resources/ex-videos/high-knee-tap.mp4",
        rep: 45,
        rest: 15,
    }),
    (ex_2 = {
        name: "Russian Twist",
        goal: 2,
        group: "none",
        level: "none",
        image: "/ex-resources/ex-images/russian-twist.jpg",
        video: "/ex-resources/ex-videos/russian-twist.mp4",
        rep: 45,
        rest: 15,
    }),
    (ex_3 = {
        name: "Lying Leg Raises",
        goal: 2,
        group: "none",
        level: "none",
        image: "/ex-resources/ex-images/lying-leg-raises.jpg",
        video: "/ex-resources/ex-videos/lying-leg-raises.mp4",
        rep: 45,
        rest: 15,
    }),
    demo2 = [
        (ex_1 = {
            name: "Pseudo Push Ups",
            goal: 1,
            group: 3,
            level: 2,
            image: "/ex-resources/ex-images/pseudo-push-ups.jpg",
            video: "/ex-resources/ex-videos/pseudo-push-ups.mp4",
            rep: 12,
            rest: 60,
        }),
        (ex_2 = {
            name: "Planche Lean Hold",
            goal: 1,
            group: 4,
            level: 2,
            image: "/ex-resources/ex-images/planche-lean-hold.jpg",
            video: "/ex-resources/ex-videos/planche-lean-hold.mp4",
            rep: 30,
            rest: 60,
        }),
        (ex_3 = {
            name: "Tuck Planche",
            goal: 1,
            group: 5,
            level: 2,
            image: "/ex-resources/ex-images/tuck-planche.jpg",
            video: "/ex-resources/ex-videos/tuck-planche.mp4",
            rep: 30,
            rest: 60,
        }),
    ]
];

function login() {
    if (isIn == true) {
        Swal.fire({
            title: 'Bạn chắc chứ?',
            text: "Bạn sẽ phải đăng nhập lại để thực hiện một số tính năng",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đăng xuất'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Đã đăng xuất!',
                    'Bạn đã đăng xuất khỏi thiết bị này',
                    'success'
                )
                isIn = false;
                key = 0;
                document.getElementById("tab").innerText = "Đăng nhập";
            }
        })
    }
    if (isIn == false) {
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "";
        var link = document.createElement('link');
        link.id = 'id2';
        link.rel = 'stylesheet';
        link.href = 'css/my-style-login.css';
        document.head.appendChild(link);
    }
}

function login_demo() {

    if (document.getElementById("logemail").value == "normal_demo") {
        if (document.getElementById("logpass").value == "123456") {
            key = 0;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: true,
                timer: 1500
            })
            setTimeout(() => {
                isIn = true;
                document.getElementById("tab").innerText = "Đăng xuất";
                document.getElementById("1").style.display = "";
                document.getElementById("2").style.display = "none";
                var link = document.getElementById("id2");
                link.remove();
            }, 3000);
        }
        else {
            Swal.fire("Tên đăng nhập hoặc mật khẩu sai");
        }
    }
    else if (document.getElementById("logemail").value == "pro_demo") {
        if (document.getElementById("logpass").value == "123456") {
            key = 1;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: true,
                timer: 1500
            })
            setTimeout(() => {
                isIn = true;
                document.getElementById("tab").innerText = "Đăng xuất";
                document.getElementById("1").style.display = "";
                document.getElementById("2").style.display = "none";
                var link = document.getElementById("id2");
                link.remove();
            }, 3000);
        }
        else {
            Swal.fire("Tên đăng nhập hoặc mật khẩu sai");
        }
    }
    else if (document.getElementById("logemail").value == demo_acc[0].username) {
        if (document.getElementById("logpass").value == demo_acc[0].password) {
            key = 0;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: true,
                timer: 1500
            })
            setTimeout(() => {
                isIn = true;
                document.getElementById("tab").innerText = "Đăng xuất";
                document.getElementById("1").style.display = "";
                document.getElementById("2").style.display = "none";
                var link = document.getElementById("id2");
                link.remove();
            }, 3000);
        }
        else {
            Swal.fire("Tên đăng nhập hoặc mật khẩu sai");
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tài khoản không tồn tại',
        })
    }
}

function signup_demo() {
    demo_acc[0].username = document.getElementById("signupemail").value;
    demo_acc[0].password = document.getElementById("signuppass").value;
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đăng kí thành công',
        showConfirmButton: true,
        timer: 1500
    })
}

function upgrade() {
    if (isIn == true) {
        key = 1;
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Đăng kí thành viên cao cấp thành công',
            showConfirmButton: true,
            timer: 1500
        })
    }
    else {
        Swal.fire("Vui lòng đăng nhập để tiếp tục");
    }
}

function startcounting() {
    document.getElementById("waiting").style.display = "none";
    document.getElementById("doing").style.display = "";
    document.getElementById("button-start").style.display = "none";
    document.getElementById("button-done-fake").style.display = "";
    // setTimeout(hour(), 50000);
    // setTimeout(minute(), 50000);
    // setTimeout(second(), 50000);
}

function donefake() {
    document.getElementById("button-done-fake").style.display = "none";
    hpre = (new Date()).getHours();
    mpre = (new Date()).getMinutes();
    setTimeout(hour(), 3000);
    setTimeout(minute(), 3000);
    setTimeout(second(), 3000);
    document.getElementById("button-done").style.display = "";
}

function hour() {
    var hour = 0;
    setInterval(() => {
        hour += 1;
        if (hour < 10) {
            if (hour == 0) {
                document.getElementById("hour").innerText = "00";
            } else {
                document.getElementById("hour").innerText = "0" + hour;
            }
        } else {
            document.getElementById("hour").innerText = hour;
        }
    }, 3600000);
}

function minute() {
    var minute = 0;
    setInterval(() => {
        minute += 1;
        if (minute < 10) {
            if (minute == 0) {
                document.getElementById("minute").innerText = "00";
            } else {
                document.getElementById("minute").innerText = "0" + minute;
            }
        } else if (minute > 59) {
            document.getElementById("minute").innerText = "00";
            minute = 0;
        } else {
            document.getElementById("minute").innerText = minute;
        }
    }, 60000);
}

function second() {
    var second = 0;
    setInterval(() => {
        second += 1;
        if (second < 10) {
            if (second == 0) {
                document.getElementById("second").innerText = "00";
            } else {
                document.getElementById("second").innerText = "0" + second;
            }
        } else if (second > 59) {
            document.getElementById("second").innerText = "00";
            second = 0;
        } else {
            document.getElementById("second").innerText = second;
        }
    }, 1000);
}


function done() {
    callfunc();
    // setTimeout(hour(), 5000);
    // setTimeout(minute(), 5000);
    // setTimeout(second(), 5000);

    if (choose == 1) {
        if (order >= 3) {
            complete();
        }
        document.getElementById("ex-name-on").innerText = demo1[order].name;
        document.getElementById("ex-rep-on").innerText = demo1[order].rep;
        document.getElementById("ex-rest-on").innerText = demo1[order].rest;
        document.getElementById("video").src = "http://127.0.0.1:5500" + demo1[order].video;
        order++;
        document.getElementById("b-19").innerText = "Hoàn thành";
    }
    else {
        if (order >= 3) {
            complete();
        }
        document.getElementById("ex-name-on").innerText = demo2[order].name;
        document.getElementById("ex-rep-on").innerText = demo2[order].rep;
        document.getElementById("ex-rest-on").innerText = demo2[order].rest;
        document.getElementById("video").src = "http://127.0.0.1:5500" + demo2[order].video;
        order++;
        document.getElementById("b-19").innerText = "Hoàn thành";
    }
}

function callfunc() {

}

function complete() {
    haf = (new Date()).getHours();
    maf = (new Date()).getMinutes();
    if (haf - mpre == 0) {
        document.getElementById("hour-label").innerText = "";
        document.getElementById("hour-end").innerText = "";
    } else {
        document.getElementById("hour-end").innerText = haf - hpre;
    }
    document.getElementById("minute-end").innerText = maf - mpre;
    // document.getElementById("title").innerText = "Hoàn thành";
    document.getElementById("training").style.display = "none";
    document.getElementById("completing").style.display = "";
}

function workoutdone() {
    location.reload();
}

function choose_1() {
    choose = 1;
    document.getElementById("need-hidden").style.display = "none";
    document.getElementById("5").style.display = "";
}

function choose_2() {
    if (key == 1) {
        choose = 2;
        document.getElementById("need-hidden").style.display = "none";
        document.getElementById("4").style.display = "";
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Bạn chưa phải là thành viên cao cấp',
        })
    }
}

function start() {
    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("training").style.display = "";
}