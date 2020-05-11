export class Policy {
    constructor(name = '', room = '', command = '', condition = '') {
        this.name = name;
        this.room = room;
        this.command = command;
        this.condition = condition;
        this.countCondition = 0;
    }

    reset() {
        this.name = '';
        this.room = '';
        this.command = '';
        this.condition = '';
        this.countCondition = 0;
    }

    addCondition(add_condition) {
        if (this.condition !== '') {
            this.condition = this.condition + ', ';
        }

        this.condition = this.condition + add_condition;
    }

    addCommandToPolicy(airConditioner, light, shutters) {
        var sensors = [];
        if (light) {
            sensors.push('light ' + light);
        }

        if (airConditioner) {
            sensors.push('air conditioner ' + airConditioner);;
        }

        if (shutters) {
            sensors.push('shutters ' + shutters);
        }
        this.command = sensors.join(' ,');
    }
}
