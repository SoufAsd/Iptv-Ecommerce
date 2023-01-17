<template>
    <div class="deal-area pt-100 pb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                    <div class="fashion-deal-img">
                        <n-link to="/shop">
                            <img class="wow fadeInLeft" src="/img/banner/deal-2.png" alt="">
                        </n-link>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="funfact-content funfact-res text-center">
                        <h2>Deal of the day</h2>
                        <ul class="timer">
                            <li>
                                <span id="days"></span>
                                Days
                            </li>
                            <li>
                                <span id="hours"></span>
                                Hours
                            </li>
                            <li>
                                <span id="minutes"></span>
                                Mins
                            </li>
                            <li>
                                <span id="seconds"></span>
                                Secs
                            </li>
                        </ul>
                        <div class="funfact-btn btn-only-round funfact-btn-red-2 btn-hover">
                            <n-link to="/shop">SHOP NOW</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {
            let intervalId;
            if(intervalId){
                clearInterval(intervalId)
            }
            const sec = 1000,
                min = sec * 60,
                hour = min * 60,
                day = hour * 24;

            const end = new Date("Mar 30, 2022").getTime();
            const days = document.getElementById("days");
            const hours = document.getElementById("hours");
            const minutes = document.getElementById("minutes");
            const seconds = document.getElementById("seconds");

            intervalId = setInterval(() => {
                const current = new Date().getTime();
                const remaining = end - current;

                const day2 = Math.floor(remaining / day);
                const hour2 = Math.floor( (remaining % day) / hour );
                const minute = Math.floor( (remaining % hour) / min );
                const second = Math.floor( (remaining % min) / sec );
                if(!days || !hours || !minutes || !seconds) return

                days.innerText = day2 > 9 ? day2 : `0${day2}`;
                hours.innerText = hour2 > 9 ? hour2 : `0${hour2}`;
                minutes.innerText = minute > 9 ? minute : `0${minute}`;
                seconds.innerText = second > 9 ? second : `0${second}`;
            }, 1000); 
        },
    };
</script>