let mycss = null;
const body = document.querySelector('body');

function myalert(msg = "Default Message!", time = 3000) {
    if (!mycss) {
        mycss = document.createElement("style");
        mycss.innerHTML =
            `.alertbox {
            border-radius: 10px;
            background-color: rgb(115, 255, 0);
            color: rgb(0, 0, 0);
            text-align: center;
            font-size: 30px;
            font-weight: bolder;
            position: absolute;
            padding: 50px;
            height: min-content;
            width: min(min-content,500px);
            min-width: 200px;
            top: 0%;
            left: 50%;
            visibility: hidden;
            transform: translate(-50%, -50%) scale(.1);
            transition: transform .4s, top .4s;
        }
        .pop_up{
            transform: translate(-50%, -50%) scale(1);
            visibility: visible;
            top: 20%;
        }`;
        body.appendChild(mycss);
    }

    const alertbox = document.createElement("div");
    alertbox.innerHTML = msg;
    alertbox.className = "alertbox";
    body.appendChild(alertbox);

    setTimeout(() => {
        alertbox.classList.add('pop_up');
    }, .001);
    setTimeout(() => {
        alertbox.remove();
    }, time);
}
