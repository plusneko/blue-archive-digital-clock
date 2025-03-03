new Vue({
    el: "#clock",
    data: {
      time: "",
      date: ""
    },
    created() {
      this.updateTime();
      setInterval(this.updateTime, 1000);
    },
    methods: {
      updateTime() {
        var cd = new Date();
        this.time =
          this.zeroPadding(cd.getHours(), 2) +
          ":" +
          this.zeroPadding(cd.getMinutes(), 2) +
          ":" +
          this.zeroPadding(cd.getSeconds(), 2);
        this.date =
          this.zeroPadding(cd.getFullYear(), 4) +
          "-" +
          this.zeroPadding(cd.getMonth() + 1, 2) +
          "-" +
          this.zeroPadding(cd.getDate(), 2) +
          " " +
          ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][cd.getDay()];
      },
      zeroPadding(num, digit) {
        var zero = "";
        for (var i = 0; i < digit; i++) {
          zero += "0";
        }
        return (zero + num).slice(-digit);
      }
    }
  });
  