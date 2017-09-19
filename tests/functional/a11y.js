define(
    [
        'require',
        'intern!object',
        'intern/chai!assert',
        'intern/chai!expect',
        'intern/dojo/node!intern-a11y'
    ],
    function ( require, registerSuite, assert, expect, a11y ) {
    var axe = a11y.services.axe;

    registerSuite({
        name: 'aXe',
        'Local': function () {
            this.skip()
            return axe.check({
                    remote: this.remote,
                    source: require.toUrl('resume.htm')
            });
        },
        'Remote': function () {
            //this.skip();
            return axe.check({
                    remote: this.remote,
                    source: require.toUrl('https://www.mlb.com/rockies')
                });
        }
    });
});
