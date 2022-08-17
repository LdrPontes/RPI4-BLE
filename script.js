const bleno = require('bleno');

var name = 'name';
var serviceUuids = ['6E400001-B5A3-F393-E0A9-E50E24DCCA9E']

bleno.on('stateChange', function(state) {
    console.log('on stateChange: ' + state);
    if (state === 'poweredOn') {
        bleno.startAdvertising(name, serviceUuids);
        bleno.setServices()
    } else {
        bleno.stopAdvertising();
    }
});