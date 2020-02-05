require.config({
    paths: {
        config: '../utils/config'
    }
});

define(['config'], function (APIURLS) {
    var category = {
        show: function () {
            return $.get(APIURLS.category_show)

        }
    }
    return category
})