class Mobile {
    constructor(name) {
        this.battery = 100;
        this.name = name;
        this.message = '';
        this.inBox = [];
        this.outBox = [];
        this.status = false;
    }

    checkOnOff() {
        if (this.status === true) {
            alert('dien thoai bat')
        } else {
            alert('dien thoai tat')
        }
        this.battery--;
    }

    turnOn() {
        this.status = true;
        this.battery--;
    }

    turnOff() {
        this.status = false;
        this.battery--;
    }

    chargeBattery() {
        if (this.status !== true) {
            alert('Điện thoai' + this.name + ' đang tắt không sử dụng được.');
            return;
        }
        this.battery += 1;
    }

    writeMessage(txt) {
        if (this.status !== true) {
            alert('Điện thoai' + this.name + ' đang tắt không sử dụng được.');
            return;
        }
        this.message = txt;
        this.battery--;
    }

    sendMessage(phone) {
        if (this.status !== true) {
            alert('Điện thoai' + this.name + ' đang tắt không sử dụng được.');
            return;
        }
        phone.inBox.push(this.message);
        this.outBox.push(this.message);
        this.battery--;
    }

    getInBox() {
        if (this.status !== true) {
            alert('Điện thoai' + this.name + ' đang tắt không sử dụng được.');
            return;
        }
        this.battery--;
        return this.inBox;
    }

    getOutBox() {
        if (this.status !== true) {
            alert('Điện thoai' + this.name + ' đang tắt không sử dụng được.');
            return;
        }
        this.battery--;
        return this.outBox;
    }
}
