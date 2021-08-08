const listeners = [];

const size = {
    width: 0,
    height: 0,

    set: function ({width, height}) {
        size.width = width;
        size.height = height;

        listeners.forEach(function (cb) {
            cb(size);
        });
    },

    addListener: function (cb) {
        listeners.push(cb);
    },

    removeListener: function (cb) {
        var index = listeners.indexOf(cb);
        if (index > -1) {
            listeners.splice(index, 1);
        }
    },
};

export default size;